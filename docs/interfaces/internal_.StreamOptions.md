[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / StreamOptions

# Interface: StreamOptions<T\>

[<internal>](../modules/internal_.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/internal_.Stream.md) |

## Hierarchy

- [`Abortable`](internal_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

## Table of contents

### Properties

- [autoDestroy](internal_.StreamOptions.md#autodestroy)
- [emitClose](internal_.StreamOptions.md#emitclose)
- [highWaterMark](internal_.StreamOptions.md#highwatermark)
- [objectMode](internal_.StreamOptions.md#objectmode)
- [signal](internal_.StreamOptions.md#signal)

### Methods

- [construct](internal_.StreamOptions.md#construct)
- [destroy](internal_.StreamOptions.md#destroy)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](internal_.EventEmitter.Abortable.md).[signal](internal_.EventEmitter.Abortable.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:289

## Methods

### construct

▸ `Optional` **construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:39

___

### destroy

▸ `Optional` **destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| [`Error`](../modules/internal_.md#error) |
| `callback` | (`error`: ``null`` \| [`Error`](../modules/internal_.md#error)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:40
