[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BrowserCookie

# Interface: BrowserCookie

[<internal>](../modules/internal_.md).BrowserCookie

## Table of contents

### Properties

- [domain](internal_.BrowserCookie.md#domain)
- [expires](internal_.BrowserCookie.md#expires)
- [httpOnly](internal_.BrowserCookie.md#httponly)
- [maxAge](internal_.BrowserCookie.md#maxage)
- [name](internal_.BrowserCookie.md#name)
- [path](internal_.BrowserCookie.md#path)
- [sameSite](internal_.BrowserCookie.md#samesite)
- [secure](internal_.BrowserCookie.md#secure)
- [unparsed](internal_.BrowserCookie.md#unparsed)
- [value](internal_.BrowserCookie.md#value)

## Properties

### domain

• `Optional` **domain**: `string`

Specifies those hosts to which the cookie will be sent.

#### Defined in

[src/lib/cookie.ts:14](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L14)

___

### expires

• `Optional` **expires**: `Date`

Expiration date of the cookie.

#### Defined in

[src/lib/cookie.ts:10](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L10)

___

### httpOnly

• `Optional` **httpOnly**: `boolean`

Indicates that cookie is not accessible via JavaScript.

#### Defined in

[src/lib/cookie.ts:20](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L20)

___

### maxAge

• `Optional` **maxAge**: `number`

Max-Age of the Cookie. Max-Age must be an integer superior or equal to 0.

#### Defined in

[src/lib/cookie.ts:12](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L12)

___

### name

• **name**: `string`

Name of the cookie.

#### Defined in

[src/lib/cookie.ts:6](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L6)

___

### path

• `Optional` **path**: `string`

Indicates a URL path that must exist in the request.

#### Defined in

[src/lib/cookie.ts:16](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L16)

___

### sameSite

• `Optional` **sameSite**: ``"Strict"`` \| ``"Lax"`` \| ``"None"``

Allows servers to assert that a cookie ought not to
be sent along with cross-site requests.

#### Defined in

[src/lib/cookie.ts:25](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L25)

___

### secure

• `Optional` **secure**: `boolean`

Indicates if the cookie is made using SSL & HTTPS.

#### Defined in

[src/lib/cookie.ts:18](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L18)

___

### unparsed

• `Optional` **unparsed**: `string`[]

Additional key value pairs with the form "key=value"

#### Defined in

[src/lib/cookie.ts:27](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L27)

___

### value

• **value**: `string`

Value of the cookie.

#### Defined in

[src/lib/cookie.ts:8](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L8)
