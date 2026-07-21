# Changelog

## 22.0.1 - 2026-07-21

### Changed (2)

- Update `@binance/common` library to version `2.4.5`.
- Resolve security vulnerabilities.

## 22.0.0 - 2026-07-13

### Changed (13)

- Added parameter `recvWindow`
  - affected methods:
    - `getCountryList()` (`GET /sapi/v1/localentity/country/list`)
    - `getRegionList()` (`GET /sapi/v1/localentity/region/list`)
- Deleted parameter `signature`
  - affected methods:
    - `submitDepositQuestionnaire()` (`PUT /sapi/v1/localentity/broker/deposit/provide-info`)
    - `brokerWithdraw()` (`POST /sapi/v1/localentity/broker/withdraw/apply`)
- Modified parameter `accountType`:
  - enum added: `SPOT`, `MARGIN`
  - affected methods:
    - `dustlog()` (`GET /sapi/v1/asset/dribblet`)
    - `dustTransfer()` (`POST /sapi/v1/asset/dust`)
    - `getAssetsThatCanBeConvertedIntoBnb()` (`POST /sapi/v1/asset/dust-btc`)
- Modified parameter `depositId`:
  - type `string` → `integer`
  - affected methods:
    - `depositHistoryV2()` (`GET /sapi/v2/localentity/deposit/history`)
- Modified parameter `fromSymbol`:
  - enum added: `ISOLATEDMARGIN_MARGIN`, `ISOLATEDMARGIN_ISOLATEDMARGIN`
  - affected methods:
    - `queryUserUniversalTransferHistory()` (`GET /sapi/v1/asset/transfer`)
    - `userUniversalTransfer()` (`POST /sapi/v1/asset/transfer`)
- Modified parameter `needBtcValuation`:
  - type `string` → `boolean`
  - affected methods:
    - `fundingWallet()` (`POST /sapi/v1/asset/get-funding-asset`)
- Modified parameter `status`:
  - enum added: `0`, `1`, `2`, `6`, `7`, `8`
  - affected methods:
    - `depositHistory()` (`GET /sapi/v1/capital/deposit/hisrec`)
- Modified parameter `subAccountId`:
  - type `integer` → `string`
  - affected methods:
    - `oneClickArrivalDepositApply()` (`POST /sapi/v1/capital/deposit/credit-apply`)
- Modified parameter `toSymbol`:
  - enum added: `MARGIN_ISOLATEDMARGIN`, `ISOLATEDMARGIN_ISOLATEDMARGIN`
  - affected methods:
    - `queryUserUniversalTransferHistory()` (`GET /sapi/v1/asset/transfer`)
    - `userUniversalTransfer()` (`POST /sapi/v1/asset/transfer`)
- Modified parameter `type`:
  - enum added: `SPOT`, `MARGIN`, `FUTURES`
  - affected methods:
    - `dailyAccountSnapshot()` (`GET /sapi/v1/accountSnapshot`)
- Modified parameter `type`:
  - enum added: `DELEGATE`, `UNDELEGATE`
  - affected methods:
    - `queryUserDelegationHistory()` (`GET /sapi/v1/asset/custody/transfer-history`)
- Modified parameter `type`:
  - enum added: `MAIN_UMFUTURE`, `MAIN_CMFUTURE`, `MAIN_MARGIN`, `UMFUTURE_MAIN`, `UMFUTURE_MARGIN`, `CMFUTURE_MAIN`, `CMFUTURE_MARGIN`, `MARGIN_MAIN`, `MARGIN_UMFUTURE`, `MARGIN_CMFUTURE`, `ISOLATEDMARGIN_MARGIN`, `MARGIN_ISOLATEDMARGIN`, `ISOLATEDMARGIN_ISOLATEDMARGIN`, `MAIN_FUNDING`, `FUNDING_MAIN`, `FUNDING_UMFUTURE`, `UMFUTURE_FUNDING`, `MARGIN_FUNDING`, `FUNDING_MARGIN`, `FUNDING_CMFUTURE`, `CMFUTURE_FUNDING`, `MAIN_OPTION`, `OPTION_MAIN`, `UMFUTURE_OPTION`, `OPTION_UMFUTURE`, `MARGIN_OPTION`, `OPTION_MARGIN`, `FUNDING_OPTION`, `OPTION_FUNDING`, `MAIN_PORTFOLIO_MARGIN`, `PORTFOLIO_MARGIN_MAIN`
  - affected methods:
    - `userUniversalTransfer()` (`POST /sapi/v1/asset/transfer`)
