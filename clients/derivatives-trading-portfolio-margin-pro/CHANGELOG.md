# Changelog

## 11.0.1 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 11.0.0 - 2025-11-20

### Changed (1)

#### REST API

- Renamed `transferLdusdtForPortfolioMargin()` to `transferLdusdtRwusdForPortfolioMargin()`.

## 10.0.1 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 10.0.0 - 2025-11-10

### Removed (2)

#### REST API

- `mintBfusdForPortfolioMargin()` (`POST /sapi/v1/portfolio/mint`)
- `redeemBfusdForPortfolioMargin()` (`POST /sapi/v1/portfolio/redeem`)

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

## 8.0.0 - 2025-09-29

### Changed (2)

#### REST API

- Modified response for `mintBfusdForPortfolioMargin()` (`POST /sapi/v1/portfolio/mint`):
  - property `mintRate` added
  - property `rate` deleted

- Modified response for `redeemBfusdForPortfolioMargin()` (`POST /sapi/v1/portfolio/redeem`):
  - property `redeemRate` added
  - property `rate` deleted

## 7.0.5 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 7.0.4 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 7.0.3 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 7.0.2 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 7.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 7.0.0 - 2025-06-30

### Added (1)

- Support User Data Streams.

### Changed (1)

- Update `@binance/common` library to version `1.1.3`.

## 6.0.4 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 6.0.3 - 2025-06-16

### Changed (2)

- Exposed `@types/ws` dependency.
- Update `@binance/common` library to version `1.1.1`.

## 6.0.2 - 2025-06-05

### Changed (1)

- Update `@binance/common` library to version `1.1.0`.

## 6.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 6.0.0 - 2025-05-28

### Changed (1)

- Marked as signed the following endpoints:
  - `POST /sapi/v1/portfolio/repay`
- Updated `@binance/common` library to version `1.0.5`.

## 5.0.0 - 2025-05-26

### Changed (1)

- `queryPortfolioMarginProBankruptcyLoanRepayHistory()` (`GET /sapi/v1/portfolio/pmLoan-history` has been updated to `GET /sapi/v1/portfolio/pmloan-history`)

## 4.0.0 - 2025-04-23

### Changed

- `POST /sapi/v1/portfolio/earn-asset-transfer`

## 3.0.0 - 2025-04-15

### Added

- `GET /sapi/v1/portfolio/earn-asset-balance`
- `POST /sapi/v1/portfolio/earn-asset-balance`

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
