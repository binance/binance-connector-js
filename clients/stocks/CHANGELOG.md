# Changelog

## 1.1.0 - 2026-11-24

### Changed (7)

#### REST API

- Added parameter `tokenizedAssetSettleWalletType`
  - affected methods:
    - `placeEquityOrder()` (`POST /sapi/v1/equity/order/place`)
    - `tokenizedMint()` (`POST /sapi/v1/equity/tokenized/mint`)
    - `tokenizedRedeem()` (`POST /sapi/v1/equity/tokenized/redeem`)
- Modified response for `tokenizedConvertStatus()` (`GET /sapi/v1/equity/tokenized/convert-status`):
  - property `tokenizedAssetSettleWalletType` added

- Modified response for `tokenizedConvertHistory()` (`GET /sapi/v1/equity/tokenized/history`):
  - `rows`.items: property `tokenizedAssetSettleWalletType` added
  - `rows`.items: item property `tokenizedAssetSettleWalletType` added

- Modified response for `tokenizedMint()` (`POST /sapi/v1/equity/tokenized/mint`):
  - property `tokenizedAssetSettleWalletType` added

- Modified response for `tokenizedRedeem()` (`POST /sapi/v1/equity/tokenized/redeem`):
  - property `tokenizedAssetSettleWalletType` added

- Added response field `tokenizedAssetSettleWalletType`
  - affected events:
    - `tokenizedConvertStatusResponse`
    - `tokenizedMintResponse`
    - `tokenizedRedeemResponse`
- Modified response field `rows`:
  - items: property `tokenizedAssetSettleWalletType` added
  - items: item property `tokenizedAssetSettleWalletType` added
  - affected events:
    - `tokenizedConvertHistoryResponse`

## 1.0.9 - 2026-11-18

### Changed (2)

- Update `@binance/common` library to version `2.5.4`.
- Resolve security vulnerabilities.

## 1.0.8 - 2026-11-12

### Changed (2)

#### WebSocket Streams

- Modified response for `priceStream()` (`price` stream):
  - `rates`.items: property `prc` added
  - `rates`.items: property `lrc` added
  - `rates`.items: item property `prc` added
  - `rates`.items: item property `lrc` added

- Modified response field `rates`:
  - items: property `lrc` added
  - items: property `prc` added
  - items: item property `lrc` added
  - items: item property `prc` added
  - affected events:
    - `priceStreamResponse`

## 1.0.7 - 2026-11-09

### Changed (2)

- Update `@binance/common` library to version `2.5.3`.
- Resolve security vulnerabilities.

## 1.0.6 - 2026-10-23

### Changed (2)

- Update `@binance/common` library to version `2.5.2`.
- Resolve security vulnerabilities.

## 1.0.5 - 2026-10-19

### Changed (1)

- Update `@binance/common` library to version `2.5.1`.

## 1.0.4 - 2026-10-15

### Changed (2)

- Update `@binance/common` library to version `2.5.0`.
- Resolve security vulnerabilities.

## 1.0.3 - 2026-10-02

### Changed (2)

- Update `@binance/common` library to version `2.4.10`.
- Resolve security vulnerabilities.

## 1.0.2 - 2026-09-11

### Changed (2)

- Update `@binance/common` library to version `2.4.9`.
- Resolve security vulnerabilities.

## 1.0.1 - 2026-09-03

### Changed (2)

- Update `@binance/common` library to version `2.4.8`.
- Resolve security vulnerabilities.

## 1.0.0 - 2026-08-31

- Initial release
