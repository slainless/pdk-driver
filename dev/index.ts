import Driver, { ConnectionState, Credential } from '../src/index.js'
import { readFileSync, writeFileSync } from 'fs'

// CONSTANT
const CONNECTION_DUMP_FILE = 'dev/connection_dump.json'
const CREDENTIAL = 'dev/credential.json'

// ### BOOTSTRAPPING
const credential: Credential = JSON.parse(
  readFileSync(CREDENTIAL, { encoding: 'utf8' })
)
const connectionState: ConnectionState = JSON.parse(
  readFileSync(CONNECTION_DUMP_FILE, { encoding: 'utf8' })
)

const driver = new Driver(credential, {
  initialState: connectionState,
})

// ### TESTING
async function main() {
  const get = Promise.all([
    driver.getDataPenduduk({ page: 1 }),
    driver.getDataPenduduk({ page: 2 }),
    driver.getDataPenduduk({ page: 3 }),
  ]).then((r) =>
    r.map((v, i) => ({ data: v.data.map((d) => d.nama), page: i + 1 }))
  )

  const find = Promise.all([
    driver.findDataPenduduk('KODE', '7310110705680002'),
    driver.findDataPenduduk('KODE', '7311020107790006'),
  ])

  const res = await Promise.all([get, find])
  console.log('get', res[0])
  console.log('find', res[1])
  writeFileSync(
    CONNECTION_DUMP_FILE,
    JSON.stringify(await driver.connection.dumpState())
  )
}

main()
