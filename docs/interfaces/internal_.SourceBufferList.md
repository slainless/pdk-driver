[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SourceBufferList

# Interface: SourceBufferList

[<internal>](../modules/internal_.md).SourceBufferList

A simple container list for multiple SourceBuffer objects.

## Hierarchy

- [`EventTarget`](../modules/internal_.md#eventtarget)

  ↳ **`SourceBufferList`**

## Indexable

▪ [index: `number`]: [`SourceBuffer`](../modules/internal_.md#sourcebuffer)

## Table of contents

### Properties

- [length](internal_.SourceBufferList.md#length)
- [onaddsourcebuffer](internal_.SourceBufferList.md#onaddsourcebuffer)
- [onremovesourcebuffer](internal_.SourceBufferList.md#onremovesourcebuffer)

### Methods

- [addEventListener](internal_.SourceBufferList.md#addeventlistener)
- [dispatchEvent](internal_.SourceBufferList.md#dispatchevent)
- [removeEventListener](internal_.SourceBufferList.md#removeeventlistener)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13149

___

### onaddsourcebuffer

• **onaddsourcebuffer**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13150

___

### onremovesourcebuffer

• **onremovesourcebuffer**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13151

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferListEventMap`](internal_.SourceBufferListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferListEventMap`](internal_.SourceBufferListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13152

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13153

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferListEventMap`](internal_.SourceBufferListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferListEventMap`](internal_.SourceBufferListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13154

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13155
