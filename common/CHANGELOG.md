# Changelog

## 2.0.0 - 2025-11-18

### Changed (1)

- Replaced deprecated `tsup` with `tsdown` for bundling.

## 2.0.0 - 2025-11-06

### Changed (1)

- Using `json-with-bigint` library for all JSON parsing to handle large integers consistently.

## 1.2.6 - 2025-10-21

### Changed (2)

- Fixed bug with `reconnectionPending` flag not being reset after reconnection.
- Fixed memory leak on terminated WebSockets not cleaned up during reconnection.

## 1.2.5 - 2025-09-12

### Changed (2)

- Fixed bug with query params serialisation on REST API requests.
- Addressed `axios` vulnerabilities.

## 1.2.4 - 2025-08-18

### Changed (1)

- Fixed bug with HTTP proxy protocol was not being applied correctly.

## 1.2.3 - 2025-07-29

### Changed (1)

- Fixed memory leak on WebSocket API connection timers.

## 1.2.2 - 2025-07-22

### Changed (2)

- Fixed bug with scientific numbers representation.
- Use `LOG_LEVEL` environment variable to override log level.

## 1.2.1 - 2025-07-14

### Changed (2)

- Fixed bug on `sendMessage` with response type on session requests.
- Improved logging.

## 1.2.0 - 2025-07-08

### Added (2)

- Support custom Headers on REST API requests (`customHeaders` option on `ConfigurationRestAPI`).
- Support automatic session re-logon on reconncetions/renewals when session is already logged on (`autoSessionReLogon` option on `ConfigurationWebsocketAPI`).

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
