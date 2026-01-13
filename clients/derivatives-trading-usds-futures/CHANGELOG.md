# Changelog

## 22.0.0 - 2026-01-13

### Changed (13)

- Update `@binance/common` library to version `2.2.0`.

#### REST API

- Added parameter `algoId`
  - affected methods:
    - `cancelAlgoOrder()` (`DELETE /fapi/v1/algoOrder`)
- Added parameter `clientAlgoId`
  - affected methods:
    - `cancelAlgoOrder()` (`DELETE /fapi/v1/algoOrder`)
- Deleted parameter `algoid`
  - affected methods:
    - `cancelAlgoOrder()` (`DELETE /fapi/v1/algoOrder`)
- Deleted parameter `clientalgoid`
  - affected methods:
    - `cancelAlgoOrder()` (`DELETE /fapi/v1/algoOrder`)
- Modified response for `symbolConfiguration()` (`GET /fapi/v1/symbolConfig`):
  - items.`isAutoAddMargin`: type `string` → `boolean`
  - items.`isAutoAddMargin`: type `string` → `boolean`

#### WebSocket API

- Added parameter `algoId`
  - affected methods:
    - `cancelAlgoOrder()` (`algoOrder.cancel` method)
- Added parameter `clientAlgoId`
  - affected methods:
    - `cancelAlgoOrder()` (`algoOrder.cancel` method)
- Deleted parameter `algoid`
  - affected methods:
    - `cancelAlgoOrder()` (`algoOrder.cancel` method)
- Deleted parameter `clientalgoid`
  - affected methods:
    - `cancelAlgoOrder()` (`algoOrder.cancel` method)
- Added parameter `activatePrice`
  - affected methods:
    - `newAlgoOrder()` (`algoOrder.place` method)
- Deleted parameter `activationPrice`
  - affected methods:
    - `newAlgoOrder()` (`algoOrder.place` method)

#### WebSocket Streams

- Modified response for `aggregateTradeStreams()` (`<symbol>@aggTrade` stream):
  - property `nq` added

## 21.0.0 - 2025-12-19

### Changed (3)

- Update `@binance/common` library to version `2.1.1`.

#### REST API

- Added parameter `activatePrice`
  - affected methods:
    - `newAlgoOrder()` (`POST /fapi/v1/algoOrder`)
- Deleted parameter `activationPrice`
  - affected methods:
    - `newAlgoOrder()` (`POST /fapi/v1/algoOrder`)

## 20.0.0 - 2025-12-16

### Added (3)

#### REST API

- `futuresTradfiPerpsContract()` (`POST /fapi/v1/stock/contract`)
- `tradingSchedule()` (`GET /fapi/v1/tradingSchedule`)

#### WebSocket Streams

- `tradingSessionStream()` (`tradingSession` stream)

### Changed (13)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

#### REST API

- Deleted parameter `activationPrice`
  - affected methods:
    - `newOrder()` (`POST /fapi/v1/order`)

- Deleted parameter `callbackRate`
  - affected methods:
    - `newOrder()` (`POST /fapi/v1/order`)

- Deleted parameter `closePosition`
  - affected methods:
    - `newOrder()` (`POST /fapi/v1/order`)

- Deleted parameter `priceProtect`
  - affected methods:
    - `newOrder()` (`POST /fapi/v1/order`)

- Deleted parameter `stopPrice`
  - affected methods:
    - `newOrder()` (`POST /fapi/v1/order`)

- Deleted parameter `workingType`
  - affected methods:
    - `newOrder()` (`POST /fapi/v1/order`)

