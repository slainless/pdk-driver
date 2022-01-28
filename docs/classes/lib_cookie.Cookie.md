[prodeskel-node-ts](../README.md) / [Modules](../modules.md) / [lib/cookie](../modules/lib_cookie.md) / Cookie

# Class: Cookie

[lib/cookie](../modules/lib_cookie.md).Cookie

Class implementation of Deno's Cookie.

## Implements

- [`Cookie`](lib_cookie.Cookie.md)

## Implemented by

- [`Cookie`](lib_cookie.Cookie.md)

## Table of contents

### Constructors

- [constructor](lib_cookie.Cookie.md#constructor)

### Properties

- [name](lib_cookie.Cookie.md#name)
- [params](lib_cookie.Cookie.md#params)
- [value](lib_cookie.Cookie.md#value)

### Methods

- [toFullString](lib_cookie.Cookie.md#tofullstring)
- [toString](lib_cookie.Cookie.md#tostring)

## Constructors

### constructor

• **new Cookie**(`name`, `value`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |
| `params` | `Omit`<`BrowserCookie`, ``"name"`` \| ``"value"``\> |

#### Defined in

[src/lib/cookie.ts:46](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/cookie.ts#L46)

## Properties

### name

• **name**: `string`

#### Implementation of

Cookie.name

___

### params

• **params**: `Omit`<`BrowserCookie`, ``"name"`` \| ``"value"``\>

#### Implementation of

Cookie.params

___

### value

• **value**: `string`

#### Implementation of

Cookie.value

## Methods

### toFullString

▸ **toFullString**(): `string`

Returns full (as in the original) string of the Cookie

#### Returns

`string`

#### Implementation of

Cookie.toFullString

#### Defined in

[src/lib/cookie.ts:58](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/cookie.ts#L58)

___

### toString

▸ **toString**(): `string`

Returns short string of the Cookie that contains
only the key (name) and the value.

#### Returns

`string`

#### Implementation of

Cookie.toString

#### Defined in

[src/lib/cookie.ts:83](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/cookie.ts#L83)
