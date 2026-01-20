# Changelog

## 4.1.3 - 2026-01-20

### Changed (1)

- Update `@binance/common` library to version `2.3.1`.

## 4.1.2 - 2026-01-13

### Changed (1)

- Update `@binance/common` library to version `2.2.0`.

## 4.1.1 - 2025-12-19

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 4.1.0 - 2025-12-16

### Changed (2)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

## 4.0.2 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 4.0.1 - 2025-11-18

### Changed (2)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

## 4.0.0 - 2025-11-10

### Changed (4)

- Added parameter `endTimestamp`
  - affected methods:
    - `getC2CTradeHistory()` (`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`)
- Added parameter `startTimestamp`
  - affected methods:
    - `getC2CTradeHistory()` (`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`)
- Deleted parameter `endTime`
  - affected methods:
    - `getC2CTradeHistory()` (`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`)
- Deleted parameter `startTime`
  - affected methods:
    - `getC2CTradeHistory()` (`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`)

## 3.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 3.0.0 - 2025-11-06

### Changed (4)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.
- Added parameter `rows`
  - affected methods:
    - `getC2CTradeHistory()` (`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`)
- Added parameter `tradeType`
  - affected methods:
    - `getC2CTradeHistory()` (`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`)

## 2.0.8 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 2.0.7 - 2025-08-18

### Changed (1)

- Update `@binance/common` library to version `1.2.4`.

## 2.0.6 - 2025-07-22

### Changed (2)

- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

## 2.0.5 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

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
