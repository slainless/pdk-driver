import Connection, { ConnectionOptions, Credential } from './connection.js'
import { AnggotaKeluarga, parseAgtKeluarga } from './lib/data-parser.js'
import { ParserResponse } from './lib/types.js'
import { FormData } from 'formdata-polyfill/esm.min.js'

export type GetOptions = {
  /** Should method returns raw HTML string or processed and validated object? */
  raw?: boolean
  // TODO: add ability to change perPage!
  /** Navigate to page or by offset. Default: `page: 1` */
  // nav?: `page: ${number}` | `offset: ${number}`
  page?: number
  /**
   * How many should server returns per page. Will be used as factor for calculation in page nav.
   * Default: `15`
   */
  // perPage: number | 'all'
}

export default class Driver {
  public connection: Connection
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
  generateCommand(command: `nav_offset: ${number}` | `per_page: ${number}`) {
    const jar = this.connection.cookieJar
    if (jar.length === 0 || jar.sessionId == null)
      throw new Error('Generate session ID first before calling this method!')

    const body = new FormData()
    body.append('nmgp_opcao', 'ajax_navigate')
    body.append('script_case_init', '1')
    body.append('script_case_session', jar.sessionId!.value)

    const param = /\w+: (\d+)/.exec(command)![1]
    if (command.startsWith('nav_offset: ')) {
      body.append('opc', 'rec')
      body.append('parm', param)
    } else {
      body.append('opc', 'muda_qt_linhas')
      body.append('parm', param)
    }
    return body
  }

  // if options.raw = true, then result will be raw body
  async getDataPenduduk(options?: GetOptions & { raw: true }): Promise<string>
  // else, we return parsed result
  async getDataPenduduk(
    options?: GetOptions
  ): Promise<ParserResponse<AnggotaKeluarga>>
  async getDataPenduduk(
    options?: GetOptions
  ): Promise<string | ParserResponse<AnggotaKeluarga>> {
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
      console.warn(e)
      throw new Error(`Server error! Didn't return a valid JSON response`)
    }

    return parseAgtKeluarga(json)
  }
}
