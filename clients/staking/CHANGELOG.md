# Changelog

## 7.1.2 - 2026-01-13

### Changed (1)

- Update `@binance/common` library to version `2.2.0`.

## 7.1.1 - 2025-12-19

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 7.1.0 - 2025-12-16

### Changed (2)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

## 7.0.3 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 7.0.2 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 7.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 7.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 6.0.0 - 2025-10-30

### Changed (1)

- Modified response for `getCurrentEthStakingQuota()` (`GET /sapi/v1/eth-staking/eth/quota`):
  - property `calculating` added
  - property `redeemable` added
  - property `minStakeAmount` added
  - property `redeemPeriod` added
  - property `stakeable` added
  - property `minRedeemAmount` added
  - property `commissionFee` added

## 5.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 5.0.0 - 2025-09-09

### Added (3)

- `getSoftStakingProductList()` (`GET /sapi/v1/soft-staking/list`)
- `getSoftStakingRewardsHistory()` (`GET /sapi/v1/soft-staking/history/rewardsRecord`)
- `setSoftStaking()` (`GET /sapi/v1/soft-staking/set`)

## 4.0.0 - 2025-08-19

### Changed (1)

- Modified response for `getOnChainYieldsLockedProductList()` method (`GET /sapi/v1/onchain-yields/locked/list`):
  - `rows`.`detail`.`subscriptionStartTime`: type `string` → `integer`

## 3.0.3 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 3.0.2 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 3.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 3.0.0 - 2025-07-01

### Added (12)

- `getOnChainYieldsLockedPersonalLeftQuota()` (`GET /sapi/v1/onchain-yields/locked/personalLeftQuota`)
- `getOnChainYieldsLockedProductList()` (`GET /sapi/v1/onchain-yields/locked/list`)
- `getOnChainYieldsLockedProductPosition()` (`GET /sapi/v1/onchain-yields/locked/position`)
- `getOnChainYieldsLockedRedemptionRecord()` (`GET /sapi/v1/onchain-yields/locked/history/redemptionRecord`)
- `getOnChainYieldsLockedRewardsHistory()` (`GET /sapi/v1/onchain-yields/locked/history/rewardsRecord`)
- `getOnChainYieldsLockedSubscriptionPreview()` (`GET /sapi/v1/onchain-yields/locked/subscriptionPreview`)
- `getOnChainYieldsLockedSubscriptionRecord()` (`GET /sapi/v1/onchain-yields/locked/history/subscriptionRecord`)
- `onChainYieldsAccount()` (`GET /sapi/v1/onchain-yields/account`)
- `redeemOnChainYieldsLockedProduct()` (`POST /sapi/v1/onchain-yields/locked/redeem`)
- `setOnChainYieldsLockedAutoSubscribe()` (`POST /sapi/v1/onchain-yields/locked/setAutoSubscribe`)
- `setOnChainYieldsLockedProductRedeemOption()` (`POST /sapi/v1/onchain-yields/locked/setRedeemOption`)
- `subscribeOnChainYieldsLockedProduct()` (`POST /sapi/v1/onchain-yields/locked/subscribe`)

## 2.0.4 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 2.0.3 - 2025-06-16

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 2.0.2 - 2025-06-05

### Changed (1)

- Update `@binance/common` library to version `1.1.0`.

## 2.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

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
