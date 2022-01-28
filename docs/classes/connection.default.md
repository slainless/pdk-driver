[prodeskel-node-ts](../README.md) / [Modules](../modules.md) / [connection](../modules/connection.md) / default

# Class: default

[connection](../modules/connection.md).default

Class to handle cookies management, login, and fetching.
Other implementations including:
- on-demand login & cookies generation
- throttled & cached login
- expiring session check logic

## Table of contents

### Constructors

- [constructor](connection.default.md#constructor)

### Properties

- [\_\_cookieJar](connection.default.md#__cookiejar)
- [\_\_isLoggedIn](connection.default.md#__isloggedin)
- [cookieProgress](connection.default.md#cookieprogress)
- [credential](connection.default.md#credential)
- [headers](connection.default.md#headers)
- [lockCookies](connection.default.md#lockcookies)
- [loginProgress](connection.default.md#loginprogress)
- [BASE\_URL](connection.default.md#base_url)
- [HOST](connection.default.md#host)

### Accessors

- [cookieJar](connection.default.md#cookiejar)
- [isLoggedIn](connection.default.md#isloggedin)

### Methods

- [clearState](connection.default.md#clearstate)
- [dumpState](connection.default.md#dumpstate)
- [fetch](connection.default.md#fetch)
- [generateCookies](connection.default.md#generatecookies)
- [login](connection.default.md#login)

## Constructors

### constructor

• **new default**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ConnectionOptions`](../interfaces/connection.ConnectionOptions.md) |

#### Defined in

[src/connection.ts:68](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L68)

## Properties

### \_\_cookieJar

• `Private` **\_\_cookieJar**: [`PHPCookieJar`](lib_cookie.PHPCookieJar.md)

#### Defined in

[src/connection.ts:53](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L53)

___

### \_\_isLoggedIn

• `Private` **\_\_isLoggedIn**: `boolean` = `false`

#### Defined in

[src/connection.ts:54](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L54)

___

### cookieProgress

• `Private` **cookieProgress**: ``null`` \| `Promise`<`void`\> = `null`

#### Defined in

[src/connection.ts:64](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L64)

___

### credential

• `Private` `Optional` **credential**: [`Credential`](../modules/connection.md#credential)

#### Defined in

[src/connection.ts:62](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L62)

___

### headers

• **headers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `User-Agent` | `string` |

#### Defined in

[src/connection.ts:48](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L48)

___

### lockCookies

• `Private` **lockCookies**: `boolean` = `false`

#### Defined in

[src/connection.ts:66](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L66)

___

### loginProgress

• `Private` **loginProgress**: ``null`` \| `Promise`<`void`\> = `null`

#### Defined in

[src/connection.ts:65](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L65)

___

### BASE\_URL

▪ `Static` **BASE\_URL**: ``"http://prodeskel.binapemdes.kemendagri.go.id"``

#### Defined in

[src/connection.ts:45](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L45)

___

### HOST

▪ `Static` **HOST**: ``"prodeskel.binapemdes.kemendagri.go.id"``

#### Defined in

[src/connection.ts:44](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L44)

## Accessors

### cookieJar

• `get` **cookieJar**(): [`PHPCookieJar`](lib_cookie.PHPCookieJar.md)

#### Returns

[`PHPCookieJar`](lib_cookie.PHPCookieJar.md)

#### Defined in

[src/connection.ts:58](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L58)

___

### isLoggedIn

• `get` **isLoggedIn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/connection.ts:55](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L55)

## Methods

### clearState

▸ **clearState**(): [`default`](connection.default.md)

#### Returns

[`default`](connection.default.md)

#### Defined in

[src/connection.ts:364](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L364)

___

### dumpState

▸ **dumpState**(): `Promise`<[`ConnectionState`](../interfaces/connection.ConnectionState.md)\>

Dump the current state of the connections, which
contains the `cookies` and `isLoggedIn` property
of the connection

#### Returns

`Promise`<[`ConnectionState`](../interfaces/connection.ConnectionState.md)\>

#### Defined in

[src/connection.ts:357](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L357)

___

### fetch

▸ **fetch**(`input`, `init?`): `Promise`<`Response`\>

Wrapped `fetch` function that will make sure connection is logged in
before doing the request.

Will auto-login if not already logged in, as long as `useCredential`
is set up, else throwing error.

Auto login is throttled by `this.isLoggedIn`, will wait for ongoing
login call before calling own function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` |
| `init?` | `Omit`<`RequestInit`, ``"body"``\> & { `body?`: () => ``null`` \| `BodyInit`  } |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/connection.ts:243](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L243)

___

### generateCookies

▸ **generateCookies**(): `Promise`<`void`\>

Generate cookies (mainly to get `PHPSESSID`) from the server
by touching `/app_login/`

#### Returns

`Promise`<`void`\>

#### Defined in

[src/connection.ts:86](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L86)

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
| `credential?` | ``null`` \| [`Credential`](../modules/connection.md#credential) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/connection.ts:128](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L128)
