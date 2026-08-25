# Changelog

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
