# Changelog

## 10.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 10.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 9.0.0 - 2025-10-02

### Changed (1)

- Modified parameter `orderArgs`:
  - item property `quantity` added
  - item property `symbol` added
  - item property `positionSide` added
  - affected methods:
    - `movePositionForSubAccount()` (`POST /sapi/v1/sub-account/futures/move-position`)

## 8.0.0 - 2025-09-19

### Changed (1)

- Modified parameter `email`:
  - required: `true` → `false`
  - affected methods:
    - `querySubAccountTransactionStatistics()` (`GET /sapi/v1/sub-account/transaction-statistics`)

## 7.0.6 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 7.0.5 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 7.0.4 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 7.0.3 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 7.0.2 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 7.0.1 - 2025-06-16

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 7.0.0 - 2025-06-05

### Changed (1)

- Update `@binance/common` library to version `1.1.0`.

### Removed (2)

- `enableLeverageTokenForSubAccount()` (`POST /sapi/v1/sub-account/blvt/enable`)
- `enableMarginForSubAccount()` (`POST /sapi/v1/sub-account/margin/enable`)

## 6.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 6.0.0 - 2025-05-26

### Changed (1)

- Modified parameter `ipAddress` for the following methods:
  - `addIpRestrictionForSubAccountApiKey()` (`POST /sapi/v2/sub-account/subAccountApi/ipRestriction`)
  - `deleteIpListForASubAccountApiKey()` (`DELETE /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList`)

## 5.0.0 - 2025-05-14

### Changed

- Updated response types.

## 4.0.0 - 2025-04-23

### Changed

- Marked as signed the following endpoints:
  - `GET /sapi/v1/sub-account/transfer/subUserHistory`
  - `POST /sapi/v1/sub-account/transfer/subToMaster`
  - `POST /sapi/v1/sub-account/transfer/subToSub`
  - `POST /sapi/v1/managed-subaccount/deposit`
  - `GET /sapi/v1/managed-subaccount/asset`
  - `GET /sapi/v1/managed-subaccount/accountSnapshot`
  - `POST /sapi/v1/managed-subaccount/withdraw`

## 3.0.1 - 2025-04-15

### Changed

- Correctly marked endpoints as signed.

## 3.0.0 - 2025-04-10

### Changed

- Update `@binance/common` library to version `1.0.2`.
- Update examples.

### Removed

- Remove unused error reponses.

## 2.0.1 - 2025-04-07

- Update `@binance/common` library to version `1.0.1`.
- Remove unsupported Testnet URL.

## 2.0.0 - 2025-03-28

### Added

- `GET /sapi/v1/sub-account/futures/move-position`
- `POST /sapi/v1/sub-account/futures/move-position`

## 1.0.0 - 2025-03-24

- Initial release
