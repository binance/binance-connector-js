# Changelog

## 11.1.0 - 2025-12-16

### Changed (2)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

## 11.0.1 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 11.0.0 - 2025-11-27

### Changed (2)

- Modified response for `getBfusdAccount()` (`GET /sapi/v1/bfusd/account`):
  - property `usdtProfit` added
  - property `bfusdProfit` added
  - property `totalProfit` removed

- Modified response for `getBfusdRewardsHistory()` (`GET /sapi/v1/bfusd/history/rewardsHistory`):
  - `rows`.items: property `rewardAsset` added

## 10.0.2 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 10.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 10.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 9.0.0 - 2025-10-30

### Added (8)

- `getBfusdAccount()` (`GET /sapi/v1/bfusd/account`)
- `getBfusdQuotaDetails()` (`GET /sapi/v1/bfusd/quota`)
- `getBfusdRateHistory()` (`GET /sapi/v1/bfusd/history/rateHistory`)
- `getBfusdRedemptionHistory()` (`GET /sapi/v1/bfusd/history/redemptionHistory`)
- `getBfusdRewardsHistory()` (`GET /sapi/v1/bfusd/history/rewardsHistory`)
- `getBfusdSubscriptionHistory()` (`GET /sapi/v1/bfusd/history/subscriptionHistory`)
- `redeemBfusd()` (`POST /sapi/v1/bfusd/redeem`)
- `subscribeBfusd()` (`POST /sapi/v1/bfusd/subscribe`)

## 8.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 8.0.0 - 2025-09-05

### Added (8)

- `getRwusdAccount()` (`GET /sapi/v1/rwusd/account`)
- `getRwusdQuotaDetails()` (`GET /sapi/v1/rwusd/quota`)
- `getRwusdRateHistory()` (`GET /sapi/v1/rwusd/history/rateHistory`)
- `getRwusdRedemptionHistory()` (`GET /sapi/v1/rwusd/history/redemptionHistory`)
- `getRwusdRewardsHistory()` (`GET /sapi/v1/rwusd/history/rewardsHistory`)
- `getRwusdSubscriptionHistory()` (`GET /sapi/v1/rwusd/history/subscriptionHistory`)
- `redeemRwusd()` (`POST /sapi/v1/rwusd/redeem`)
- `subscribeRwusd()` (`POST /sapi/v1/rwusd/subscribe`)

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
