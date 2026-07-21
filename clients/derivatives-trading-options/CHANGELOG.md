# Changelog

## 16.0.1 - 2026-07-21

### Changed (2)

- Update `@binance/common` library to version `2.4.5`.
- Resolve security vulnerabilities.

## 16.0.0 - 2026-07-13

### Added (3)

#### REST API

- `tradfiOptionsContract()` (`POST /eapi/v1/stock/contract`)

#### WebSocket Streams

- `hour24Ticker()` (`<symbol>@optionTicker<expirationDate>` stream)
- `openInterest()` (`<underlying>@openInterest@<expirationDate>` stream)

### Changed (21)

#### REST API

- Modified parameter `currency`:
  - enum added: `USDT`
  - affected methods:
    - `accountFundingFlow()` (`GET /eapi/v1/bill`)
- Modified parameter `deltaLimit`:
  - required: `false` → `true`
  - affected methods:
    - `setMarketMakerProtectionConfig()` (`POST /eapi/v1/mmpSet`)
- Modified parameter `frozenTimeInMilliseconds`:
  - required: `false` → `true`
  - affected methods:
    - `setMarketMakerProtectionConfig()` (`POST /eapi/v1/mmpSet`)
- Modified parameter `interval`:
  - enum added: `1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `2h`, `4h`, `6h`, `8h`, `12h`, `1d`, `3d`, `1w`, `1M`
  - affected methods:
    - `klineCandlestickData()` (`GET /eapi/v1/klines`)
- Modified parameter `legs`:
  - items: required added: `symbol`, `side`, `type`, `quantity`
  - items: property `price` added
  - items: property `quantity` added
  - items: property `side` added
  - items: property `symbol` added
  - items: property `type` added
  - items: item property `price` added
  - items: item property `quantity` added
  - items: item property `side` added
  - items: item property `symbol` added
  - items: item property `type` added
  - affected methods:
    - `newBlockTradeOrder()` (`POST /eapi/v1/block/order/create`)
- Modified parameter `liquidity`:
  - enum added: `MAKER`, `TAKER`
  - affected methods:
    - `newBlockTradeOrder()` (`POST /eapi/v1/block/order/create`)
- Modified parameter `orders`:
  - items: required added: `symbol`, `side`, `type`, `quantity`
  - items.`isMmp`: type `string` → `boolean`
  - items.`postOnly`: type `string` → `boolean`
  - items.`price`: type `string` → `number`
  - items.`quantity`: type `string` → `number`
  - items.`reduceOnly`: type `string` → `boolean`
  - items.`isMmp`: type `string` → `boolean`
  - items.`postOnly`: type `string` → `boolean`
  - items.`price`: type `string` → `number`
  - items.`quantity`: type `string` → `number`
  - items.`reduceOnly`: type `string` → `boolean`
  - affected methods:
    - `placeMultipleOrders()` (`POST /eapi/v1/batchOrders`)
- Modified parameter `qtyLimit`:
  - required: `false` → `true`
  - affected methods:
    - `setMarketMakerProtectionConfig()` (`POST /eapi/v1/mmpSet`)
- Modified parameter `selfTradePreventionMode`:
  - enum added: `NONE`
  - affected methods:
    - `newOrder()` (`POST /eapi/v1/order`)
- Modified parameter `symbol`:
  - required: `false` → `true`
  - affected methods:
    - `accountTradeList()` (`GET /eapi/v1/userTrades`)
- Modified parameter `underlying`:
  - required: `false` → `true`
  - affected methods:
    - `getMarketMakerProtectionConfig()` (`GET /eapi/v1/mmp`)
    - `resetMarketMakerProtectionConfig()` (`POST /eapi/v1/mmpReset`)
    - `setMarketMakerProtectionConfig()` (`POST /eapi/v1/mmpSet`)
- Modified parameter `windowTimeInMilliseconds`:
  - required: `false` → `true`
  - affected methods:
    - `setMarketMakerProtectionConfig()` (`POST /eapi/v1/mmpSet`)
- Modified response for `cancelMultipleOptionOrders()` (`DELETE /eapi/v1/batchOrders`):
  - items: property `fee` added
  - items: item property `fee` added

- Modified response for `placeMultipleOrders()` (`POST /eapi/v1/batchOrders`):
  - items: property `postOnly` added
  - items: property `fee` added
  - items: item property `postOnly` added
  - items: item property `fee` added

- Modified response for `orderBook()` (`GET /eapi/v1/depth`):
  - `asks`.items: minItems `0` → `2`
  - `asks`.items: maxItems `null` → `2`
  - `bids`.items: minItems `0` → `2`
  - `bids`.items: maxItems `null` → `2`

- Modified response for `exchangeInformation()` (`GET /eapi/v1/exchangeInfo`):
  - `optionSymbols`.items: property `underlyingType` added
  - `optionSymbols`.items: property `contractType` added
  - `optionSymbols`.items: property `nakedSell` added
  - `optionSymbols`.items: item property `underlyingType` added
  - `optionSymbols`.items: item property `contractType` added
  - `optionSymbols`.items: item property `nakedSell` added

- Modified response for `querySingleOrder()` (`GET /eapi/v1/order`):
  - property `postOnly` added

- Modified response for `newOrder()` (`POST /eapi/v1/order`):
  - property `fee` added
  - property `postOnly` added

#### WebSocket Streams

- Modified parameter `interval`:
  - enum added: `1m`, `3m`, `5m`, `15m`, `30m`, `1h`, `2h`, `4h`, `6h`, `12h`, `1d`, `3d`, `1w`
  - affected methods:
    - `klineCandlestickStreams()` (`<symbol>@kline_<interval>` stream)
- Modified parameter `level`:
  - enum added: `5`, `10`, `20`
  - affected methods:
    - `partialBookDepthStreams()` (`<symbol>@depth<level>@<updateSpeed>` stream)
- Modified parameter `updateSpeed`:
  - required: `false` → `true`
  - enum added: `100ms`, `500ms`
  - affected methods:
    - `partialBookDepthStreams()` (`<symbol>@depth<level>@<updateSpeed>` stream)
    - `diffBookDepthStreams()` (`<symbol>@depth@<updateSpeed>` stream)

### Removed (2)

#### WebSocket Streams

- `/<symbol>@optionTicker()` (`<symbol>@optionTicker` stream)
- `/underlying@optionOpenInterest@<expirationDate>()` (`underlying@optionOpenInterest@<expirationDate>` stream)

## 15.0.9 - 2026-06-18

### Changed (2)

- Update `@binance/common` library to version `2.4.1`.
- Resolve security vulnerabilities.

## 15.0.8 - 2026-06-02

### Changed (1)

- Update `@binance/common` library to version `2.4.0`.

## 15.0.7 - 2026-05-21

### Changed (2)

- Update `@binance/common` library to version `2.3.14`.
- Resolve security vulnerabilities on `ws`.

## 15.0.6 - 2026-05-06

### Changed (2)

- Update `@binance/common` library to version `2.3.13`.
- Resolve security vulnerabilities on `axios`.

## 15.0.5 - 2026-04-15

### Changed (2)

- Update `@binance/common` library to version `2.3.12`.
- Resolve security vulnerabilities on `axios`.

## 15.0.4 - 2026-04-07

### Changed (1)

- Update `@binance/common` library to version `2.3.11`.

## 15.0.3 - 2026-03-30

### Changed (2)

- Update `@binance/common` library to version `2.3.10`.
- Resolve security vulnerabilities on `handlebars` (bump version from `4.7.8` to `4.7.9`) and `brace-expansion` (bump version from `1.1.12` to `1.1.13`).

## 15.0.2 - 2026-03-26

### Changed (2)

- Update `@binance/common` library to version `2.3.8`.
- Resolve security vulnerabilities on `picomatch` (bump version from `2.3.1` to `2.3.2`).

## 15.0.1 - 2026-03-24

### Changed (1)

- Update `@binance/common` library to version `2.3.7`.

## 15.0.0 - 2026-03-19

### Changed (11)

- Update `@binance/common` library to version `2.3.6`.
- Resolve security vulnerabilities on `flatted`.

#### REST API

- Added parameter `selfTradePreventionMode`
  - affected methods:
    - `newOrder()` (`POST /eapi/v1/order`)
- Modified parameter `orders`:
  - items: property `selfTradePreventionMode` added
  - items: item property `selfTradePreventionMode` added
  - affected methods:
    - `placeMultipleOrders()` (`POST /eapi/v1/batchOrders`)
- Modified response for `cancelMultipleOptionOrders()` (`DELETE /eapi/v1/batchOrders`):
  - items: property `selfTradePreventionMode` added
  - items: item property `selfTradePreventionMode` added

- Modified response for `placeMultipleOrders()` (`POST /eapi/v1/batchOrders`):
  - items: property `selfTradePreventionMode` added
  - items: item property `selfTradePreventionMode` added

- Modified response for `optionMarginAccountInformation()` (`GET /eapi/v1/marginAccount`):
  - property `tradeGroupId` added

- Modified response for `queryCurrentOpenOptionOrders()` (`GET /eapi/v1/openOrders`):
  - items: property `selfTradePreventionMode` added
  - items: item property `selfTradePreventionMode` added

- Modified response for `cancelOptionOrder()` (`DELETE /eapi/v1/order`):
  - property `selfTradePreventionMode` added

- Modified response for `querySingleOrder()` (`GET /eapi/v1/order`):
  - property `selfTradePreventionMode` added

- Modified response for `newOrder()` (`POST /eapi/v1/order`):
  - property `selfTradePreventionMode` added

## 14.0.0 - 2026-03-13

### Changed (2)

- Update `@binance/common` library to version `2.3.5`.

#### REST API

- Modified response for `cancelAllOptionOrdersOnSpecificSymbol()` (`DELETE /eapi/v1/allOpenOrders`):
  - `code`: type `integer` → `string`

## 13.0.4 - 2026-03-02

### Changed (2)

- Update `@binance/common` library to version `2.3.4`.
- Resolve security vulnerabilities on `minimatch`.

## 13.0.3 - 2026-02-24

### Changed (2)

- Update `@binance/common` library to version `2.3.3`.
- Resolve security vulnerabilities on `axios`.

## 13.0.2 - 2026-02-12

### Changed (1)

- Update `@binance/common` library to version `2.3.2`.

## 13.0.1 - 2026-01-20

### Changed (1)

- Update `@binance/common` library to version `2.3.1`.

## 13.0.0 - 2026-01-13

### Changed (2)

- Update `@binance/common` library to version `2.2.0`.
- Update REST API and Websocket Streams to match latest API changes.

## 12.0.0 - 2025-12-19

### Changed (2)

- Update `@binance/common` library to version `2.1.1`.

#### WebSocket Streams

- Modified parameter `id`:
  - type `string` → `integer`
  - affected methods:
    - `partialBookDepthStreams()` (`<symbol>@depth<levels>@<updateSpeed>` stream)
    - `indexPriceStreams()` (`<symbol>@index` stream)
    - `klineCandlestickStreams()` (`<symbol>@kline_<interval>` stream)
    - `ticker24Hour()` (`<symbol>@ticker` stream)
    - `tradeStreams()` (`<symbol>@trade` stream)
    - `markPrice()` (`<underlyingAsset>@markPrice` stream)
    - `openInterest()` (`<underlyingAsset>@openInterest@<expirationDate>` stream)
    - `ticker24HourByUnderlyingAssetAndExpirationData()` (`<underlyingAsset>@ticker@<expirationDate>` stream)
    - `newSymbolInfo()` (`option_pair` stream)

## 11.0.0 - 2025-12-16

### Changed (3)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

#### REST API

- Modified parameter `orders`:
  - items.`isMmp`: type `boolean` → `string`
  - items.`postOnly`: type `boolean` → `string`
  - items.`price`: type `number` → `string`
  - items.`quantity`: type `number` → `string`
  - items.`reduceOnly`: type `boolean` → `string`
  - items.`isMmp`: type `boolean` → `string`
  - items.`postOnly`: type `boolean` → `string`
  - items.`price`: type `number` → `string`
  - items.`quantity`: type `number` → `string`
  - items.`reduceOnly`: type `boolean` → `string`
  - affected methods:
    - `placeMultipleOrders()` (`POST /eapi/v1/batchOrders`)

## 10.0.1 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 10.0.0 - 2025-11-18

### Changed (4)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

#### REST API

- Renamed `symbolPriceTicker()` to `indexPriceTicker()`.

#### WebSocket Streams

- Modified response for `tradeStreams()` (`<symbol>@trade` method):
  - `t`: number -> string

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

### Changed (4)

#### REST API

- Deleted parameter `price`
  - affected methods:
    - `newBlockTradeOrder()` (`POST /eapi/v1/block/order/create`)
- Deleted parameter `quantity`
  - affected methods:
    - `newBlockTradeOrder()` (`POST /eapi/v1/block/order/create`)
- Deleted parameter `side`
  - affected methods:
    - `newBlockTradeOrder()` (`POST /eapi/v1/block/order/create`)
- Deleted parameter `symbol`
  - affected methods:
    - `newBlockTradeOrder()` (`POST /eapi/v1/block/order/create`)

## 7.0.0 - 2025-10-06

### Changed (1)

#### REST API

- Deleted parameter `limit`
  - affected methods:
    - `queryCurrentOpenOptionOrders()` (`GET /eapi/v1/openOrders`)

## 6.0.3 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 6.0.2 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 6.0.1 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 6.0.0 - 2025-07-22

### Changed (4)

#### REST API

- Modified response for `exchangeInformation()` method (`GET /eapi/v1/exchangeInfo`):
  - `optionSymbols`: item property `liquidationFeeRate` added

- Modified response for `optionMarginAccountInformation()` method (`GET /eapi/v1/marginAccount`):
  - `asset`: item property `adjustedEquity` added
  - `asset`: item property `lpProfit` deleted

- Update `@binance/common` library to version `1.2.2`.

- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 5.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 5.0.0 - 2025-06-30

### Added (1)

- Support User Data Streams.

### Changed (1)

- Update `@binance/common` library to version `1.1.3`.

## 4.0.2 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 4.0.1 - 2025-06-16

### Changed (2)

- Exposed `@types/ws` dependency.
- Update `@binance/common` library to version `1.1.1`.

## 4.0.0 - 2025-06-05

### Changed (2)

- Fix bug with enums exporting.
- Update `@binance/common` library to version `1.1.0`.

## 3.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 3.0.0 - 2025-05-14

### Changed

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