- Modified parameter `batchOrders`:
  - items.`activationPrice`: type `number` → `string`
  - items.`callbackRate`: type `number` → `string`
  - items.`goodTillDate`: type `integer` → `string`
  - items.`price`: type `number` → `string`
  - items.`quantity`: type `number` → `string`
  - items.`stopPrice`: type `number` → `string`
  - items.`activationPrice`: type `number` → `string`
  - items.`callbackRate`: type `number` → `string`
  - items.`goodTillDate`: type `integer` → `string`
  - items.`price`: type `number` → `string`
  - items.`quantity`: type `number` → `string`
  - items.`stopPrice`: type `number` → `string`
  - affected methods:
    - `placeMultipleOrders()` (`POST /fapi/v1/batchOrders`)

- Modified parameter `batchOrders`:
  - items.`orderId`: type `integer` → `string`
  - items.`price`: type `number` → `string`
  - items.`quantity`: type `number` → `string`
  - items.`recvWindow`: type `integer` → `string`
  - items.`orderId`: type `integer` → `string`
  - items.`price`: type `number` → `string`
  - items.`quantity`: type `number` → `string`
  - items.`recvWindow`: type `integer` → `string`
  - affected methods:
    - `modifyMultipleOrders()` (`PUT /fapi/v1/batchOrders`)

- Modified response for `placeMultipleOrders()` (`POST /fapi/v1/batchOrders`):
  - items: property `activatePrice` deleted
  - items: property `priceRate` deleted
  - items: item property `activatePrice` deleted
  - items: item property `priceRate` deleted

- Modified response for `newOrder()` (`POST /fapi/v1/order`):
  - property `priceRate` deleted
  - property `activatePrice` deleted

#### WebSocket API

- Modified response for `cancelAlgoOrder()` (`algoOrder.cancel` method):
  - `result`: property `code` added
  - `result`: property `msg` added
  - `result`: property `algoStatus` deleted
  - `result`: property `symbol` deleted
  - `result`: property `closePosition` deleted
  - `result`: property `positionSide` deleted
  - `result`: property `selfTradePreventionMode` deleted
  - `result`: property `priceMatch` deleted
  - `result`: property `goodTillDate` deleted
  - `result`: property `quantity` deleted
  - `result`: property `icebergQuantity` deleted
  - `result`: property `side` deleted
  - `result`: property `triggerPrice` deleted
  - `result`: property `workingType` deleted
  - `result`: property `reduceOnly` deleted
  - `result`: property `orderType` deleted
  - `result`: property `price` deleted
  - `result`: property `createTime` deleted
  - `result`: property `triggerTime` deleted
  - `result`: property `algoType` deleted
  - `result`: property `timeInForce` deleted
  - `result`: property `priceProtect` deleted
  - `result`: property `updateTime` deleted

## 19.0.1 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 19.0.0 - 2025-11-27

### Added (2)

#### REST API

- `rpiOrderBook()` (`GET /fapi/v1/rpiDepth`)

#### WebSocket Streams

- `rpiDiffBookDepthStreams()` (`<symbol>@rpiDepth@500ms` stream)

### Changed (2)

#### REST API

- Modified response for `userCommissionRate()` (`GET /dapi/v1/commissionRate`):
  - property `rpiCommissionRate` added

#### WebSocket Streams

- Modified `UserDataStreamEventsResponse` for `AlgoUpdate`:
  - `o`: property `rm` added

## 18.0.0 - 2025-11-20

### Added (1)

#### REST API

- `adlRisk()` (`GET /fapi/v1/symbolAdlRisk`)

## 17.0.0 - 2025-11-18

### Changed (7)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

#### REST API

- Modified parameter `batchOrders`:
  - items.`timeInForce`: enum added: `RPI`
  - items.`timeInForce`: enum added: `RPI`
  - affected methods:
    - `placeMultipleOrders()` (`POST /fapi/v1/batchOrders`)
- Modified parameter `timeInForce`:
  - enum added: `RPI`
  - affected methods:
    - `newAlgoOrder()` (`POST /fapi/v1/algoOrder`)
    - `newOrder()` (`POST /fapi/v1/order`)
    - `testOrder()` (`POST /fapi/v1/order/test`)
