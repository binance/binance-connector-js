# Changelog

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
