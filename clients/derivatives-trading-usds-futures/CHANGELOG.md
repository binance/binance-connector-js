# Changelog

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
