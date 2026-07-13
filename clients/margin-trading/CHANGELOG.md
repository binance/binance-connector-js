# Changelog

## 13.0.0 - 2026-07-13

### Added (4)

#### REST API

- `exitSpecialKeyMode()` (`POST /sapi/v1/margin/exit-special-key-mode`)
- `liquidationLoanRepay()` (`POST /sapi/v1/margin/liquidation-loan/repay`)
- `queryLiquidationLoan()` (`GET /sapi/v1/margin/liquidation-loan`)
- `queryLiquidationLoanRepayHistory()` (`GET /sapi/v1/margin/liquidation-loan/repay-history`)

### Changed (29)

#### REST API

- Added parameter `trailingDelta`
  - affected methods:
    - `marginAccountNewOrder()` (`POST /sapi/v1/margin/order`)
- Modified parameter `assetNames`:
  - type `array` → `string`
  - affected methods:
    - `smallLiabilityExchange()` (`POST /sapi/v1/margin/exchange-small-liability`)
- Modified parameter `isIsolated`:
  - enum added: `TRUE`, `FALSE`
  - affected methods:
    - `queryMarginAccountsAllOco()` (`GET /sapi/v1/margin/allOrderList`)
    - `queryMarginAccountsAllOrders()` (`GET /sapi/v1/margin/allOrders`)
    - `queryPreventedMatches()` (`GET /sapi/v1/margin/myPreventedMatches`)
    - `queryMarginAccountsTradeList()` (`GET /sapi/v1/margin/myTrades`)
    - `queryMarginAccountsOpenOco()` (`GET /sapi/v1/margin/openOrderList`)
    - `marginAccountCancelAllOpenOrdersOnASymbol()` (`DELETE /sapi/v1/margin/openOrders`)
    - `queryMarginAccountsOpenOrders()` (`GET /sapi/v1/margin/openOrders`)
    - `marginAccountCancelOrder()` (`DELETE /sapi/v1/margin/order`)
    - `queryMarginAccountsOrder()` (`GET /sapi/v1/margin/order`)
    - `marginAccountNewOrder()` (`POST /sapi/v1/margin/order`)
    - `marginAccountNewOco()` (`POST /sapi/v1/margin/order/oco`)
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
    - `marginAccountCancelOco()` (`DELETE /sapi/v1/margin/orderList`)
    - `queryMarginAccountsOco()` (`GET /sapi/v1/margin/orderList`)
    - `queryCurrentMarginOrderCountUsage()` (`GET /sapi/v1/margin/rateLimit/order`)
- Modified parameter `isIsolated`:
  - enum added: `TRUE`, `FALSE`
  - affected methods:
    - `marginAccountBorrowRepay()` (`POST /sapi/v1/margin/borrow-repay`)
- Modified parameter `isIsolated`:
  - type `boolean` → `string`
  - enum added: `TRUE`, `FALSE`
  - affected methods:
    - `getFutureHourlyInterestRate()` (`GET /sapi/v1/margin/next-hourly-interest-rate`)
- Modified parameter `pendingAboveTimeInForce`:
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `pendingAboveType`:
  - enum added: `LIMIT_MAKER`, `STOP_LOSS`, `STOP_LOSS_LIMIT`
  - affected methods:
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `pendingBelowTimeInForce`:
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `pendingBelowType`:
  - enum added: `LIMIT_MAKER`, `STOP_LOSS`, `STOP_LOSS_LIMIT`
  - affected methods:
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `pendingSide`:
  - enum added: `BUY`, `SELL`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `pendingTimeInForce`:
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
- Modified parameter `pendingType`:
  - enum added: `LIMIT`, `MARKET`, `STOP_LOSS`, `STOP_LOSS_LIMIT`, `TAKE_PROFIT`, `TAKE_PROFIT_LIMIT`, `LIMIT_MAKER`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
- Modified parameter `permissionMode`:
  - enum added: `TRADE`, `READ`
  - affected methods:
    - `createSpecialKey()` (`POST /sapi/v1/margin/apiKey`)
- Modified parameter `selfTradePreventionMode`:
  - enum added: `EXPIRE_TAKER`, `EXPIRE_MAKER`, `EXPIRE_BOTH`, `NONE`
  - affected methods:
    - `marginAccountNewOrder()` (`POST /sapi/v1/margin/order`)
    - `marginAccountNewOco()` (`POST /sapi/v1/margin/order/oco`)
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `sideEffectType`:
  - enum added: `NO_SIDE_EFFECT`, `MARGIN_BUY`, `AUTO_REPAY`, `AUTO_BORROW_REPAY`
  - affected methods:
    - `marginAccountNewOrder()` (`POST /sapi/v1/margin/order`)
    - `marginAccountNewOco()` (`POST /sapi/v1/margin/order/oco`)
