[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / URLSearchParams

# Interface: URLSearchParams

[<internal>](../modules/internal_.md).URLSearchParams

## Table of contents

### Methods

- [append](internal_.URLSearchParams.md#append)
- [delete](internal_.URLSearchParams.md#delete)
- [forEach](internal_.URLSearchParams.md#foreach)
- [get](internal_.URLSearchParams.md#get)
- [getAll](internal_.URLSearchParams.md#getall)
- [has](internal_.URLSearchParams.md#has)
- [set](internal_.URLSearchParams.md#set)
- [sort](internal_.URLSearchParams.md#sort)
- [toString](internal_.URLSearchParams.md#tostring)

## Methods

### append

▸ **append**(`name`, `value`): `void`

Appends a specified key/value pair as a new search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13877

___

### delete

▸ **delete**(`name`): `void`

Deletes the given search parameter, and its associated value, from the list of all search parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13879

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](../modules/internal_.md#urlsearchparams)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13891

___

### get

▸ **get**(`name`): ``null`` \| `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13881

___

### getAll

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13883

___

### has

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13885

___

### set

▸ **set**(`name`, `value`): `void`

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13887

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13888

___

### toString

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13890
