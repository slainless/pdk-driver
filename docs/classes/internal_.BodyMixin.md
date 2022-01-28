[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BodyMixin

# Class: BodyMixin

[<internal>](../modules/internal_.md).BodyMixin

## Hierarchy

- **`BodyMixin`**

  ↳ [`Response`](internal_.Response.md)

  ↳ [`Request`](internal_.Request.md)

## Table of contents

### Constructors

- [constructor](internal_.BodyMixin.md#constructor)

### Properties

- [body](internal_.BodyMixin.md#body)
- [bodyUsed](internal_.BodyMixin.md#bodyused)
- [size](internal_.BodyMixin.md#size)

### Methods

- [arrayBuffer](internal_.BodyMixin.md#arraybuffer)
- [blob](internal_.BodyMixin.md#blob)
- [buffer](internal_.BodyMixin.md#buffer)
- [formData](internal_.BodyMixin.md#formdata)
- [json](internal_.BodyMixin.md#json)
- [text](internal_.BodyMixin.md#text)

## Constructors

### constructor

• **new BodyMixin**(`body?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`BodyInit`](../modules/internal_.md#bodyinit) |
| `options?` | `Object` |
| `options.size?` | `number` |

#### Defined in

node_modules/node-fetch/@types/index.d.ts:110

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../interfaces/internal_.ReadableStream.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:112

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:113

___

### size

• `Readonly` **size**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:114

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:120

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:122

___

### buffer

▸ **buffer**(): `Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

**`deprecated`** Please use 'response.arrayBuffer()' instead of 'response.buffer()

#### Returns

`Promise`<[`Buffer`](../modules/internal_.md#buffer)\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:119

___

### formData

▸ **formData**(): `Promise`<[`FormData`](../modules/internal_.md#formdata)\>

#### Returns

`Promise`<[`FormData`](../modules/internal_.md#formdata)\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:121

___

### json

▸ **json**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:123

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:124
