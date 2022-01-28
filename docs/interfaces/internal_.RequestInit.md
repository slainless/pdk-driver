[prodeskel-node-ts](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / RequestInit

# Interface: RequestInit

[<internal>](../modules/internal_.md).RequestInit

## Table of contents

### Properties

- [agent](internal_.RequestInit.md#agent)
- [body](internal_.RequestInit.md#body)
- [compress](internal_.RequestInit.md#compress)
- [counter](internal_.RequestInit.md#counter)
- [follow](internal_.RequestInit.md#follow)
- [headers](internal_.RequestInit.md#headers)
- [highWaterMark](internal_.RequestInit.md#highwatermark)
- [hostname](internal_.RequestInit.md#hostname)
- [insecureHTTPParser](internal_.RequestInit.md#insecurehttpparser)
- [method](internal_.RequestInit.md#method)
- [port](internal_.RequestInit.md#port)
- [protocol](internal_.RequestInit.md#protocol)
- [redirect](internal_.RequestInit.md#redirect)
- [referrer](internal_.RequestInit.md#referrer)
- [referrerPolicy](internal_.RequestInit.md#referrerpolicy)
- [signal](internal_.RequestInit.md#signal)
- [size](internal_.RequestInit.md#size)

## Properties

### agent

• `Optional` **agent**: [`Agent`](../classes/internal_.Agent.md) \| (`parsedUrl`: [`URL`](../modules/internal_.md#url)) => [`Agent`](../classes/internal_.Agent.md)

#### Defined in

node_modules/node-fetch/@types/index.d.ts:84

___

### body

• `Optional` **body**: ``null`` \| [`BodyInit`](../modules/internal_.md#bodyinit)

A BodyInit object or null to set request's body.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:57

___

### compress

• `Optional` **compress**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:85

___

### counter

• `Optional` **counter**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:86

___

### follow

• `Optional` **follow**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:87

___

### headers

• `Optional` **headers**: [`HeadersInit`](../modules/internal_.md#headersinit)

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:61

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:92

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:88

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:93

___

### method

• `Optional` **method**: `string`

A string to set request's method.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:65

___

### port

• `Optional` **port**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:89

___

### protocol

• `Optional` **protocol**: `string`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:90

___

### redirect

• `Optional` **redirect**: [`RequestRedirect`](../modules/internal_.md#requestredirect)

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:69

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request’s referrer.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:77

___

### referrerPolicy

• `Optional` **referrerPolicy**: [`ReferrerPolicy`](../modules/internal_.md#referrerpolicy)

A referrer policy to set request’s referrerPolicy.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:81

___

### signal

• `Optional` **signal**: ``null`` \| [`AbortSignal`](../modules/internal_.md#abortsignal)

An AbortSignal to set request's signal.

#### Defined in

node_modules/node-fetch/@types/index.d.ts:73

___

### size

• `Optional` **size**: `number`

#### Defined in

node_modules/node-fetch/@types/index.d.ts:91
