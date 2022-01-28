[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Headers

# Class: Headers

[<internal>](../modules/internal_.md).Headers

This Fetch API interface allows you to perform various actions on HTTP request and response headers.
These actions include retrieving, setting, adding to, and removing.
A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
You can add to this using methods like append() (see Examples.)
In all methods of this interface, header names are matched by case-insensitive byte sequence.

## Table of contents

### Constructors

- [constructor](internal_.Headers.md#constructor)

### Methods

- [[iterator]](internal_.Headers.md#[iterator])
- [append](internal_.Headers.md#append)
- [delete](internal_.Headers.md#delete)
- [entries](internal_.Headers.md#entries)
- [forEach](internal_.Headers.md#foreach)
- [get](internal_.Headers.md#get)
- [has](internal_.Headers.md#has)
- [keys](internal_.Headers.md#keys)
- [raw](internal_.Headers.md#raw)
- [set](internal_.Headers.md#set)
- [values](internal_.Headers.md#values)

## Constructors

### constructor

• **new Headers**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | [`HeadersInit`](../modules/internal_.md#headersinit) |

#### Defined in

node_modules/node-fetch/@types/index.d.ts:23

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`string`, `string`]\>

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`string`, `string`]\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:35

___

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:25

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:26

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`string`, `string`]\>

Returns an iterator allowing to go through all key/value pairs contained in this object.

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`string`, `string`]\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:39

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](internal_.Headers.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:30

___

### get

▸ **get**(`name`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:27

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:28

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`string`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:43

___

### raw

▸ **raw**(): [`Record`](../modules/internal_.md#record)<`string`, `string`[]\>

Node-fetch extension

#### Returns

[`Record`](../modules/internal_.md#record)<`string`, `string`[]\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:50

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:29

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<`string`\>

#### Defined in

node_modules/node-fetch/@types/index.d.ts:47
