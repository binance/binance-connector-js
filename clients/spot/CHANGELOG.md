# Changelog

## 14.0.0 - 2025-08-18

### Added (2)

#### WebSocket API

- `sessionSubscriptions()` (`session.subscriptions` method)
- `userDataStreamSubscribeSignature()` (`userDataStream.subscribe.signature` method)

### Changed (83)

- Update `@binance/common` library to version `1.2.4`.

#### REST API

- Added parameter `abovePegOffsetType`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
- Added parameter `abovePegOffsetValue`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
- Added parameter `abovePegPriceType`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
- Added parameter `belowPegOffsetType`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
- Added parameter `belowPegOffsetValue`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
- Added parameter `belowPegPriceType`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
- Added parameter `icebergQty`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `newClientOrderId`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `newOrderRespType`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `pegOffsetType`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
- Added parameter `pegOffsetValue`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
- Added parameter `pegPriceType`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
- Added parameter `pendingAbovePegOffsetType`
  - affected methods:
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `pendingAbovePegOffsetValue`
  - affected methods:
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `pendingAbovePegPriceType`
  - affected methods:
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `pendingBelowPegOffsetType`
  - affected methods:
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `pendingBelowPegOffsetValue`
  - affected methods:
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `pendingBelowPegPriceType`
  - affected methods:
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `pendingPegOffsetType`
  - affected methods:
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
- Added parameter `pendingPegOffsetValue`
  - affected methods:
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
- Added parameter `pendingPegPriceType`
  - affected methods:
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
- Added parameter `price`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `quantity`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `recvWindow`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `selfTradePreventionMode`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `side`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `strategyId`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `strategyType`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `symbol`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `timeInForce`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `type`
  - affected methods:
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Added parameter `workingPegOffsetType`
  - affected methods:
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `workingPegOffsetValue`
  - affected methods:
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Added parameter `workingPegPriceType`
  - affected methods:
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
- Modified parameter `computeCommissionRates`:
  - affected methods:
    - `orderTest()` (`POST /api/v3/order/test`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)

- Modified response for `accountCommission()` method (`GET /api/v3/account/commission`):
  - property `specialCommission` added

- Modified response for `exchangeInfo()` method (`GET /api/v3/exchangeInfo`):
  - `exchangeFilters`: item property `maxNumOrderAmends` added
  - `exchangeFilters`: item property `maxNumOrderLists` added
  - `symbols`: item property `pegInstructionsAllowed` added
  - `symbols`.`filters`: item property `maxNumOrderAmends` added
  - `symbols`.`filters`: item property `maxNumOrderLists` added

- Modified response for `orderTest()` method (`POST /api/v3/order/test`):
  - property `specialCommissionForOrder` added

#### WebSocket API

- Added parameter `abovePegOffsetType`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)
- Added parameter `abovePegOffsetValue`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)
- Added parameter `abovePegPriceType`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)
- Added parameter `belowPegOffsetType`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)
- Added parameter `belowPegOffsetValue`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)
- Added parameter `belowPegPriceType`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)
- Added parameter `icebergQty`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `newClientOrderId`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `newOrderRespType`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `pegOffsetType`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
- Added parameter `pegOffsetValue`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
- Added parameter `pegPriceType`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
- Added parameter `pendingAbovePegOffsetType`
  - affected methods:
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `pendingAbovePegOffsetValue`
  - affected methods:
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `pendingAbovePegPriceType`
  - affected methods:
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `pendingBelowPegOffsetType`
  - affected methods:
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `pendingBelowPegOffsetValue`
  - affected methods:
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `pendingBelowPegPriceType`
  - affected methods:
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `pendingPegOffsetType`
  - affected methods:
    - `orderListPlaceOto()` (`orderList.place.oto` method)
- Added parameter `pendingPegOffsetValue`
  - affected methods:
    - `orderListPlaceOto()` (`orderList.place.oto` method)
- Added parameter `pendingPegPriceType`
  - affected methods:
    - `orderListPlaceOto()` (`orderList.place.oto` method)
- Added parameter `price`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `quantity`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `quoteOrderQty`
  - affected methods:
    - `orderTest()` (`order.test` method)
- Added parameter `recvWindow`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `selfTradePreventionMode`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `side`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `stopPrice`
  - affected methods:
    - `orderTest()` (`order.test` method)
- Added parameter `strategyId`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `strategyType`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `subscriptionId`
  - affected methods:
    - `userDataStreamUnsubscribe()` (`userDataStream.unsubscribe` method)
- Added parameter `symbol`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `timeInForce`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `trailingDelta`
  - affected methods:
    - `orderTest()` (`order.test` method)
- Added parameter `type`
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Added parameter `workingPegOffsetType`
  - affected methods:
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `workingPegOffsetValue`
  - affected methods:
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Added parameter `workingPegPriceType`
  - affected methods:
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
- Modified parameter `computeCommissionRates`:
  - affected methods:
    - `orderTest()` (`order.test` method)
    - `sorOrderTest()` (`sor.order.test` method)

- Modified response for `accountCommission()` method (`POST /account.commission`):
  - `result`: property `specialCommission` added

- Modified response for `exchangeInfo()` method (`POST /exchangeInfo`):
  - `result`.`exchangeFilters`: item property `maxNumOrderAmends` added
  - `result`.`exchangeFilters`: item property `maxNumOrderLists` added
  - `result`.`symbols`: item property `pegInstructionsAllowed` added
  - `result`.`symbols`.`filters`: item property `maxNumOrderAmends` added
  - `result`.`symbols`.`filters`: item property `maxNumOrderLists` added

- Modified response for `orderTest()` method (`POST /order.test`):
  - `result`: property `specialCommissionForOrder` added

## 13.0.1 - 2025-07-29

### Changed (1)

- Update `@binance/common` library to version `1.2.3`.

## 13.0.0 - 2025-07-23

### Changed (1)

#### REST API

- Added missing parameters to `orderTest()` (`POST /api/v3/order/test`)

#### WebSocket API

- Added missing parameters to `orderTest()`

## 12.0.0 - 2025-07-22

### Changed (3)

- Added missing parameters to `orderTest()` method (`POST /api/v3/order/test`):
- Update `@binance/common` library to version `1.2.2`.
- Bump `form-data` from `4.0.2` to `4.0.4` to fix a security issue.

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
