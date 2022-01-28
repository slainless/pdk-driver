[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SourceBuffer

# Interface: SourceBuffer

[<internal>](../modules/internal_.md).SourceBuffer

A chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object. This can be made up of one or several media segments.

## Hierarchy

- [`EventTarget`](../modules/internal_.md#eventtarget)

  ↳ **`SourceBuffer`**

## Table of contents

### Properties

- [appendWindowEnd](internal_.SourceBuffer.md#appendwindowend)
- [appendWindowStart](internal_.SourceBuffer.md#appendwindowstart)
- [buffered](internal_.SourceBuffer.md#buffered)
- [mode](internal_.SourceBuffer.md#mode)
- [onabort](internal_.SourceBuffer.md#onabort)
- [onerror](internal_.SourceBuffer.md#onerror)
- [onupdate](internal_.SourceBuffer.md#onupdate)
- [onupdateend](internal_.SourceBuffer.md#onupdateend)
- [onupdatestart](internal_.SourceBuffer.md#onupdatestart)
- [timestampOffset](internal_.SourceBuffer.md#timestampoffset)
- [updating](internal_.SourceBuffer.md#updating)

### Methods

- [abort](internal_.SourceBuffer.md#abort)
- [addEventListener](internal_.SourceBuffer.md#addeventlistener)
- [appendBuffer](internal_.SourceBuffer.md#appendbuffer)
- [changeType](internal_.SourceBuffer.md#changetype)
- [dispatchEvent](internal_.SourceBuffer.md#dispatchevent)
- [remove](internal_.SourceBuffer.md#remove)
- [removeEventListener](internal_.SourceBuffer.md#removeeventlistener)

## Properties

### appendWindowEnd

• **appendWindowEnd**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13116

___

### appendWindowStart

• **appendWindowStart**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13117

___

### buffered

• `Readonly` **buffered**: [`TimeRanges`](../modules/internal_.md#timeranges)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13118

___

### mode

• **mode**: [`AppendMode`](../modules/internal_.md#appendmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13119

___

### onabort

• **onabort**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13120

___

### onerror

• **onerror**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13121

___

### onupdate

• **onupdate**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13122

___

### onupdateend

• **onupdateend**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13123

___

### onupdatestart

• **onupdatestart**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13124

___

### timestampOffset

• **timestampOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13125

___

### updating

• `Readonly` **updating**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13126

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13127

___

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferEventMap`](internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferEventMap`](internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13131

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

node_modules/typescript/lib/lib.dom.d.ts:13132

___

### appendBuffer

▸ **appendBuffer**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BufferSource`](../modules/internal_.md#buffersource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13128

___

### changeType

▸ **changeType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13129

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

### remove

▸ **remove**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13130

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferEventMap`](internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferEventMap`](internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13133

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

node_modules/typescript/lib/lib.dom.d.ts:13134
