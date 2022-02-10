import test from 'ava'
import * as imported from '../src/connection.js'
import { Cookie, PHPCookieJar } from '../src/lib/cookie.js'
import { readFileSync } from 'node:fs'
import { FormData } from 'formdata-polyfill/esm.min.js'
import { nanoid } from 'nanoid'

const credential: imported.Credential = JSON.parse(
  readFileSync('dev/credential.json', { encoding: 'utf-8' })
)
const genBody = () => {
  const body = new FormData()
  body.append('nmgp_opcao', 'ajax_navigate')
  body.append('opc', 'rec') // receber/recibo/receita => get
  body.append('parm', '1')
  return body
}

test('Export the class by default', (t) => {
  t.notThrows(() => new imported.default())
})

test('Connection will generate cookies on construction', (t) => {
  const c = new imported.default()
  t.true(c.cookieJar.length !== 0)
  t.true(c.cookieJar instanceof PHPCookieJar)
  t.true(c.cookieJar.sessionId instanceof Cookie)
  t.true(c.cookieJar.sessionId?.name === 'PHPSESSID')
})

test('Connection can login with our own generated cookies', async (t) => {
  const c = new imported.default()
  await t.notThrowsAsync(() => c.login(credential))
  t.true(c.isLoggedIn)
  await t.notThrowsAsync(() =>
    c
      .fetch('/grid_agtkeluarga/index.php', {
        body: genBody,
        method: 'POST',
      })
      .then((r) => r.text())
      .then((r) => {
        t.true(r.indexOf('Pengguna yang tidak berizin') === -1)
      })
  )
})

test('Connection can autologin on demand when useCredential is set', async (t) => {
  const c = new imported.default({
    useCredential: credential,
  })
  await t.notThrowsAsync(() =>
    c
      .fetch('/grid_agtkeluarga/index.php', {
        body: genBody,
        method: 'POST',
      })
      .then((r) => r.text())
      .then((r) => {
        t.true(r.indexOf('Pengguna yang tidak berizin') === -1)
        return
      })
  )
})

test('Connection will throw error on wrong credential', async (t) => {
  const c = new imported.default({
    useCredential: {
      username: 'abc',
      password: 'cde',
    },
  })
  await t.throwsAsync(() => c.login())
  t.false(c.isLoggedIn)
})
