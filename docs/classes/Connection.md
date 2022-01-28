[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / Connection

# Class: Connection

Class to handle cookies management, login, and fetching.
Other implementations including:
- on-demand login & cookies generation
- throttled & cached login
- expiring session check logic

## Table of contents

### Constructors

- [constructor](Connection.md#constructor)

### Properties

- [\_\_cookieJar](Connection.md#__cookiejar)
- [\_\_isLoggedIn](Connection.md#__isloggedin)
- [cookieProgress](Connection.md#cookieprogress)
- [credential](Connection.md#credential)
- [headers](Connection.md#headers)
- [lockCookies](Connection.md#lockcookies)
- [loginProgress](Connection.md#loginprogress)
- [BASE\_URL](Connection.md#base_url)
- [HOST](Connection.md#host)

### Accessors

- [cookieJar](Connection.md#cookiejar)
- [isLoggedIn](Connection.md#isloggedin)

### Methods

- [clearState](Connection.md#clearstate)
- [dumpState](Connection.md#dumpstate)
- [fetch](Connection.md#fetch)
- [generateCookies](Connection.md#generatecookies)
- [login](Connection.md#login)

## Constructors

### constructor

• **new Connection**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ConnectionOptions`](../interfaces/ConnectionOptions.md) |

#### Defined in

[src/connection.ts:68](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L68)

## Properties

### \_\_cookieJar

• `Private` **\_\_cookieJar**: [`PHPCookieJar`](internal_.PHPCookieJar.md)

#### Defined in

[src/connection.ts:53](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L53)

___

### \_\_isLoggedIn

• `Private` **\_\_isLoggedIn**: `boolean` = `false`

#### Defined in

[src/connection.ts:54](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L54)

___

### cookieProgress

• `Private` **cookieProgress**: ``null`` \| `Promise`<`void`\> = `null`

#### Defined in

[src/connection.ts:64](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L64)

___

### credential

• `Private` `Optional` **credential**: [`Credential`](../modules.md#credential)

#### Defined in

[src/connection.ts:62](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L62)

___

### headers

• **headers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `User-Agent` | `string` |

#### Defined in

[src/connection.ts:48](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L48)

___

### lockCookies

• `Private` **lockCookies**: `boolean` = `false`

#### Defined in

[src/connection.ts:66](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L66)

___

### loginProgress

• `Private` **loginProgress**: ``null`` \| `Promise`<`void`\> = `null`

#### Defined in

[src/connection.ts:65](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L65)

___

### BASE\_URL

▪ `Static` **BASE\_URL**: ``"http://prodeskel.binapemdes.kemendagri.go.id"``

#### Defined in

[src/connection.ts:45](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L45)

___

### HOST

▪ `Static` **HOST**: ``"prodeskel.binapemdes.kemendagri.go.id"``

#### Defined in

[src/connection.ts:44](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L44)

## Accessors

### cookieJar

• `get` **cookieJar**(): [`PHPCookieJar`](internal_.PHPCookieJar.md)

#### Returns

[`PHPCookieJar`](internal_.PHPCookieJar.md)

#### Defined in

[src/connection.ts:58](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L58)

___

### isLoggedIn

• `get` **isLoggedIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/connection.ts:55](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L55)

## Methods

### clearState

▸ **clearState**(): [`Connection`](Connection.md)

#### Returns

[`Connection`](Connection.md)

#### Defined in

[src/connection.ts:364](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L364)

___

### dumpState

▸ **dumpState**(): `Promise`<[`ConnectionState`](../interfaces/ConnectionState.md)\>

Dump the current state of the connections, which
contains the `cookies` and `isLoggedIn` property
of the connection

#### Returns

`Promise`<[`ConnectionState`](../interfaces/ConnectionState.md)\>

#### Defined in

[src/connection.ts:357](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L357)

___

### fetch

▸ **fetch**(`input`, `init?`): `Promise`<[`Response`](internal_.Response.md)\>

Wrapped `fetch` function that will make sure connection is logged in
before doing the request.

Will auto-login if not already logged in, as long as `useCredential`
is set up, else throwing error.

Auto login is throttled by `this.isLoggedIn`, will wait for ongoing
login call before calling own function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](../modules/internal_.md#requestinfo) |
| `init?` | [`Omit`](../modules/internal_.md#omit)<[`RequestInit`](../interfaces/internal_.RequestInit.md), ``"body"``\> & { `body?`: () => ``null`` \| [`BodyInit`](../modules/internal_.md#bodyinit)  } |

#### Returns

`Promise`<[`Response`](internal_.Response.md)\>

#### Defined in

[src/connection.ts:243](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L243)

___

### generateCookies

▸ **generateCookies**(): `Promise`<`void`\>

Generate cookies (mainly to get `PHPSESSID`) from the server
by touching `/app_login/`

#### Returns

`Promise`<`void`\>

#### Defined in

[src/connection.ts:86](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L86)

___

### login

▸ **login**(`credential?`): `Promise`<`void`\>

Logging in to prodeskel by `POST`-ing to `/app_login/`.
Requires cookies to be generated beforehand and `PHPSESSID` cookie exist.

If `useCredential` is set up, input `credential` will be ignored.

Will call `this.generateCookies()` when no cookies found.

Calling this method will make sure that cookies is generated,
cookies.sessionId is exist, and this.isLogin exist

Throw error on fail attempt.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential?` | ``null`` \| [`Credential`](../modules.md#credential) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/connection.ts:128](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/connection.ts#L128)
