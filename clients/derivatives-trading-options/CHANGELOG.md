# Changelog

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
