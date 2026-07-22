# Changelog

## 19.0.0 - 2026-07-22

### Changed (7)

#### REST API

- Added parameter `modifyId`
  - affected methods:
    - `modifyOrder()` (`PUT /dapi/v1/order`)
- Modified parameter `batchOrders`:
  - items: property `modifyId` added
  - items: item property `modifyId` added
  - affected methods:
    - `modifyMultipleOrders()` (`PUT /dapi/v1/batchOrders`)
- Modified response for `modifyMultipleOrders()` (`PUT /dapi/v1/batchOrders`):
  - items: property `modifyId` added
  - items: item property `modifyId` added

- Modified response for `modifyOrder()` (`PUT /dapi/v1/order`):
  - property `modifyId` added

- Modified response for `getOrderModifyHistory()` (`GET /dapi/v1/orderAmendment`):
  - items.`amendment`: property `modifyId` added
  - items.`amendment`: property `modifyId` added

#### WebSocket API

- Added parameter `modifyId`
  - affected methods:
    - `modifyOrder()` (`order.modify` method)
- Modified response for `modifyOrder()` (`order.modify` method):
  - `result`: property `modifyId` added

## 18.0.1 - 2026-07-21

### Changed (2)

- Update `@binance/common` library to version `2.4.5`.
- Resolve security vulnerabilities.

## 18.0.0 - 2026-07-15

### Changed (9)

#### REST API

- Modified response for `cancelMultipleOrders()` (`DELETE /dapi/v1/batchOrders`):
  - items: property `avgPrice` deleted
  - items: property `cumBase` deleted
  - items: item property `avgPrice` deleted
  - items: item property `cumBase` deleted

- Modified response for `placeMultipleOrders()` (`POST /dapi/v1/batchOrders`):
  - items: property `cumBase` deleted
  - items: property `avgPrice` deleted
  - items: item property `cumBase` deleted
  - items: item property `avgPrice` deleted

- Modified response for `modifyMultipleOrders()` (`PUT /dapi/v1/batchOrders`):
  - items: property `avgPrice` deleted
  - items: property `cumBase` deleted
  - items: item property `avgPrice` deleted
  - items: item property `cumBase` deleted

- Modified response for `cancelOrder()` (`DELETE /dapi/v1/order`):
  - property `avgPrice` deleted
  - property `cumBase` deleted

- Modified response for `newOrder()` (`POST /dapi/v1/order`):
  - property `avgPrice` deleted
  - property `cumBase` deleted

- Modified response for `modifyOrder()` (`PUT /dapi/v1/order`):
  - property `avgPrice` deleted
  - property `cumBase` deleted

#### WebSocket API

- Modified response for `cancelOrder()` (`order.cancel` method):
  - `result`: property `avgPrice` deleted
  - `result`: property `cumBase` deleted

- Modified response for `modifyOrder()` (`order.modify` method):
  - `result`: property `avgPrice` deleted
  - `result`: property `cumBase` deleted

- Modified response for `newOrder()` (`order.place` method):
  - `result`: property `cumBase` deleted
  - `result`: property `avgPrice` deleted

## 17.0.0 - 2026-07-13

### Added (1)

#### WebSocket Streams

- `indexPriceStream()` (`<pair>@indexPrice@<updateSpeed>` stream)

### Changed (24)

#### REST API

- Modified parameter `batchOrders`:
  - items: required added: `symbol`, `side`, `type`, `quantity`
  - items.`activationPrice`: type `string` → `number`
  - items.`callbackRate`: type `string` → `number`
  - items.`price`: type `string` → `number`
  - items.`priceMatch`: enum removed: `NONE`
  - items.`priceProtect`: enum added: `true`, `false`
  - items.`quantity`: type `string` → `number`
  - items.`reduceOnly`: enum added: `true`, `false`
  - items.`selfTradePreventionMode`: enum removed: `NONE`
  - items.`stopPrice`: type `string` → `number`
  - items.`activationPrice`: type `string` → `number`
  - items.`callbackRate`: type `string` → `number`
  - items.`price`: type `string` → `number`
  - items.`priceMatch`: enum removed: `NONE`
  - items.`priceProtect`: enum added: `true`, `false`
  - items.`quantity`: type `string` → `number`
  - items.`reduceOnly`: enum added: `true`, `false`
  - items.`selfTradePreventionMode`: enum removed: `NONE`
  - items.`stopPrice`: type `string` → `number`
  - affected methods:
    - `placeMultipleOrders()` (`POST /dapi/v1/batchOrders`)
