# Changelog

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
