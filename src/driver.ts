import Connection, { ConnectionOptions, Credential } from './connection.js'
import { AnggotaKeluarga, parseAgtKeluarga } from './lib/data-parser.js'
import { GetOptions, GetResults, ParserResponse } from './lib/types.js'
import { FormData } from 'formdata-polyfill/esm.min.js'
import * as s from 'superstruct'
import { GetPendudukScheme } from './lib/schema.js'
import { nanoid } from 'nanoid'

export default class Driver {
  public connection: Connection
  private randInitId = nanoid(6)

  constructor(
    credential: Credential,
    connectionOptions?: Omit<ConnectionOptions, 'useCredential'>
  ) {
    this.connection = new Connection({
      useCredential: credential,
      ...connectionOptions,
    })
  }

  /**
   * Generate form data which is basically a command to control server's response
   * - `nav_offset: ${number}`: navigate a grid/table view with offset
   * - `per_page: ${number}`: change how many data a grid/table view shows per page
   */
  generateCommand(
    command:
      | `nav_offset: ${number}`
      | `per_page: ${number}`
      | `search: ${number}`
  ) {
    const jar = this.connection.cookieJar
    if (jar.length === 0 || jar.sessionId == null)
      throw new Error('Generate session ID first before calling this method!')

    const body = new FormData()
    body.append('script_case_session', jar.sessionId!.value)

    // portuguese scriptcase PHP framework
    body.append('nmgp_opcao', 'ajax_navigate') // opcao/opc => option

    const param = /\w+: (.+)/.exec(command)![1]
    if (command.startsWith('nav_offset: ')) {
      body.append('script_case_init', `getAK_${this.randInitId}`) // channel of the request
      body.append('opc', 'rec') // receber/recibo/receita => get
      body.append('parm', param)
    } else if (command.startsWith('per_page: ')) {
      body.append('script_case_init', `getAK_${this.randInitId}`)
      body.append('opc', 'muda_qt_linhas') // muda qt linhas => change row number
      body.append('parm', param)
    } else if (command.startsWith('search: ')) {
      body.append('script_case_init', `findAK_${this.randInitId}`)
      body.append('opc', 'fast_search')
      body.append('parm', 'SC_all_Cmp_SCQS_qp_SCQS_' + param)
    }
    return body
  }

  // if options.raw = true, then result will be raw body
  async getDataPenduduk(options: GetOptions & { raw: true }): Promise<string>
  // else, we return parsed result
  async getDataPenduduk(
    options?: GetOptions
  ): Promise<GetResults<AnggotaKeluarga>>
  async getDataPenduduk(
    options?: GetOptions
  ): Promise<string | GetResults<AnggotaKeluarga>> {
    const { raw, page } = options ?? {}

    // TODO: add ability to change perPage!
    const offset = 15 * ((page ?? 1) - 1) + 1
    // generate command to navigate offset-based

    const result = await this.connection.fetch('/grid_agtkeluarga/index.php', {
      method: 'POST',
      body: () => this.generateCommand(`nav_offset: ${offset}`),
    })

    const text = await result.text()
    if (raw) return text

    let json: unknown
    try {
      json = JSON.parse(text)
    } catch (e) {
      console.error(e)
      throw new Error(`Server error! Didn't return a valid JSON response`)
    }

    s.assert(json, GetPendudukScheme)
    const bodyRaw = json.setValue.find((v) => v.field === 'sc_grid_body')
    const toolbarRaw = json.setValue.find(
      (v) => v.field === 'sc_grid_toobar_bot'
    )

    if (bodyRaw == null || toolbarRaw == null)
      throw new Error('Cannot find body or the toolbar from response!')

    const count = /\[\d+ sampai \d+ dari (\d+)\]/g.exec(toolbarRaw.value)?.[1]
    if (count == null) throw new Error('Count number not found!')

    return {
      data: parseAgtKeluarga(bodyRaw.value),
      count: +count,
    }
  }

  async findDataPenduduk(
    by: 'KODE' | 'NAMA',
    input: `${number}`,
    options: Omit<GetOptions, 'page'> & { raw: true }
  ): Promise<string>
  async findDataPenduduk(
    by: 'KODE' | 'NAMA',
    input: `${number}`,
    options?: Omit<GetOptions, 'page'>
  ): Promise<AnggotaKeluarga | null>
  async findDataPenduduk(
    by: 'KODE' | 'NAMA',
    input: `${number}`,
    options?: Omit<GetOptions, 'page'>
  ): Promise<AnggotaKeluarga | null | string> {
    const { raw } = options ?? {}

    const req = async () =>
      await this.connection
        .fetch('/grid_agtkeluarga/index.php', {
          method: 'POST',
          body: () => this.generateCommand(`search: ${input}`),
        })
        .then((r) => r.text())

    let text = await req()
    if (text.indexOf(`var scQSInitVal = \"\";`) !== -1) text = await req()

    if (raw) return text

    let json: unknown
    try {
      json = JSON.parse(text)
    } catch (e) {
      console.error(e)
      throw new Error(`Server error! Didn't return a valid JSON response`)
    }

    s.assert(json, GetPendudukScheme)
    const bodyRaw = json.setValue.find((v) => v.field === 'sc_grid_body')

    if (bodyRaw == null)
      throw new Error('Cannot find body or the toolbar from response!')

    const parsed = parseAgtKeluarga(bodyRaw.value)
    return parsed.length === 0 ? null : parsed[0]
  }
}
