[prodeskel-node-ts](../README.md) / [Modules](../modules.md) / [connection](../modules/connection.md) / ConnectionOptions

# Interface: ConnectionOptions

[connection](../modules/connection.md).ConnectionOptions

## Table of contents

### Properties

- [initialState](connection.ConnectionOptions.md#initialstate)
- [useCredential](connection.ConnectionOptions.md#usecredential)

## Properties

### initialState

• `Optional` **initialState**: [`ConnectionState`](connection.ConnectionState.md)

Initialize connection with `ConnectionState`.

#### Defined in

[src/connection.ts:24](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L24)

___

### useCredential

• `Optional` **useCredential**: [`Credential`](../modules/connection.md#credential)

Use preset credential to allow automatic relog-in and parameterless `login()` call

#### Defined in

[src/connection.ts:31](https://github.com/inf-initely/prodeskel-driver-node/blob/9cadee4/src/connection.ts#L31)
