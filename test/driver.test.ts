import test from 'ava'
import { has, get } from 'lodash-es'
import * as imported from '../src/driver.js'
import Connection from '../src/connection.js'

test('Driver export the class by default', (t) => {
  t.notThrows(
    () =>
      new imported.default({
        username: '',
        password: '',
      })
  )
})

test('Driver initialize a Connection', (t) => {
  const { default: Driver } = imported
  const driver = new Driver({
    username: '',
    password: '',
  })

  t.true(get(driver, 'connection') instanceof Connection)
})
