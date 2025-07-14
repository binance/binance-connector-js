# Changelog

## 11.0.0 - 2025-07-14

### Added (1)

- Support session management for WebSocket API, with auto session re-logon (`autoSessionReLogon` option on `ConfigurationWebsocketAPI`).

### Changed (1)

- Update `@binance/common` library to version `1.2.1`.

## 10.0.1 - 2025-07-08

### Changed (1)

- Update `@binance/common` library to version `1.2.0`.

## 10.0.0 - 2025-06-30

### Added (1)

- Support User Data Streams.

### Changed (1)

- Update `@binance/common` library to version `1.1.3`.

## 9.0.0 - 2025-06-26

### Changed (10)

#### REST API

- `RateLimits` is unified as a single object
- `ExchangeFilters` is unified as a single object
- Modified response for `exchangeInfo()` method (`GET /api/v3/exchangeInfo`):
  - `rateLimits`: item property `count` added
- Modified response for `orderCancelReplace()` method (`POST /api/v3/order/cancelReplace`):
  - property `cancelResult` added
  - property `newOrderResponse` added
  - property `newOrderResult` added
  - property `cancelResponse` added
  - `data`.`cancelResponse`: property `code` added
  - `data`.`cancelResponse`: property `msg` added
  - `data`.`newOrderResponse`: property `orderListId` added
  - `data`.`newOrderResponse`: property `symbol` added
  - `data`.`newOrderResponse`: property `transactTime` added
  - `data`.`newOrderResponse`: property `clientOrderId` added
  - `data`.`newOrderResponse`: property `orderId` added
- Modified response for `ticker()` method (`GET /api/v3/ticker`):
- Modified response for `ticker24hr()` method (`GET /api/v3/ticker/24hr`):
- Modified response for `tickerTradingDay()` method (`GET /api/v3/ticker/tradingDay`):

#### WebSocket API

- `RateLimits` is unified as a single object
- `ExchangeFilters` is unified as a single object
- Modified response for `exchangeInfo()` method (`POST /exchangeInfo`):
  - `rateLimits`: item property `count` added
  - `result`.`rateLimits`: item property `count` added

## 8.0.1 - 2025-06-19

### Changed (1)

- Update `@binance/common` library to version `1.1.2`.

## 8.0.0 - 2025-06-16

### Changed (4)

- Update `@binance/common` library to version `1.1.1`.

#### REST API

- Modified response for `exchangeInfo()` method (`GET /api/v3/exchangeInfo`):
  - `symbols`: item property `amendAllowed` added
  - `symbols`: item property `allowAmend` deleted

#### WebSocket API

- Modified response for `exchangeInfo()` method (`POST /exchangeInfo`):
  - `result`.`symbols`: item property `amendAllowed` added
  - `result`.`symbols`: item property `allowAmend` deleted
- Exposed `@types/ws` dependency.

## 7.0.0 - 2025-06-05

### Changed (2)

- Fix bug with enums exporting.
- Update `@binance/common` library to version `1.1.0`.

## 6.0.1 - 2025-06-03

### Changed

- Update `@binance/common` library to version `1.0.6`.

## 6.0.0 - 2025-05-19

### Changed (4)

#### REST API

- Modified `klines()` (response type changed - it can be either a number or string)
- Modified `uiKlines()` (response type changed - it can be either a number or string)

#### WebSocket API

- Modified `klines()` (response type changed - it can be either a number or string)
- Modified `uiKlines()` (response type changed - it can be either a number or string)

## 5.0.0 - 2025-05-14

### Added

- Support streams for `userDataStreamSubscribe()` Websocket endpoint.

```typescript
const res = await connection.userDataStreamSubscribe();
const response = res.response;

const data = response.data;
console.log('userDataStreamSubscribe() response:', data);

const stream = res.stream;
stream.on('message', (data) => {
    console.log('userDataStreamSubscribe() stream data:', data);
});
```

### Changed

- Updated `@binance/common` library to version `1.0.4`.
- Updated response types.
- Updated request parameters to correctly specify their required status.

## 4.0.0 - 2025-04-28

### Changed

- Removed `apiKey` from `userDataStream.subscribe` and `userDataStream.unsubscribe` Websocket endpoints.
- Updated response types.

## 3.0.0 - 2025-04-25

### Changed

- Updated enums for General and Trade APIs.

## 2.0.0 - 2025-04-10

### Added

- Add Order Amend Keep Priority endpoint:
  - `PUT /api/v3/order/amend/keepPriority`

### Changed

- Update `@binance/common` library to version `1.0.2`.
- Update request parameters to correctly specify parameter types and their required status.
- Update response types to support multiple interfaces where they are available.
- Update examples.

### Removed

- Remove unused error reponses.

## 1.0.1 - 2025-04-07

- Update `@binance/common` library to version `1.0.1`.

## 1.0.0 - 2025-03-24

- Initial release
