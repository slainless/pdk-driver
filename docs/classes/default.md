[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [connection](default.md#connection)
- [randInitId](default.md#randinitid)

### Methods

- [findDataPenduduk](default.md#finddatapenduduk)
- [generateCommand](default.md#generatecommand)
- [getDataPenduduk](default.md#getdatapenduduk)

## Constructors

### constructor

• **new default**(`credential`, `connectionOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../modules.md#credential) |
| `connectionOptions?` | [`Omit`](../modules/internal_.md#omit)<[`ConnectionOptions`](../interfaces/ConnectionOptions.md), ``"useCredential"``\> |

#### Defined in

[src/driver.ts:13](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L13)

## Properties

### connection

• **connection**: [`Connection`](Connection.md)

#### Defined in

[src/driver.ts:10](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L10)

___

### randInitId

• `Private` **randInitId**: `string`

#### Defined in

[src/driver.ts:11](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L11)

## Methods

### findDataPenduduk

▸ **findDataPenduduk**(`by`, `input`, `options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | ``"KODE"`` \| ``"NAMA"`` |
| `input` | \`${number}\` |
| `options` | [`Omit`](../modules/internal_.md#omit)<[`GetOptions`](../modules/internal_.md#getoptions), ``"page"``\> & { `raw`: ``true``  } |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/driver.ts:110](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L110)

▸ **findDataPenduduk**(`by`, `input`, `options?`): `Promise`<``null`` \| [`AnggotaKeluarga`](../interfaces/internal_.AnggotaKeluarga.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | ``"KODE"`` \| ``"NAMA"`` |
| `input` | \`${number}\` |
| `options?` | [`Omit`](../modules/internal_.md#omit)<[`GetOptions`](../modules/internal_.md#getoptions), ``"page"``\> |

#### Returns

`Promise`<``null`` \| [`AnggotaKeluarga`](../interfaces/internal_.AnggotaKeluarga.md)\>

#### Defined in

[src/driver.ts:115](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L115)

___

### generateCommand

▸ **generateCommand**(`command`): [`FormData`](../modules/internal_.md#formdata)

Generate form data which is basically a command to control server's response
- `nav_offset: ${number}`: navigate a grid/table view with offset
- `per_page: ${number}`: change how many data a grid/table view shows per page

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | \`nav\_offset: ${number}\` \| \`per\_page: ${number}\` \| \`search: ${number}\` |

#### Returns

[`FormData`](../modules/internal_.md#formdata)

#### Defined in

[src/driver.ts:28](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L28)

___

### getDataPenduduk

▸ **getDataPenduduk**(`options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetOptions`](../modules/internal_.md#getoptions) & { `raw`: ``true``  } |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/driver.ts:62](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L62)

▸ **getDataPenduduk**(`options?`): `Promise`<[`GetResults`](../modules/internal_.md#getresults)<[`AnggotaKeluarga`](../interfaces/internal_.AnggotaKeluarga.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetOptions`](../modules/internal_.md#getoptions) |

#### Returns

`Promise`<[`GetResults`](../modules/internal_.md#getresults)<[`AnggotaKeluarga`](../interfaces/internal_.AnggotaKeluarga.md)\>\>

#### Defined in

[src/driver.ts:64](https://github.com/inf-initely/prodeskel-driver-node/blob/ff2bdc9/src/driver.ts#L64)
