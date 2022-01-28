[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ReadableStream

# Interface: ReadableStream<R\>

[<internal>](../modules/internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](internal_.ReadableStream-1.md#locked)

### Methods

- [cancel](internal_.ReadableStream-1.md#cancel)
- [getReader](internal_.ReadableStream-1.md#getreader)
- [pipeThrough](internal_.ReadableStream-1.md#pipethrough)
- [pipeTo](internal_.ReadableStream-1.md#pipeto)
- [tee](internal_.ReadableStream-1.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11000

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11001

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/internal_.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/internal_.md#readablestreamdefaultreader)<`R`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11002

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/internal_.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](internal_.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/internal_.md#readablestream)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11003

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/internal_.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](internal_.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11004

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/internal_.md#readablestream)<`R`\>]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11005
