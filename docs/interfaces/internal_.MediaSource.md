[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MediaSource

# Interface: MediaSource

[<internal>](../modules/internal_.md).MediaSource

This Media Source Extensions API interface represents a source of media data for an HTMLMediaElement object. A MediaSource object can be attached to a HTMLMediaElement to be played in the user agent.

## Hierarchy

- [`EventTarget`](../modules/internal_.md#eventtarget)

  ↳ **`MediaSource`**

## Table of contents

### Properties

- [activeSourceBuffers](internal_.MediaSource.md#activesourcebuffers)
- [duration](internal_.MediaSource.md#duration)
- [onsourceclose](internal_.MediaSource.md#onsourceclose)
- [onsourceended](internal_.MediaSource.md#onsourceended)
- [onsourceopen](internal_.MediaSource.md#onsourceopen)
- [readyState](internal_.MediaSource.md#readystate)
- [sourceBuffers](internal_.MediaSource.md#sourcebuffers)

### Methods

- [addEventListener](internal_.MediaSource.md#addeventlistener)
- [addSourceBuffer](internal_.MediaSource.md#addsourcebuffer)
- [clearLiveSeekableRange](internal_.MediaSource.md#clearliveseekablerange)
- [dispatchEvent](internal_.MediaSource.md#dispatchevent)
- [endOfStream](internal_.MediaSource.md#endofstream)
- [removeEventListener](internal_.MediaSource.md#removeeventlistener)
- [removeSourceBuffer](internal_.MediaSource.md#removesourcebuffer)
- [setLiveSeekableRange](internal_.MediaSource.md#setliveseekablerange)

## Properties

### activeSourceBuffers

• `Readonly` **activeSourceBuffers**: [`SourceBufferList`](../modules/internal_.md#sourcebufferlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9179

___

### duration

• **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9180

___

### onsourceclose

• **onsourceclose**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9181

___

### onsourceended

• **onsourceended**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9182

___

### onsourceopen

• **onsourceopen**: ``null`` \| (`ev`: [`Event`](../modules/internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9183

___

### readyState

• `Readonly` **readyState**: [`ReadyState`](../modules/internal_.md#readystate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9184

___

### sourceBuffers

• `Readonly` **sourceBuffers**: [`SourceBufferList`](../modules/internal_.md#sourcebufferlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9185

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaSourceEventMap`](internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaSourceEventMap`](internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9191

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

node_modules/typescript/lib/lib.dom.d.ts:9192

___

### addSourceBuffer

▸ **addSourceBuffer**(`type`): [`SourceBuffer`](../modules/internal_.md#sourcebuffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`SourceBuffer`](../modules/internal_.md#sourcebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9186

___

### clearLiveSeekableRange

▸ **clearLiveSeekableRange**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9187

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

### endOfStream

▸ **endOfStream**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`EndOfStreamError`](../modules/internal_.md#endofstreamerror) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9188

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaSourceEventMap`](internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaSourceEventMap`](internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9193

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

node_modules/typescript/lib/lib.dom.d.ts:9194

___

### removeSourceBuffer

▸ **removeSourceBuffer**(`sourceBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceBuffer` | [`SourceBuffer`](../modules/internal_.md#sourcebuffer) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9189

___

### setLiveSeekableRange

▸ **setLiveSeekableRange**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9190