- Modified parameter `batchOrders`:
  - items: required added: `symbol`, `side`, `timestamp`
  - items: property `timestamp` added
  - items.`orderId`: type `string` → `integer`
  - items.`price`: type `string` → `number`
  - items.`quantity`: type `string` → `number`
  - items.`recvWindow`: type `string` → `integer`
  - items: item property `timestamp` added
  - items.`orderId`: type `string` → `integer`
  - items.`price`: type `string` → `number`
  - items.`quantity`: type `string` → `number`
  - items.`recvWindow`: type `string` → `integer`
  - affected methods:
    - `modifyMultipleOrders()` (`PUT /dapi/v1/batchOrders`)
- Modified parameter `contractType`:
  - enum removed: `CURRENT_QUARTER_DELIVERING`, `NEXT_QUARTER_DELIVERING`, `PERPETUAL_DELIVERING`
  - affected methods:
    - `continuousContractKlineCandlestickData()` (`GET /dapi/v1/continuousKlines`)
    - `basis()` (`GET /futures/data/basis`)
- Modified parameter `contractType`:
  - enum removed: `CURRENT_QUARTER_DELIVERING`, `NEXT_QUARTER_DELIVERING`, `PERPETUAL_DELIVERING`
  - enum added: `ALL`
  - affected methods:
    - `openInterestStatistics()` (`GET /futures/data/openInterestHist`)
    - `takerBuySellVolume()` (`GET /futures/data/takerBuySellVol`)
- Modified parameter `incomeType`:
  - enum added: `TRANSFER`, `WELCOME_BONUS`, `FUNDING_FEE`, `REALIZED_PNL`, `COMMISSION`, `INSURANCE_CLEAR`, `DELIVERED_SETTELMENT`
  - affected methods:
    - `getIncomeHistory()` (`GET /dapi/v1/income`)
- Modified parameter `orderIdList`:
  - maxItems `null` → `10`
  - affected methods:
    - `cancelMultipleOrders()` (`DELETE /dapi/v1/batchOrders`)
- Modified parameter `origClientOrderIdList`:
  - maxItems `null` → `10`
  - affected methods:
    - `cancelMultipleOrders()` (`DELETE /dapi/v1/batchOrders`)
- Modified parameter `priceMatch`:
  - enum removed: `NONE`
  - affected methods:
    - `newOrder()` (`POST /dapi/v1/order`)
    - `modifyOrder()` (`PUT /dapi/v1/order`)
- Modified parameter `priceProtect`:
  - enum added: `true`, `false`
  - affected methods:
    - `newOrder()` (`POST /dapi/v1/order`)
- Modified parameter `reduceOnly`:
  - enum added: `true`, `false`
  - affected methods:
    - `newOrder()` (`POST /dapi/v1/order`)
- Modified parameter `type`:
  - type `string` → `integer`
  - enum removed: `LIMIT`, `MARKET`, `STOP`, `STOP_MARKET`, `TAKE_PROFIT`, `TAKE_PROFIT_MARKET`, `TRAILING_STOP_MARKET`
  - affected methods:
    - `modifyIsolatedPositionMargin()` (`POST /dapi/v1/positionMargin`)
- Modified response for `placeMultipleOrders()` (`POST /dapi/v1/batchOrders`):
  - items: property `closePosition` added
  - items: item property `closePosition` added

- Modified response for `orderBook()` (`GET /dapi/v1/depth`):
  - `asks`.items: minItems `0` → `2`
  - `asks`.items: maxItems `null` → `2`
  - `bids`.items: minItems `0` → `2`
  - `bids`.items: maxItems `null` → `2`

- Modified response for `markPriceKlineCandlestickData()` (`GET /dapi/v1/markPriceKlines`):
  - items.items: oneOf added 2 schema(s)
  - items.items: oneOf removed 2 schema(s)

#### WebSocket API

- Modified parameter `closePosition`:
  - enum added: `true`, `false`
  - affected methods:
    - `newOrder()` (`order.place` method)
- Modified parameter `priceMatch`:
  - enum removed: `NONE`
  - affected methods:
    - `modifyOrder()` (`order.modify` method)
    - `newOrder()` (`order.place` method)
- Modified parameter `priceProtect`:
  - enum added: `true`, `false`
  - affected methods:
    - `newOrder()` (`order.place` method)
- Modified parameter `reduceOnly`:
  - enum added: `true`, `false`
  - affected methods:
    - `newOrder()` (`order.place` method)
- Modified response for `queryOrder()` (`order.status` method):
  - `result`: property `cumQty` added

#### WebSocket Streams

- Modified parameter `contractType`:
  - enum added: `perpetual`, `current_quarter`, `next_quarter`
  - affected methods:
    - `continuousContractKlineCandlestickStreams()` (`<pair>_<contractType>@continuousKline_<interval>` stream)