- Modified parameter `sideEffectType`:
  - enum added: `NO_SIDE_EFFECT`, `MARGIN_BUY`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `stopLimitTimeInForce`:
  - enum added: `GTC`, `FOK`, `IOC`
  - affected methods:
    - `marginAccountNewOco()` (`POST /sapi/v1/margin/order/oco`)
- Modified parameter `symbol`:
  - required: `true` → `false`
  - affected methods:
    - `marginAccountBorrowRepay()` (`POST /sapi/v1/margin/borrow-repay`)
- Modified parameter `type`:
  - enum added: `MARGIN`, `ISOLATED`
  - affected methods:
    - `queryMarginAvailableInventory()` (`GET /sapi/v1/margin/available-inventory`)
    - `marginManualLiquidation()` (`POST /sapi/v1/margin/manual-liquidation`)
- Modified parameter `type`:
  - enum added: `BORROW`, `REPAY`
  - affected methods:
    - `queryBorrowRepayRecordsInMarginAccount()` (`GET /sapi/v1/margin/borrow-repay`)
    - `marginAccountBorrowRepay()` (`POST /sapi/v1/margin/borrow-repay`)
- Modified parameter `type`:
  - enum added: `TRANSFER`, `BORROW`, `REPAY`, `BUY_INCOME`, `BUY_EXPENSE`, `SELL_INCOME`, `SELL_EXPENSE`, `TRADING_COMMISSION`, `BUY_LIQUIDATION`, `SELL_LIQUIDATION`, `REPAY_LIQUIDATION`, `OTHER_LIQUIDATION`, `LIQUIDATION_FEE`, `SMALL_BALANCE_CONVERT`, `COMMISSION_RETURN`, `SMALL_CONVERT`
  - affected methods:
    - `queryCrossIsolatedMarginCapitalFlow()` (`GET /sapi/v1/margin/capital-flow`)
- Modified parameter `type`:
  - enum added: `LIMIT`, `MARKET`, `STOP_LOSS`, `STOP_LOSS_LIMIT`, `TAKE_PROFIT`, `TAKE_PROFIT_LIMIT`, `LIMIT_MAKER`
  - affected methods:
    - `marginAccountNewOrder()` (`POST /sapi/v1/margin/order`)
- Modified parameter `type`:
  - enum added: `ROLL_IN`, `ROLL_OUT`
  - affected methods:
    - `getCrossMarginTransferHistory()` (`GET /sapi/v1/margin/transfer`)
- Modified parameter `workingSide`:
  - enum added: `BUY`, `SELL`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `workingTimeInForce`:
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
- Modified parameter `workingTimeInForce`:
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified parameter `workingType`:
  - enum added: `LIMIT`, `LIMIT_MAKER`
  - affected methods:
    - `marginAccountNewOto()` (`POST /sapi/v1/margin/order/oto`)
    - `marginAccountNewOtoco()` (`POST /sapi/v1/margin/order/otoco`)
- Modified response for `queryMarginAvailableInventory()` (`GET /sapi/v1/margin/available-inventory`):
  - `assets`: property `MATIC` deleted
  - `assets`: property `SHIB` deleted
  - `assets`: property `STPT` deleted
  - `assets`: property `TVK` deleted

- Modified response for `queryCrossIsolatedMarginCapitalFlow()` (`GET /sapi/v1/margin/capital-flow`):
  - items: property `note` added
  - items: item property `note` added

## 12.0.13 - 2026-06-18

### Changed (2)

- Update `@binance/common` library to version `2.4.1`.
- Resolve security vulnerabilities.

## 12.0.12 - 2026-06-02

### Changed (1)

- Update `@binance/common` library to version `2.4.0`.

## 12.0.11 - 2026-05-21

### Changed (2)

- Update `@binance/common` library to version `2.3.14`.
- Resolve security vulnerabilities on `ws`.

## 12.0.10 - 2026-05-06

### Changed (2)

- Update `@binance/common` library to version `2.3.13`.
- Resolve security vulnerabilities on `axios`.

## 12.0.9 - 2026-04-15

### Changed (2)

- Update `@binance/common` library to version `2.3.12`.
- Resolve security vulnerabilities on `axios`.

## 12.0.8 - 2026-04-07

### Changed (1)

- Update `@binance/common` library to version `2.3.11`.

