[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / File

# Interface: File

[<internal>](../modules/internal_.md).File

Provides information about files and allows JavaScript in a web page to access their content.

## Hierarchy

- `Blob`

  ↳ **`File`**

## Table of contents

### Properties

- [lastModified](internal_.File.md#lastmodified)
- [name](internal_.File.md#name)
- [size](internal_.File.md#size)
- [type](internal_.File.md#type)
- [webkitRelativePath](internal_.File.md#webkitrelativepath)

### Methods

- [arrayBuffer](internal_.File.md#arraybuffer)
- [slice](internal_.File.md#slice)
- [stream](internal_.File.md#stream)
- [text](internal_.File.md#text)

## Properties

### lastModified

• `Readonly` **lastModified**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5009

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5010

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Blob.size

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2378

___

### type

• `Readonly` **type**: `string`

#### Inherited from

Blob.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2379

___

### webkitRelativePath

• `Readonly` **webkitRelativePath**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5011

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2380

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:9

___

### slice

▸ **slice**(`start?`, `end?`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Inherited from

Blob.slice

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2381

▸ **slice**(`start?`, `end?`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Inherited from

Blob.slice

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:10

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/internal_.md#readablestream)<`any`\>

#### Returns

[`ReadableStream`](../modules/internal_.md#readablestream)<`any`\>

#### Inherited from

Blob.stream

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2382

▸ **stream**(): [`ReadableStream`](internal_.ReadableStream.md)

#### Returns

[`ReadableStream`](internal_.ReadableStream.md)

#### Inherited from

Blob.stream

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:11

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2383

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:12
