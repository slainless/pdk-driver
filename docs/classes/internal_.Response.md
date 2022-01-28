[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Response

# Class: Response

[<internal>](../modules/internal_.md).Response

## Hierarchy

- [`BodyMixin`](internal_.BodyMixin.md)

  ↳ **`Response`**

## Table of contents

### Constructors

- [constructor](internal_.Response.md#constructor)

### Properties

- [body](internal_.Response.md#body)
- [bodyUsed](internal_.Response.md#bodyused)
- [headers](internal_.Response.md#headers)
- [ok](internal_.Response.md#ok)
- [redirected](internal_.Response.md#redirected)
- [size](internal_.Response.md#size)
- [status](internal_.Response.md#status)
- [statusText](internal_.Response.md#statustext)
- [type](internal_.Response.md#type)
- [url](internal_.Response.md#url)

### Methods

- [arrayBuffer](internal_.Response.md#arraybuffer)
- [blob](internal_.Response.md#blob)
- [buffer](internal_.Response.md#buffer)
- [clone](internal_.Response.md#clone)
- [formData](internal_.Response.md#formdata)
- [json](internal_.Response.md#json)
- [text](internal_.Response.md#text)
- [error](internal_.Response.md#error)
- [redirect](internal_.Response.md#redirect)

## Constructors

### constructor

• **new Response**(`body?`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | ``null`` \| [`BodyInit`](../modules/internal_.md#bodyinit) |
| `init?` | [`ResponseInit`](../interfaces/internal_.ResponseInit.md) |

#### Overrides

[BodyMixin](internal_.BodyMixin.md).[constructor](internal_.BodyMixin.md#constructor)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:170

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

#### Defined in

node_modules/node-fetch/@types/index.d.ts:172

___

### ok

• `Readonly` **ok**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:173

___

### redirected

• `Readonly` **redirected**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:174

___

### size

• `Readonly` **size**: `number`

#### Inherited from

[BodyMixin](internal_.BodyMixin.md).[size](internal_.BodyMixin.md#size)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:114

___

### status

• `Readonly` **status**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:175

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:176

___

### type

• `Readonly` **type**: [`ResponseType`](../modules/internal_.md#responsetype)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:177

___

### url

• `Readonly` **url**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:178

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

▸ **clone**(): [`Response`](internal_.Response.md)

#### Returns

[`Response`](internal_.Response.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:179

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

___

### error

▸ `Static` **error**(): [`Response`](internal_.Response.md)

#### Returns

[`Response`](internal_.Response.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:181

___

### redirect

▸ `Static` **redirect**(`url`, `status?`): [`Response`](internal_.Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `status?` | `number` |

#### Returns

[`Response`](internal_.Response.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:182