## 12.0.7 - 2026-03-30

### Changed (2)

- Update `@binance/common` library to version `2.3.10`.
- Resolve security vulnerabilities on `handlebars` (bump version from `4.7.8` to `4.7.9`) and `brace-expansion` (bump version from `1.1.12` to `1.1.13`).

## 12.0.6 - 2026-03-26

### Changed (2)

- Update `@binance/common` library to version `2.3.8`.
- Resolve security vulnerabilities on `picomatch` (bump version from `2.3.1` to `2.3.2`).

## 12.0.5 - 2026-03-24

### Changed (1)

- Update `@binance/common` library to version `2.3.7`.

## 12.0.4 - 2026-03-19

### Changed (2)

- Update `@binance/common` library to version `2.3.6`.
- Resolve security vulnerabilities on `flatted`.

## 12.0.3 - 2026-03-13

### Changed (1)

- Update `@binance/common` library to version `2.3.5`.

## 12.0.2 - 2026-03-02

### Changed (2)

- Update `@binance/common` library to version `2.3.4`.
- Resolve security vulnerabilities on `minimatch`.

## 12.0.1 - 2026-02-24

### Changed (2)

- Update `@binance/common` library to version `2.3.3`.
- Resolve security vulnerabilities on `axios`.

## 12.0.0 - 2026-02-12

### Added (2)

#### REST API

- `getMarginRestrictedAssets()` (`GET /sapi/v1/margin/restricted-asset`)
- `queryPreventedMatches()` (`GET /sapi/v1/margin/myPreventedMatches`)

### Changed (1)

- Update `@binance/common` library to version `2.3.2`.

## 11.0.0 - 2026-01-27

### Added (1)

#### REST API

- `getMarginAssetRiskBasedLiquidationRatio()` (`GET /sapi/v1/margin/risk-based-liquidation-ratio`)

## 10.0.1 - 2026-01-20

### Changed (1)

- Update `@binance/common` library to version `2.3.1`.

## 10.1.2 - 2026-01-13

### Changed (1)

- Update `@binance/common` library to version `2.2.0`.

## 10.1.1 - 2025-12-19

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 10.1.0 - 2025-12-16

### Changed (2)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

## 10.0.2 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 10.0.1 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 10.0.0 - 2025-11-10

### Removed (6)

#### REST API

- `closeIsolatedMarginUserDataStream()` (`DELETE /sapi/v1/userDataStream/isolated`)
- `closeMarginUserDataStream()` (`DELETE /sapi/v1/userDataStream`)
- `keepaliveIsolatedMarginUserDataStream()` (`PUT /sapi/v1/userDataStream/isolated`)
- `keepaliveMarginUserDataStream()` (`PUT /sapi/v1/userDataStream`)
- `startIsolatedMarginUserDataStream()` (`POST /sapi/v1/userDataStream/isolated`)
- `startMarginUserDataStream()` (`POST /sapi/v1/userDataStream`)

## 9.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 9.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 8.0.0 - 2025-10-27

### Changed (1)

#### REST API

- Marked `closeIsolatedMarginUserDataStream` (`DELETE /sapi/v1/userDataStream/isolated`) as deprecated
- Marked `closeMarginUserDataStream` (`DELETE /sapi/v1/userDataStream`) as deprecated
- Marked `keepaliveIsolatedMarginUserDataStream` (`PUT /sapi/v1/userDataStream/isolated`) as deprecated
- Marked `keepaliveMarginUserDataStream` (`PUT /sapi/v1/userDataStream`) as deprecated
- Marked `startIsolatedMarginUserDataStream` (`POST /sapi/v1/userDataStream/isolated`) as deprecated
- Marked `startMarginUserDataStream` (`POST /sapi/v1/userDataStream`) as deprecated

## 7.0.2 - 2025-10-21

### Changed (1)

- Update `@binance/common` library to version `1.2.6`.

## 7.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 7.0.0 - 2025-08-18

### Added (1)

#### REST API

- `getLimitPricePairs()` (`GET /sapi/v1/margin/limit-price-pairs`)

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 6.0.3 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 6.0.2 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 6.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 6.0.0 - 2025-06-30

### Added (1)

- Support Risk and Trade Data Streams.

### Changed (1)

- Update `@binance/common` library to version `1.1.3`.

## 5.0.1 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 5.0.0 - 2025-06-16

### Added (1)

- `getListSchedule()` (`GET /sapi/v1/margin/list-schedule`)

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 4.0.0 - 2025-06-05

### Changed (2)

- Fix bug with enums exporting.
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