- Modified response for `depositHistoryTravelRule()` (`GET /sapi/v1/localentity/deposit/history`):
  - items: property `travelRuleStatusV2` added
  - items: property `completeTime` added
  - items: property `walletType` deleted
  - items: property `unlockConfirm` deleted
  - items: item property `travelRuleStatusV2` added
  - items: item property `completeTime` added
  - items: item property `walletType` deleted
  - items: item property `unlockConfirm` deleted

## 21.0.0 - 2026-07-06

### Changed (1)

- Modified response for `dustlog()` (`GET /sapi/v1/asset/dribblet`):
  - `userAssetDribblets`.items.`userAssetDribbletDetails`.items: property `targetAsset` added
  - `userAssetDribblets`.items.`userAssetDribbletDetails`.items: item property `targetAsset` added
  - `userAssetDribblets`.items.`userAssetDribbletDetails`.items: property `targetAsset` added
  - `userAssetDribblets`.items.`userAssetDribbletDetails`.items: item property `targetAsset` added

## 20.0.0 - 2026-06-30

### Changed (2)

- Modified response for `brokerWithdraw()` (`POST /sapi/v1/localentity/broker/withdraw/apply`):
  - property `accepted` added
  - property `accpted` deleted

- Modified response for `withdrawTravelRule()` (`POST /sapi/v1/localentity/withdraw/apply`):
  - property `accepted` added
  - property `accpted` deleted

## 19.0.1 - 2026-06-18

### Changed (2)

- Update `@binance/common` library to version `2.4.1`.
- Resolve security vulnerabilities.

## 19.0.0 - 2026-06-02

### Added (2)

- `getCountryList()` (`GET /sapi/v1/localentity/country/list`)
- `getRegionList()` (`GET /sapi/v1/localentity/region/list`)

### Changed (1)

- Update `@binance/common` library to version `2.4.0`.

## 18.0.0 - 2026-05-25

### Changed (1)

- Added parameter `accountType`
  - affected methods:
    - `dustConvert()` (`POST /sapi/v1/asset/dust-convert/convert`)
    - `dustConvertibleAssets()` (`POST /sapi/v1/asset/dust-convert/query-convertible-assets`)

## 17.0.9 - 2026-05-21

### Changed (1)

- Update `@binance/common` library to version `2.3.14`.

## 17.0.8 - 2026-05-06

### Changed (2)

- Update `@binance/common` library to version `2.3.13`.
- Resolve security vulnerabilities on `axios`.

## 17.0.7 - 2026-04-15

### Changed (2)

- Update `@binance/common` library to version `2.3.12`.
- Resolve security vulnerabilities on `axios`.

## 17.0.6 - 2026-04-07

### Changed (1)

- Update `@binance/common` library to version `2.3.11`.

## 17.0.5 - 2026-03-30

### Changed (2)

- Update `@binance/common` library to version `2.3.10`.
- Resolve security vulnerabilities on `handlebars` (bump version from `4.7.8` to `4.7.9`) and `brace-expansion` (bump version from `1.1.12` to `1.1.13`).

## 17.0.4 - 2026-03-26

### Changed (2)

- Update `@binance/common` library to version `2.3.8`.
- Resolve security vulnerabilities on `picomatch` (bump version from `2.3.1` to `2.3.2`).

## 17.0.3 - 2026-03-24

### Changed (1)

- Update `@binance/common` library to version `2.3.7`.

## 17.0.2 - 2026-03-19

### Changed (2)

- Update `@binance/common` library to version `2.3.6`.
- Resolve security vulnerabilities on `flatted`.

## 17.0.1 - 2026-03-13

### Changed (1)

- Update `@binance/common` library to version `2.3.5`.

## 17.0.0 - 2026-03-02

### Changed (3)

- Update `@binance/common` library to version `2.3.4`.
- Resolve security vulnerabilities on `minimatch`.
- Modified response for `vaspList()` (`GET /sapi/v1/localentity/vasp`):
  - items: property `identifier` added
  - items: item property `identifier` added

## 16.0.2 - 2026-02-24

