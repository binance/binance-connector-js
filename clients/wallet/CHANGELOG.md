# Changelog

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
