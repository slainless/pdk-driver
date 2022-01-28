[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Cookie

# Class: Cookie

[<internal>](../modules/internal_.md).Cookie

Class implementation of Deno's Cookie.

## Implements

- [`Cookie`](internal_.Cookie.md)

## Implemented by

- [`Cookie`](internal_.Cookie.md)

## Table of contents

### Constructors

- [constructor](internal_.Cookie.md#constructor)

### Properties

- [name](internal_.Cookie.md#name)
- [params](internal_.Cookie.md#params)
- [value](internal_.Cookie.md#value)

### Methods

- [toFullString](internal_.Cookie.md#tofullstring)
- [toString](internal_.Cookie.md#tostring)

## Constructors

### constructor

• **new Cookie**(`name`, `value`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |
| `params` | [`Omit`](../modules/internal_.md#omit)<[`BrowserCookie`](../interfaces/internal_.BrowserCookie.md), ``"name"`` \| ``"value"``\> |

#### Defined in

[src/lib/cookie.ts:46](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L46)

## Properties

### name

• **name**: `string`

#### Implementation of

Cookie.name

___

### params

• **params**: [`Omit`](../modules/internal_.md#omit)<[`BrowserCookie`](../interfaces/internal_.BrowserCookie.md), ``"name"`` \| ``"value"``\>

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

[src/lib/cookie.ts:58](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L58)

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

[src/lib/cookie.ts:83](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/lib/cookie.ts#L83)