- Modified parameter `interval`:
  - enum added: `1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `2h`, `4h`, `6h`, `8h`, `12h`, `1d`, `3d`, `1w`, `1M`
  - affected methods:
    - `indexKlineCandlestickStreams()` (`<pair>@indexPriceKline_<interval>` stream)
    - `continuousContractKlineCandlestickStreams()` (`<pair>_<contractType>@continuousKline_<interval>` stream)
    - `klineCandlestickStreams()` (`<symbol>@kline_<interval>` stream)
    - `markPriceKlineCandlestickStreams()` (`<symbol>@markPriceKline_<interval>` stream)
- Modified parameter `levels`:
  - type `integer` → `string`
  - enum added: `5`, `10`, `20`
  - affected methods:
    - `partialBookDepthStreams()` (`<symbol>@depth<levels>@<updateSpeed>` stream)
- Modified parameter `updateSpeed`:
  - enum added: `1s`
  - affected methods:
    - `markPriceOfAllSymbolsOfAPair()` (`<pair>@markPrice@<updateSpeed>` stream)
    - `markPriceStream()` (`<symbol>@markPrice@<updateSpeed>` stream)
- Modified parameter `updateSpeed`:
  - enum added: `100ms`, `500ms`
  - affected methods:
    - `partialBookDepthStreams()` (`<symbol>@depth<levels>@<updateSpeed>` stream)
    - `diffBookDepthStreams()` (`<symbol>@depth@<updateSpeed>` stream)

### Removed (1)

#### WebSocket Streams

- `/<pair>@indexPrice()` (`<pair>@indexPrice` stream)

## 16.0.0 - 2026-07-06

### Added (1)

#### WebSocket Streams

- `indexPriceStream()` (`<pair>@indexPrice` stream)

### Removed (2)

#### REST API

- `classicPortfolioMarginAccountInformation()` (`GET /dapi/v1/pmAccountInfo`)

#### WebSocket Streams

- `/<pair>@indexPrice@<updateSpeed>()` (`<pair>@indexPrice@<updateSpeed>` stream)

## 15.0.0 - 2026-06-30

### Changed (1)

#### REST API

- Modified response for `queryIndexPriceConstituents()` (`GET /dapi/v1/constituents`):
  - `constituents`.items: property `weight` added
  - `constituents`.items: property `price` added
  - `constituents`.items: item property `weight` added
  - `constituents`.items: item property `price` added

## 14.0.1 - 2026-06-18

### Changed (2)

- Update `@binance/common` library to version `2.4.1`.
- Resolve security vulnerabilities.

## 14.0.0 - 2026-06-10

### Changed (13)

#### WebSocket Streams

- Modified response for `allBookTickersStream()` (`!bookTicker` stream):
  - property `st` added

- Modified response for `contractInfoStream()` (`!contractInfo` stream):
  - property `st` added

- Modified response for `allMarketLiquidationOrderStreams()` (`!forceOrder@arr` stream):
  - property `st` added

- Modified response for `allMarketMiniTickersStream()` (`!miniTicker@arr` stream):
  - items: property `st` added
  - items: item property `st` added

- Modified response for `allMarketTickersStreams()` (`!ticker@arr` stream):
  - items: property `st` added
  - items: item property `st` added

- Modified response for `aggregateTradeStreams()` (`<symbol>@aggTrade` stream):
  - property `st` added

- Modified response for `individualSymbolBookTickerStreams()` (`<symbol>@bookTicker` stream):
  - property `st` added

- Modified response for `partialBookDepthStreams()` (`<symbol>@depth<levels>@<updateSpeed>` stream):
  - property `st` added

- Modified response for `diffBookDepthStreams()` (`<symbol>@depth@<updateSpeed>` stream):
  - property `st` added

- Modified response for `markPriceStream()` (`<symbol>@markPrice@<updateSpeed>` stream):
  - property `st` added

- Modified response for `individualSymbolMiniTickerStream()` (`<symbol>@miniTicker` stream):
  - property `st` added

- Modified response for `individualSymbolTickerStreams()` (`<symbol>@ticker` stream):
  - property `st` added

- Modified response for `markPriceOfAllSymbolsOfAPair()` (`<pair>@markPrice@<updateSpeed>` stream):
  - items: property `st` added
  - items: item property `st` added

## 13.0.10 - 2026-06-02

### Changed (1)

- Update `@binance/common` library to version `2.4.0`.

## 13.0.9 - 2026-05-21

### Changed (2)

- Update `@binance/common` library to version `2.3.14`.
- Resolve security vulnerabilities on `ws`.

## 13.0.8 - 2026-05-06

### Changed (2)

- Update `@binance/common` library to version `2.3.13`.
- Resolve security vulnerabilities on `axios`.

## 13.0.7 - 2026-04-15

### Changed (2)

- Update `@binance/common` library to version `2.3.12`.
- Resolve security vulnerabilities on `axios`.

## 13.0.6 - 2026-04-07

### Changed (1)

- Update `@binance/common` library to version `2.3.11`.

## 13.0.5 - 2026-03-30

### Changed (2)

- Update `@binance/common` library to version `2.3.10`.
- Resolve security vulnerabilities on `handlebars` (bump version from `4.7.8` to `4.7.9`) and `brace-expansion` (bump version from `1.1.12` to `1.1.13`).

## 13.0.4 - 2026-03-26

### Changed (2)

- Update `@binance/common` library to version `2.3.8`.
- Resolve security vulnerabilities on `picomatch` (bump version from `2.3.1` to `2.3.2`).

## 13.0.3 - 2026-03-24

### Changed (1)

- Update `@binance/common` library to version `2.3.7`.

## 13.0.2 - 2026-03-19

### Changed (2)

- Update `@binance/common` library to version `2.3.6`.
- Resolve security vulnerabilities on `flatted`.

## 13.0.1 - 2026-03-13

### Changed (1)

- Update `@binance/common` library to version `2.3.5`.

## 13.0.0 - 2026-03-05

### Changed (1)

#### REST API

- Modified response for `exchangeInformation()` (`GET /dapi/v1/exchangeInfo`):
  - `symbols`.items: property `orderTypes` added
  - `symbols`.items: property `OrderType` deleted
  - `symbols`.items: item property `orderTypes` added
  - `symbols`.items: item property `OrderType` deleted

## 12.0.3 - 2026-03-02

### Changed (2)

- Update `@binance/common` library to version `2.3.4`.
- Resolve security vulnerabilities on `minimatch`.

## 12.0.2 - 2026-02-24

### Changed (2)

- Update `@binance/common` library to version `2.3.3`.
- Resolve security vulnerabilities on `axios`.

## 12.0.1 - 2026-02-12

### Changed (1)

- Update `@binance/common` library to version `2.3.2`.

## 12.0.0 - 2026-01-27

### Changed (2)

#### REST API

- Modified response for `cancelMultipleOrders()` (`DELETE /dapi/v1/batchOrders`):
  - items: property `pair` added
  - items: item property `pair` added

- Modified response for `currentAllOpenOrders()` (`GET /dapi/v1/openOrders`):
  - items: property `pair` added
  - items: item property `pair` added

## 11.0.1 - 2026-01-20

### Changed (1)

- Update `@binance/common` library to version `2.3.1`.

## 11.0.0 - 2026-01-13

### Added (1)

#### REST API

- `placeMultipleOrders()` (`POST /dapi/v1/batchOrders`)

### Changed (3)

- Update `@binance/common` library to version `2.2.0`.

#### REST API

- Update response schema for `keepaliveUserDataStream()`.
- Update response schema for `autoCancelAllOpenOrders()`.

## 10.0.1 - 2025-12-19

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 10.0.0 - 2025-12-16

### Changed (3)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

#### REST API

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
    - `modifyMultipleOrders()` (`PUT /dapi/v1/batchOrders`)

## 9.0.3 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 9.0.2 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 9.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 9.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 8.0.1 - 2025-10-21

### Changed (1)

- Update `@binance/common` library to version `1.2.6`.

## 8.0.0 - 2025-10-09

### Changed (1)

#### REST API

- Modified response for `queryOrder()` (`GET /dapi/v1/order`):
  - property `positionSide` added

## 7.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 7.0.0 - 2025-08-19

### Changed (1)

#### REST API

- Modified response for `exchangeInformation()` method (`GET /dapi/v1/exchangeInfo`):
  - `symbols`.`filters`.`multiplierDecimal`: type `integer` → `string`

## 6.0.4 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 6.0.3 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 6.0.2 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 6.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 6.0.0 - 2025-06-30

### Added (1)

- Support User Data Streams.

### Changed (1)

- Update `@binance/common` library to version `1.1.3`.

## 5.0.2 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 5.0.1 - 2025-06-16

### Changed (2)

- Exposed `@types/ws` dependency.
- Update `@binance/common` library to version `1.1.1`.

## 5.0.0 - 2025-06-05

### Changed (2)

- Fix bug with enums exporting.
- Update `@binance/common` library to version `1.1.0`.

## 4.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 4.0.0 - 2025-05-19

### Changed (5)

#### REST API

- Modified `continuousContractKlineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `indexPriceKlineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `klineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `markPriceKlineCandlestickData()` (response type changed - it can be either a number or string)
- Modified `premiumIndexKlineData()` (response type changed - it can be either a number or string)

## 3.0.0 - 2025-05-14

### Changed

- Updated `@binance/common` library to version `1.0.4`.
- Updated response types.

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
