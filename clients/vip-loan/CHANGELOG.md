# Changelog

## 7.0.0 - 2026-01-13

### Added (2)

- `getVIPLoanAccruedInterest()` (`GET /sapi/v1/loan/vip/accruedInterest`)
- `getVIPLoanInterestRateHistory()` (`GET /sapi/v1/loan/vip/interestRateHistory`)

### Changed (1)

- Update `@binance/common` library to version `2.2.0`.

## 6.1.1 - 2025-12-19

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 6.1.0 - 2025-12-16

### Changed (2)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

## 6.0.3 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 6.0.2 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 6.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 6.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 5.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 5.0.0 - 2025-08-26

### Changed (1)

- Added parameter `loanTerm`
  - affected methods:
    - `vipLoanBorrow()` (`POST /sapi/v1/loan/vip/borrow`)

## 4.0.3 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 4.0.2 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 4.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 4.0.0 - 2025-06-30

### Changed (1)

- Renamed `VipLoan` class to `VIPLoan`.

## 3.0.4 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 3.0.3 - 2025-06-16

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 3.0.2 - 2025-06-05

### Changed (1)

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
- Remove unsupported Testnet URL.

## 1.0.0 - 2025-03-24

- Initial release
