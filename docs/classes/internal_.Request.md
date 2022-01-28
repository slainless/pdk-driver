[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Request

# Class: Request

[<internal>](../modules/internal_.md).Request

## Hierarchy

- [`BodyMixin`](internal_.BodyMixin.md)

  ↳ **`Request`**

## Table of contents

### Constructors

- [constructor](internal_.Request.md#constructor)

### Properties

- [body](internal_.Request.md#body)
- [bodyUsed](internal_.Request.md#bodyused)
- [headers](internal_.Request.md#headers)
- [method](internal_.Request.md#method)
- [redirect](internal_.Request.md#redirect)
- [referrer](internal_.Request.md#referrer)
- [referrerPolicy](internal_.Request.md#referrerpolicy)
- [signal](internal_.Request.md#signal)
- [size](internal_.Request.md#size)
- [url](internal_.Request.md#url)

### Methods

- [arrayBuffer](internal_.Request.md#arraybuffer)
- [blob](internal_.Request.md#blob)
- [buffer](internal_.Request.md#buffer)
- [clone](internal_.Request.md#clone)
- [formData](internal_.Request.md#formdata)
- [json](internal_.Request.md#json)
- [text](internal_.Request.md#text)

## Constructors

### constructor

• **new Request**(`input`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](../modules/internal_.md#requestinfo) |
| `init?` | [`RequestInit`](../interfaces/internal_.RequestInit.md) |

#### Overrides

[BodyMixin](internal_.BodyMixin.md).[constructor](internal_.BodyMixin.md#constructor)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:134

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../interfaces/internal_.ReadableStream.md)

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[body](internal_.BodyMixin.md#body)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:112

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[bodyUsed](internal_.BodyMixin.md#bodyused)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:113

___

### headers

• `Readonly` **headers**: [`Headers`](internal_.Headers.md)

Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:139

___

### method

• `Readonly` **method**: `string`

Returns request's HTTP method, which is "GET" by default.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:143

___

### redirect

• `Readonly` **redirect**: [`RequestRedirect`](../modules/internal_.md#requestredirect)

Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:147

___

### referrer

• `Readonly` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:159

___

### referrerPolicy

• `Readonly` **referrerPolicy**: [`ReferrerPolicy`](../modules/internal_.md#referrerpolicy)

A referrer policy to set request’s referrerPolicy.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:163

___

### signal

• `Readonly` **signal**: [`AbortSignal`](../modules/internal_.md#abortsignal)

Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:151

___

### size

• `Readonly` **size**: `number`

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[size](internal_.BodyMixin.md#size)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:114

___

### url

• `Readonly` **url**: `string`

Returns the URL of request as a string.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:155

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[arrayBuffer](internal_.BodyMixin.md#arraybuffer)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:120

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[blob](internal_.BodyMixin.md#blob)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:122

___

### buffer

▸ **buffer**(): `Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

**`deprecated`** Please use 'response.arrayBuffer()' instead of 'response.buffer()

#### Returns

`Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[buffer](internal_.BodyMixin.md#buffer)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:119

___

### clone

▸ **clone**(): [`Request`](internal_.Request.md)

#### Returns

[`Request`](internal_.Request.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:164

___

### formData

▸ **formData**(): `Promise`<[`FormData`](../modules/internal_.md#formdata)\>

#### Returns

`Promise`<[`FormData`](../modules/internal_.md#formdata)\>

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[formData](internal_.BodyMixin.md#formdata)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:121

___

### json

▸ **json**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[json](internal_.BodyMixin.md#json)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:123

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[text](internal_.BodyMixin.md#text)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:124
