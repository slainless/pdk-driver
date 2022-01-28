[prodeskel-node-ts](../README.md) / [Modules](../modules.md) / lib/types

# Module: lib/types

## Table of contents

### Interfaces

- [ParserResponse](../interfaces/lib_types.ParserResponse.md)

### Type aliases

- [GetOptions](lib_types.md#getoptions)
- [GetResults](lib_types.md#getresults)

## Type aliases

### GetOptions

Ƭ **GetOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `page?` | `number` | Navigate to page or by offset. Default: `page: 1` |
| `raw?` | `boolean` | Should method returns raw HTML string or processed and validated object? |

#### Defined in

[src/lib/types.ts:13](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/types.ts#L13)

___

### GetResults

Ƭ **GetResults**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `data` | `T`[] |

#### Defined in

[src/lib/types.ts:8](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/lib/types.ts#L8)
