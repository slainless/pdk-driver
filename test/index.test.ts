import test from 'ava'
import * as imported from '../src/index.js'
import Driver from '../src/driver.js'
import Connection from '../src/connection.js'

test('Entrypoint export Driver by default', (t) => {
  t.is(imported.default, Driver)
})

test('Entrypoint export Connection', (t) => {
  t.is(imported.Connection, Connection)
})
