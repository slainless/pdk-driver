[prodeskel-node-ts](../README.md) / [Modules](../modules.md) / [driver](../modules/driver.md) / default

# Class: default

[driver](../modules/driver.md).default

## Table of contents

### Constructors

- [constructor](driver.default.md#constructor)

### Properties

- [connection](driver.default.md#connection)
- [randInitId](driver.default.md#randinitid)

### Methods

- [findDataPenduduk](driver.default.md#finddatapenduduk)
- [generateCommand](driver.default.md#generatecommand)
- [getDataPenduduk](driver.default.md#getdatapenduduk)

## Constructors

### constructor

• **new default**(`credential`, `connectionOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../modules/connection.md#credential) |
| `connectionOptions?` | `Omit`<[`ConnectionOptions`](../interfaces/connection.ConnectionOptions.md), ``"useCredential"``\> |

#### Defined in

[src/driver.ts:13](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L13)

## Properties

### connection

• **connection**: [`default`](connection.default.md)

#### Defined in

[src/driver.ts:10](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L10)

___

### randInitId

• `Private` **randInitId**: `string`

#### Defined in

[src/driver.ts:11](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L11)

## Methods

### findDataPenduduk

▸ **findDataPenduduk**(`by`, `input`, `options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | ``"KODE"`` \| ``"NAMA"`` |
| `input` | \`${number}\` |
| `options` | `Omit`<[`GetOptions`](../modules/lib_types.md#getoptions), ``"page"``\> & { `raw`: ``true``  } |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/driver.ts:110](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L110)

▸ **findDataPenduduk**(`by`, `input`, `options?`): `Promise`<``null`` \| [`AnggotaKeluarga`](../interfaces/lib_data_parser.AnggotaKeluarga.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | ``"KODE"`` \| ``"NAMA"`` |
| `input` | \`${number}\` |
| `options?` | `Omit`<[`GetOptions`](../modules/lib_types.md#getoptions), ``"page"``\> |

#### Returns

`Promise`<``null`` \| [`AnggotaKeluarga`](../interfaces/lib_data_parser.AnggotaKeluarga.md)\>

#### Defined in

[src/driver.ts:115](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L115)

___

### generateCommand

▸ **generateCommand**(`command`): `FormData`

Generate form data which is basically a command to control server's response
- `nav_offset: ${number}`: navigate a grid/table view with offset
- `per_page: ${number}`: change how many data a grid/table view shows per page

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | \`nav\_offset: ${number}\` \| \`per\_page: ${number}\` \| \`search: ${number}\` |

#### Returns

`FormData`

#### Defined in

[src/driver.ts:28](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L28)

___

### getDataPenduduk

▸ **getDataPenduduk**(`options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetOptions`](../modules/lib_types.md#getoptions) & { `raw`: ``true``  } |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/driver.ts:62](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L62)

▸ **getDataPenduduk**(`options?`): `Promise`<[`GetResults`](../modules/lib_types.md#getresults)<[`AnggotaKeluarga`](../interfaces/lib_data_parser.AnggotaKeluarga.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetOptions`](../modules/lib_types.md#getoptions) |

#### Returns

`Promise`<[`GetResults`](../modules/lib_types.md#getresults)<[`AnggotaKeluarga`](../interfaces/lib_data_parser.AnggotaKeluarga.md)\>\>

#### Defined in

[src/driver.ts:64](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/driver.ts#L64)