### Changed (2)

- Update `@binance/common` library to version `2.3.3`.
- Resolve security vulnerabilities on `axios`.

## 16.0.1 - 2026-02-12

### Changed (1)

- Update `@binance/common` library to version `2.3.2`.

## 16.0.0 - 2026-01-27

### Changed (1)

- Modified response for `assetDividendRecord()` (`GET /sapi/v1/asset/assetDividend`):
  - `rows`.items: property `direction` added
  - `rows`.items: item property `direction` added

## 15.0.0 - 2026-01-20

### Changed (5)

- Update `@binance/common` library to version `2.3.1`.

- Added parameter `accountType`
  - affected methods:
    - `dustlog()` (`GET /sapi/v1/asset/dribblet`)
- Added parameter `asset`
  - affected methods:
    - `assetDetail()` (`GET /sapi/v1/asset/assetDetail`)
- Modified response for `withdrawHistoryV1()` (`GET /sapi/v1/localentity/withdraw/history`):
  - items: property `addressTag` deleted
  - items: item property `addressTag` deleted

- Modified response for `withdrawHistoryV2()` (`GET /sapi/v2/localentity/withdraw/history`):
  - items: property `addressTag` deleted
  - items: item property `addressTag` deleted

## 14.0.0 - 2026-01-13

### Added (1)

- `submitDepositQuestionnaireV2()` (`PUT /sapi/v2/localentity/deposit/provide-info`)

### Changed (2)

- Update `@binance/common` library to version `2.2.0`.

- Modified parameter `depositId`:
  - type `string` → `integer`
  - affected methods:
    - `submitDepositQuestionnaire()` (`PUT /sapi/v1/localentity/broker/deposit/provide-info`)

## 13.0.0 - 2025-12-19

### Added (2)

- `dustConvert()` (`POST /sapi/v1/asset/dust-convert/convert`)
- `dustConvertibleAssets()` (`POST /sapi/v1/asset/dust-convert/query-convertible-assets`)

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 12.1.0 - 2025-12-16

### Changed (2)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

## 12.0.3 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 12.0.2 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 12.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 12.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 11.0.0 - 2025-09-15

### Changed (1)

- Modified response for `depositHistory()` (`GET /sapi/v1/capital/deposit/hisrec`):
  - item property `travelRuleStatus` added

## 10.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 10.0.0 - 2025-09-09

### Changed (1)

- Modified response for `allCoinsInformation()` (`GET /sapi/v1/capital/config/getall`):
  - `networkList`: item property `withdrawTag` added

## 9.0.0 - 2025-08-29

### Added (1)

- `depositHistoryV2()` (`GET /sapi/v2/localentity/deposit/history`)

## 8.0.1 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 8.0.0 - 2025-07-22

### Added (1)

- `checkQuestionnaireRequirements()` (`GET /sapi/v1/localentity/questionnaire-requirements`)

### Changed (3)

- Added parameter `recvWindow`
  - affected methods:
    - `fetchAddressVerificationList()` (`GET /sapi/v1/addressVerify/list`)
    - `vaspList()` (`GET /sapi/v1/localentity/vasp`)

- Update `@binance/common` library to version `1.2.2`.

- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 7.0.0 - 2025-07-14

### Changed (1)

- Modified response for `allCoinsInformation()` method (`GET /sapi/v1/capital/config/getall`):

## 6.0.3 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 6.0.2 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 6.0.1 - 2025-06-16

### Changed (1)

- Update `@binance/common` library to version `1.1.1`.

## 6.0.0 - 2025-06-11

### Added (1)

- `fetchAddressVerificationList()` (`GET /sapi/v1/addressVerify/list`)

## 5.0.2 - 2025-06-05

### Changed (1)

- Update `@binance/common` library to version `1.1.0`.

## 5.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 5.0.0 - 2025-05-14

### Changed

- Updated response types.

## 4.0.0 - 2025-04-23

### Added

- `GET /sapi/v1/capital/withdraw/quota`.

### Removed

- Removed `subAccountIdRequired` parameter from `POST /sapi/v1/localentity/broker/withdraw/apply`.

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

- `GET /sapi/v1/localentity/broker/deposit/provide-info`
- `POST /sapi/v1/localentity/broker/withdraw/apply`

## 1.0.0 - 2025-03-24

- Initial release
