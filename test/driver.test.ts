import test from 'ava'
import * as imported from '../src/driver.js'
import Connection, { Credential } from '../src/connection.js'
import { readFileSync } from 'node:fs'
import { AnggotaKeluargaScheme } from '../src/lib/schema.js'
import * as s from 'superstruct'
import { get } from 'lodash-es'

const credential: Credential = JSON.parse(
  readFileSync('dev/credential.json', { encoding: 'utf-8' })
)
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
  const d = new imported.default({
    username: '',
    password: '',
  })

  t.true(d.connection instanceof Connection)
})

test('Driver can run multiple & asynchronous getDataPenduduk()', async (t) => {
  const d = new imported.default(credential)

  await t.notThrowsAsync(() =>
    Promise.all([
      d.getDataPenduduk({ page: 1 }),
      d.getDataPenduduk({ page: 2 }),
      d.getDataPenduduk({ page: 3 }),
    ]).then((r) => {
      for (const v of r) {
        t.true(v.data.length === 15)
        t.true(s.is(v.data, s.array(AnggotaKeluargaScheme)))
      }
    })
  )
})

test('Driver can run multiple & asynchronous findDataPenduduk()', async (t) => {
  const d = new imported.default(credential)
  await t.notThrowsAsync(() =>
    Promise.all([
      d.findDataPenduduk('KODE', '7310110705680002'),
      d.findDataPenduduk('KODE', '7310115506680007'),
      d.findDataPenduduk('KODE', '7311021608790002'),
    ]).then((r) => {
      for (const v of r) {
        t.true(s.is(v, AnggotaKeluargaScheme))
        t.true(
          s.is(
            v,
            s.type({
              nik: s.union([
                s.literal('_7310110705680002'),
                s.literal('_7310115506680007'),
                s.literal('_7311021608790002'),
              ]),
            })
          )
        )
      }
    })
  )
})

test('Driver can run multiple method asynchronously', async (t) => {
  const d = new imported.default(credential)
  await t.notThrowsAsync(() =>
    Promise.all([
      d.getDataPenduduk({ page: 1 }),
      d.getDataPenduduk({ page: 2 }),
      d.findDataPenduduk('KODE', '7310110705680002'),
      d.findDataPenduduk('KODE', '7310115506680007'),
      d.findDataPenduduk('KODE', '7311021608790002'),
    ]).then((r) => {
      for (const i in r) {
        if (['0', '1'].includes(i)) {
          t.true(
            s.is(
              r[i],
              s.object({
                count: s.number(),
                data: s.array(AnggotaKeluargaScheme),
              })
            )
          )
          t.true(get(r[i], 'data.length') === 15)
        } else {
          t.true(s.is(r[i], AnggotaKeluargaScheme))
          t.true(
            s.is(
              r[i],
              s.type({
                nik: s.union([
                  s.literal('_7310110705680002'),
                  s.literal('_7310115506680007'),
                  s.literal('_7311021608790002'),
                ]),
              })
            )
          )
        }
      }
    })
  )
})
