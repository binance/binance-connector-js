# Changelog

## 10.0.0 - 2026-01-20

### Changed (2)

- Update `@binance/common` library to version `2.3.1`.

#### REST API

- Modified response for `queryCurrentCmOpenOrder()` (`GET /papi/v1/cm/openOrder`):
  - type `object` → `array`
  - property `updateTime` deleted
  - property `origType` deleted
  - property `status` deleted
  - property `executedQty` deleted
  - property `positionSide` deleted
  - property `timeInForce` deleted
  - property `cumBase` deleted
  - property `orderId` deleted
  - property `type` deleted
  - property `origQty` deleted
  - property `reduceOnly` deleted
  - property `symbol` deleted
  - property `time` deleted
  - property `avgPrice` deleted
  - property `price` deleted
  - property `clientOrderId` deleted
  - property `pair` deleted
  - property `side` deleted

## 9.0.2 - 2026-01-13

### Changed (1)

- Update `@binance/common` library to version `2.2.0`.

## 9.0.1 - 2025-12-19

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 9.0.0 - 2025-12-16

### Changed (3)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

#### REST API

- Modified response for `umPositionAdlQuantileEstimation()` (`GET /papi/v1/um/adlQuantile`):
  - items.`adlQuantile`: property `HEDGE` deleted

## 8.0.1 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 8.0.0 - 2025-11-18

### Changed (3)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

#### WebSocket Streams

- Modified response for `userData()` method:
  - removed `M` from `Executionreport`

## 7.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 7.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 6.0.1 - 2025-10-21

### Changed (1)

- Update `@binance/common` library to version `1.2.6`.

## 6.0.0 - 2025-09-17

### Changed (2)

#### REST API

- Modified response for `marginMaxBorrow()` (`GET /papi/v1/margin/maxBorrowable`):
  - `amount`: type `number` → `string`
  - `borrowLimit`: type `integer` → `string`

- Modified response for `newMarginOrder()` (`POST /papi/v1/margin/order`):
  - `marginBuyBorrowAmount`: type `integer` → `string`

## 5.0.5 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 5.0.4 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 5.0.3 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 5.0.2 - 2025-07-22

### Changed (2)

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
