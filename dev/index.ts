import { Driver, ConnectionState, Credential } from '../src/index.js'
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
  const test = await Promise.all([
    driver.getDataPenduduk({ page: 1 }),
    driver.getDataPenduduk({ page: 2 }),
    driver.getDataPenduduk({ page: 3 }),
  ])
  console.log(
    test.map((v, i) => ({ data: v.data.map((d) => d.nama), page: i + 1 }))
  )
  writeFileSync(
    CONNECTION_DUMP_FILE,
    JSON.stringify(await driver.connection.dumpState())
  )
}

main()