- Modified response for `oldTradesLookup()` (`GET /fapi/v1/historicalTrades`):
  - items: property `isRPITrade` added
  - items: item property `isRPITrade` added

- Modified response for `recentTradesList()` (`GET /fapi/v1/trades`):
  - items: property `isRPITrade` added
  - items: item property `isRPITrade` added

#### WebSocket API

- Modified parameter `timeInForce`:
  - enum added: `RPI`
  - affected methods:
    - `newAlgoOrder()` (`algoOrder.place` method)
    - `newOrder()` (`order.place` method)

## 16.0.0 - 2025-11-10

### Added (2)

#### WebSocket API

- `cancelAlgoOrder()` (`algoOrder.cancel` method)
- `newAlgoOrder()` (`algoOrder.place` method)

## 15.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 15.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 14.0.0 - 2025-10-27

### Changed (1)

#### REST API

- Marked `symbolPriceTicker` (`GET /fapi/v1/ticker/price`) as deprecated.

## 13.0.1 - 2025-10-21

### Changed (1)

- Update `@binance/common` library to version `1.2.6`.

## 13.0.0 - 2025-10-20

### Changed (1)

#### WebSocket Streams

- Modified User Data Streams response for `OrderTradeUpdateO`:
  - `er` added 

## 12.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 12.0.0 - 2025-09-05

### Changed (1)

#### REST API

- Modified response for `notionalAndLeverageBrackets()` (`GET /fapi/v1/leverageBracket`):

## 11.0.0 - 2025-08-26

### Changed (1)

#### REST API

- Modified response for `accountInformationV3()` method (`GET /fapi/v3/account`):
  - `assets`: item property `marginAvailable` deleted

## 10.0.3 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 10.0.2 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 10.0.1 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 10.0.0 - 2025-07-08

### Changed (3)

- Update `@binance/common` library to version `1.2.0`.

#### REST API

- Modified response for `openInterestStatistics()` method (`GET /futures/data/openInterestHist`):
  - item property `CMCCirculatingSupply` added
- Fixed bug with duplicated `batchOrders` parameters

## 9.0.0 - 2025-06-30

### Added (1)

- Support User Data Streams.

### Changed (1)

- Update `@binance/common` library to version `1.1.3`.

## 8.0.0 - 2025-06-24

### Changed (1)

#### REST API

- Modified response for `exchangeInformation()` method (`GET /fapi/v1/exchangeInfo`):
  - `assets`.`autoAssetExchange`: type `integer` → `string`
  - `symbols`.`filters`.`multiplierDecimal`: type `integer` → `string`

## 7.0.2 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 7.0.1 - 2025-06-16

### Changed (2)

- Exposed `@types/ws` dependency.
- Update `@binance/common` library to version `1.1.1`.

## 7.0.0 - 2025-06-05

### Changed (2)

- Fix bug with enums exporting.
- Update `@binance/common` library to version `1.1.0`.

## 6.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 6.0.0 - 2025-06-03

### Removed (1)

#### REST API

- `historicalBlvtNavKlineCandlestick()` (`GET /fapi/v1/lvtKlines`)

## 5.0.0 - 2025-05-19

### Changed (6)

#### REST API

- Modified `continuousContractKlineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `historicalBlvtNavKlineCandlestick()` (response type changed - it can be either a number or string)
- Modified `indexPriceKlineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `klineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `markPriceKlineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `premiumIndexKlineData()` (response type changed - it can be either a number or string)

## 4.0.0 - 2025-05-14

### Changed

- Updated `@binance/common` library to version `1.0.4`.
- Updated response types.

## 3.0.0 - 2025-04-25

### Added

- `GET /fapi/v1/insuranceBalance`

## 2.0.0 - 2025-04-10

### Changed

- Update `@binance/common` library to version `1.0.2`.
- Update examples.

### Removed

- Remove unused error reponses.

## 1.0.1 - 2025-04-07

- Update `@binance/common` library to version `1.0.1`.

## 1.0.0 - 2025-03-24

- Initial release
