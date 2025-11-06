# Changelog

## 8.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 7.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 7.0.0 - 2025-08-26

### Changed (2)

- Added parameter `collateralAmount`
  - affected methods:
    - `flexibleLoanBorrow()` (`POST /sapi/v2/loan/flexible/borrow`)
- Added parameter `loanAmount`
  - affected methods:
    - `flexibleLoanBorrow()` (`POST /sapi/v2/loan/flexible/borrow`)

## 6.0.7 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 6.0.6 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 6.0.5 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 6.0.4 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 6.0.3 - 2025-06-16

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 6.0.2 - 2025-06-05

### Changed (1)

- Update `@binance/common` library to version `1.1.0`.

## 6.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 6.0.0 - 2025-06-03

### Removed (7)

- `cryptoLoanAdjustLtv()` (`POST /sapi/v1/loan/adjust/ltv`)
- `cryptoLoanBorrow()` (`POST /sapi/v1/loan/borrow`)
- `cryptoLoanCustomizeMarginCall()` (`POST /sapi/v1/loan/customize/margin_call`)
- `cryptoLoanRepay()` (`POST /sapi/v1/loan/repay`)
- `getCollateralAssetsData()` (`GET /sapi/v1/loan/collateral/data`)
- `getLoanOngoingOrders()` (`GET /sapi/v1/loan/ongoing/orders`)
- `getLoanableAssetsData()` (`GET /sapi/v1/loan/loanable/data`)

## 5.0.0 - 2025-05-26

### Removed (1)

- `flexibleLoanCollateralRepayment()` (`POST /sapi/v2/loan/flexible/repay/collateral`)

## 4.0.0 - 2025-05-19

### Changed (1)

- Added parameter `repaymentType` for `flexibleLoanRepay()` (`POST /sapi/v2/loan/flexible/repay`)

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
