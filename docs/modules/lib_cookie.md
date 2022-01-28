[prodeskel-node-ts](../README.md) / [Modules](../modules.md) / lib/cookie

# Module: lib/cookie

## Table of contents

### Classes

- [Cookie](../classes/lib_cookie.Cookie.md)
- [PHPCookieJar](../classes/lib_cookie.PHPCookieJar.md)

### Functions

- [parseCookies](lib_cookie.md#parsecookies)

## Functions

### parseCookies

▸ **parseCookies**(`cookies`): [`Cookie`](../classes/lib_cookie.Cookie.md)[]

Parse cookies from the headers and returns `Cookie` object.
Cookies parsed from `set-cookie` in the headers

Can (and mainly) be used to parse fetch response's cookies.

Accept input from valid cookies string or `Headers`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cookies` | `string` |

#### Returns

[`Cookie`](../classes/lib_cookie.Cookie.md)[]

#### Defined in

[src/lib/cookie.ts:115](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/cookie.ts#L115)

▸ **parseCookies**(`headers`): [`Cookie`](../classes/lib_cookie.Cookie.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `Headers` |

#### Returns

[`Cookie`](../classes/lib_cookie.Cookie.md)[]

#### Defined in

[src/lib/cookie.ts:116](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/cookie.ts#L116)
