# Changelog

## 1.1.3 - 2025-06-30

### Added (1)

- Added Stream URLs for Portfolio Margin (Classic and Pro) and Margin Trading Data Streams.

## 1.1.2 - 2025-06-19

### Added (1)

- Added `User-Agent` to `WebsocketAPI` and `WebsocketStreams` connections.

## 1.1.1 - 2025-06-16

### Changed (4)

- Modified `keepAlive` logic to respect `httpsAgent` configuration if set.
- Exposed `ws` TS types.
- Fixed bug with array stringification on REST API requests.
- Cache signature generation.

## 1.1.0 - 2025-06-05

### Added (1)

- Added support for async stream callbacks.

### Changed (2)

- Fixed bug on `configuration.httpsAgent` when `keepAlive` is `true`.
- Fixed bug on HTTP requests JSON parsing.

## 1.0.6 - 2025-06-03

### Changed

- Fixed bug on `ConfigurationRestAPI` not respecting `baseOptions` parameters.

## 1.0.5 - 2025-05-28

### Changed

- Updated `DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL` to `https://api.binance.com`.
- Removed `DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_TESTNET_URL`.

## 1.0.4 - 2025-05-13

### Added

- Support streams on Websocket APIs.

## 1.0.3 - 2025-05-12

### Changed

- Fixed bug on `WebsocketApiResponse` data parsing.

## 1.0.2 - 2025-04-10

### Changed

- Update `replaceWebsocketStreamsPlaceholders` function to parse `updateSpeed` properly.

## 1.0.1 - 2025-04-07

- Fix bug on `httpRequestFunction` error parsing.
- Remove unsupported Testnet URLs for `/sapi` BUs.

## 1.0.0 - 2025-03-24

- Initial release
