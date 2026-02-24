# Changelog

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
