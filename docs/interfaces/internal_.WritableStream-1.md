[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WritableStream

# Interface: WritableStream<W\>

[<internal>](../modules/internal_.md).WritableStream

This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](internal_.WritableStream-1.md#locked)

### Methods

- [abort](internal_.WritableStream-1.md#abort)
- [close](internal_.WritableStream-1.md#close)
- [getWriter](internal_.WritableStream-1.md#getwriter)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16357

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16358

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16359

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules/internal_.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules/internal_.md#writablestreamdefaultwriter)<`W`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16360
