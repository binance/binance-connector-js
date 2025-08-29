# Changelog

## 7.0.0 - 2025-08-29

### Changed (1)

- Modified response for `getSimpleEarnLockedProductList()` (`GET /sapi/v1/simple-earn/locked/list`):
  - `rows`.`detail`.`boostEndTime`: type `string` → `integer`

## 6.0.0 - 2025-08-19

### Changed (2)

- Modified response for `getSimpleEarnFlexibleProductList()` method (`GET /sapi/v1/simple-earn/flexible/list`):
  - `rows`.`subscriptionStartTime`: type `string` → `integer`

- Modified response for `getSimpleEarnLockedProductList()` method (`GET /sapi/v1/simple-earn/locked/list`):
  - `rows`.`detail`.`subscriptionStartTime`: type `string` → `integer`

## 5.0.7 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 5.0.6 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 5.0.5 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 5.0.4 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 5.0.3 - 2025-06-16

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 5.0.2 - 2025-06-05

### Changed (1)

- Update `@binance/common` library to version `1.1.0`.

## 5.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 5.0.0 - 2025-06-03

### Changed (1)

- Added parameter `recvWindow`
  - affected methods:
    - `getFlexibleRedemptionRecord()` (`GET /sapi/v1/simple-earn/flexible/history/redemptionRecord`)

## 4.0.0 - 2025-05-28

### Changed (1)

- Marked as signed the following endpoints:
  - `GET /sapi/v1/simple-earn/locked/position`

## 3.0.0 - 2025-04-15

### Changed

- Added `current`, `size` and `recvWindow` parameters to `/sapi/v1/simple-earn/flexible/history/rewardsRecord`.

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
