# Changelog

## 2.2.0 - 2026-10-15

### Added (15)

#### WebSocket Streams

- `batchClaimPartiallySucceeded()` (`web3_prediction_pm_claim_partial_success` stream)
- `fundTransferFailed()` (`web3_prediction_pm_transfer_fail` stream)
- `fundTransferSucceeded()` (`web3_prediction_pm_transfer_success` stream)
- `limitOrderFullyFilled()` (`web3_prediction_pm_limit_order_filled` stream)
- `limitOrderPartiallyFilled()` (`web3_prediction_pm_limit_order_partial_fill` stream)
- `limitOrderSubmissionFailed()` (`web3_prediction_pm_limit_submit_fail` stream)
- `limitOrderSubmittedSuccessfully()` (`web3_prediction_pm_limit_submit_success` stream)
- `marketBuyOrderFailed()` (`web3_prediction_pm_market_buy_fail` stream)
- `marketBuyOrderFullyFilled()` (`web3_prediction_pm_market_buy_success` stream)
- `marketResolutionNotification()` (`web3_prediction_pm_market_close` stream)
- `marketSellOrderFailedExpired()` (`web3_prediction_pm_market_sell_fail` stream)
- `marketSellOrderFullyFilled()` (`web3_prediction_pm_market_sell_success` stream)
- `predictionOrderBookByMarketId()` (`web3_prediction_orderbook_<marketId>` stream)
- `rewardClaimFailed()` (`web3_prediction_pm_claim_fail` stream)
- `rewardClaimSucceeded()` (`web3_prediction_pm_claim_success` stream)

### Changed (2)

- Update `@binance/common` library to version `2.5.0`.
- Resolve security vulnerabilities.

## 2.1.5 - 2026-10-09

### Changed (2)

- Modified response for `getMarketDetail()` (`GET /sapi/v1/w3w/wallet/prediction/market/detail`):
  - `markets`.items.`outcomes`.items: property `winner` added
  - `markets`.items.`outcomes`.items: item property `winner` added
  - `markets`.items.`outcomes`.items: property `winner` added
  - `markets`.items.`outcomes`.items: item property `winner` added

- Modified response field `markets`:
  - items.`outcomes`.items: property `winner` added
  - items.`outcomes`.items: item property `winner` added
  - items.`outcomes`.items: property `winner` added
  - items.`outcomes`.items: item property `winner` added
  - affected events:
    - `getMarketDetailResponse`

## 2.1.4 - 2026-10-02

### Changed (2)

- Update `@binance/common` library to version `2.4.10`.
- Resolve security vulnerabilities.

## 2.1.3 - 2026-09-11

### Changed (2)

- Update `@binance/common` library to version `2.4.9`.
- Resolve security vulnerabilities.

## 2.1.2 - 2026-09-03

### Changed (2)

- Update `@binance/common` library to version `2.4.8`.
- Resolve security vulnerabilities.

## 2.1.1 - 2026-08-25

### Changed (2)

- Update `@binance/common` library to version `2.4.6`.
- Resolve security vulnerabilities.

## 2.1.0 - 2026-08-17

### Added (10)

- `applyMmDeposit()` (`POST /sapi/v1/w3w/wallet/prediction/deposit/apply`)
- `applyMmWithdraw()` (`POST /sapi/v1/w3w/wallet/prediction/withdraw/apply`)
- `createOtcBlocktrade()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/create`)
- `fulfilOtcBlocktrade()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/fulfil`)
- `getOtcBlocktradeDetail()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/detail`)
- `getOtcBlocktradeEvents()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/events`)
- `getOtcReservedBalances()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/reserved-balances`)
- `listOtcBlocktrades()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/list`)
- `previewOtcBlocktrade()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/preview`)
- `removeOtcBlocktrades()` (`POST /sapi/v1/w3w/wallet/prediction/otc/blocktrade/remove`)

### Changed (10)

- Added response schema `fulfilOtcBlocktradeResponse`
- Added response schema `applyMmWithdrawResponse`
- Added response schema `removeOtcBlocktradesResponse`
- Added response schema `getOtcBlocktradeEventsResponse`
- Added response schema `previewOtcBlocktradeResponse`
- Added response schema `listOtcBlocktradesResponse`
- Added response schema `createOtcBlocktradeResponse`
- Added response schema `applyMmDepositResponse`
- Added response schema `getOtcReservedBalancesResponse`
- Added response schema `getOtcBlocktradeDetailResponse`

## 2.0.1 - 2026-07-21

### Changed (2)

- Update `@binance/common` library to version `2.4.5`.
- Resolve security vulnerabilities.

## 1.0.0 - 2026-06-29

- Initial release
