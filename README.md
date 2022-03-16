# Prodeskel Driver in Node.JS

An API to make access easier to Prodeskel by providing user-friendly APIs, allowing faster development for system integration.

---

**NOTE:** This project is an `ESM` package, meaning it cannot be `require()` from CommonJS.

Read here: [Pure ESM Package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

---

## Quick Start

Before starting, generate `dev/connection_dump.json` and `dev/credential.json`
(or, just modify `dev/index.ts` which will need those two files to be present).
Both files definition can be checked in `src/connection.ts`.

`dev/connection_dump.json`:

```json
{
  "cookies": "",
  "isLoggedIn": false
}
```

`dev/credential.json`:

```json
{
  "username": "myusername",
  "password": "secretKey"
}
```

Then, import `Driver` from `src/index.ts`. Initialize `Driver` with credential
then call it's method. Login can also (and should) be enforced before attempting
to call any other method to make sure initial request and resource is not wasted
because of bad session.

---

## API Overview

TypeDoc documentation: [prodeskel-driver-docs.netlify.app](https://prodeskel-driver-docs.netlify.app/)

This project consists of 3 components:

- The `driver`
- The `connection`
- The `library`

`driver` and `connection` are exposed to end-user. But, the API mainly comes from `driver`, which is exported by default in the project's entrypoint (`index.js`).

### Driver

Driver is the API of the module. It contains all methods used to read and write data to/from Prodeskel. The usage is very simple, all we need to do is import it then initialize it with credential:

```ts
import Driver from 'prodeskel-driver'

const credential = {
  username: 'my-username',
  password: 'my-password',
}

const driver = new Driver(credential)
// then, call driver's method.
```

After initialization, the driver can be instantly used without needing any more configuration. The driver will handle connection and cookie management in background. All we had to do is calling the method. For example,

```ts
const driver = new Driver(credential)
const result = await driver.getDataPenduduk({ page: 1 })
console.log(result)
```

The driver also supports parallel asynchronous fetching:

```ts
const driver = new Driver(credential)
const results = await Promise.all([
  driver.getDataPenduduk({ page: 1 }),
  driver.getDataPenduduk({ page: 2 }),
  driver.getDataPenduduk({ page: 3 }),
])
console.log(results)
```

### Connection

Connection is the session handler of the driver. It manages connection, login process, and cookie. It's actually not needed by end-user except when building a custom driver. Basic usage example:

```ts
import { Connection } from 'prodeskel-driver'

const credential = {
  username: 'my-username',
  password: 'my-password',
}

const connection = new Connection({
  useCredential: credential,
})
await connection.login()
console.log(connection.isLoggedIn, connection.cookieJar)
```

---

## Test

Tests are available in `/test`. Testing is done using ava.js test runner (command: `yarn test`). Sometimes, the parallel testing is buggy. In that case, run test individually per test unit.

---

This project is using:

- [cheerio](https://cheerio.js.org/) to parse HTML into `jquery`-like object to make parsing easier.
- [superstruct](https://github.com/ianstormtaylor/superstruct/) to validate data with schema
- [ava](https://github.com/avajs/ava) for unit testing
- [prettier](https://prettier.io/) for automatic code formatter

---

## TODO

- [x] Parallel-able async method
- [x] Allow auto-relogin on expiring session
- [x] Get data penduduk by page
- [x] Find data penduduk by query
- [ ] Create data penduduk
- [ ] Update data penduduk
- [ ] Delete data penduduk
- [ ] Dump data penduduk
- [ ] Mass update data penduduk
- [ ] Sinkronisasi data penduduk
