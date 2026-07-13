# Changelog

## 32.0.0 - 2026-07-13

### Changed (76)

#### REST API

- Modified parameter `cancelRestrictions`:
  - enum removed: `NEW`, `PARTIALLY_FILLED`
  - affected methods:
    - `deleteOrder()` (`DELETE /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
- Modified parameter `newOrderRespType`:
  - enum removed: `MARKET`, `LIMIT`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderOco()` (`POST /api/v3/order/oco`)
    - `orderTest()` (`POST /api/v3/order/test`)
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
    - `orderListOpo()` (`POST /api/v3/orderList/opo`)
    - `orderListOpoco()` (`POST /api/v3/orderList/opoco`)
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
    - `sorOrder()` (`POST /api/v3/sor/order`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Modified parameter `pegOffsetType`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
- Modified parameter `pegPriceType`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
- Modified parameter `permissions`:
  - items: enum added: `SPOT`, `MARGIN`, `LEVERAGED`, `TRD_GRP_002`, `TRD_GRP_003`, `TRD_GRP_004`, `TRD_GRP_005`, `TRD_GRP_006`, `TRD_GRP_007`, `TRD_GRP_008`, `TRD_GRP_009`, `TRD_GRP_010`, `TRD_GRP_011`, `TRD_GRP_012`, `TRD_GRP_013`, `TRD_GRP_014`, `TRD_GRP_015`, `TRD_GRP_016`, `TRD_GRP_017`, `TRD_GRP_018`, `TRD_GRP_019`, `TRD_GRP_020`, `TRD_GRP_021`, `TRD_GRP_022`, `TRD_GRP_023`, `TRD_GRP_024`, `TRD_GRP_025`
  - affected methods:
    - `exchangeInfo()` (`GET /api/v3/exchangeInfo`)
- Modified parameter `selfTradePreventionMode`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderOco()` (`POST /api/v3/order/oco`)
    - `orderTest()` (`POST /api/v3/order/test`)
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
    - `orderListOpo()` (`POST /api/v3/orderList/opo`)
    - `orderListOpoco()` (`POST /api/v3/orderList/opoco`)
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
    - `sorOrder()` (`POST /api/v3/sor/order`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Modified parameter `symbolStatus`:
  - enum removed: `END_OF_DAY`, `NON_REPRESENTABLE`
  - affected methods:
    - `depth()` (`GET /api/v3/depth`)
    - `exchangeInfo()` (`GET /api/v3/exchangeInfo`)
    - `executionRules()` (`GET /api/v3/executionRules`)
    - `referencePriceCalculation()` (`GET /api/v3/referencePrice/calculation`)
    - `tickerBookTicker()` (`GET /api/v3/ticker/bookTicker`)
    - `tickerPrice()` (`GET /api/v3/ticker/price`)
    - `tickerTradingDay()` (`GET /api/v3/ticker/tradingDay`)
- Modified parameter `symbolStatus`:
  - enum removed: `END_OF_DAY`, `NON_REPRESENTABLE`
  - affected methods:
    - `ticker()` (`GET /api/v3/ticker`)
    - `ticker24hr()` (`GET /api/v3/ticker/24hr`)
- Modified parameter `timeInForce`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
    - `sorOrder()` (`POST /api/v3/sor/order`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Modified parameter `type`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderTest()` (`POST /api/v3/order/test`)
- Modified parameter `type`:
  - enum removed: `STOP_LOSS`, `STOP_LOSS_LIMIT`, `TAKE_PROFIT`, `TAKE_PROFIT_LIMIT`, `LIMIT_MAKER`, `NON_REPRESENTABLE`
  - affected methods:
    - `sorOrder()` (`POST /api/v3/sor/order`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Modified parameter `windowSize`:
  - enum added: `7d`
  - affected methods:
    - `ticker()` (`GET /api/v3/ticker`)
- Modified response for `allOrders()` (`GET /api/v3/allOrders`):
  - items: property `strategyId` added
  - items: property `pegOffsetType` added
  - items: property `workingFloor` added
  - items: property `pegPriceType` added
  - items: property `trailingTime` added
  - items: property `pegOffsetValue` added
  - items: property `peggedPrice` added
  - items: property `strategyType` added
  - items: property `trailingDelta` added
  - items: property `usedSor` added
  - items: property `preventedMatchId` added
  - items: property `preventedQuantity` added
  - items: property `expiryReason` added
  - items: item property `strategyId` added
  - items: item property `pegOffsetType` added
  - items: item property `workingFloor` added
  - items: item property `pegPriceType` added
  - items: item property `trailingTime` added
  - items: item property `pegOffsetValue` added
  - items: item property `peggedPrice` added
  - items: item property `strategyType` added
  - items: item property `trailingDelta` added
  - items: item property `usedSor` added
  - items: item property `preventedMatchId` added
  - items: item property `preventedQuantity` added
  - items: item property `expiryReason` added

- Modified response for `depth()` (`GET /api/v3/depth`):
  - `asks`.items: minItems `0` → `2`
  - `asks`.items: maxItems `null` → `2`
  - `bids`.items: minItems `0` → `2`
  - `bids`.items: maxItems `null` → `2`

- Modified response for `exchangeInfo()` (`GET /api/v3/exchangeInfo`):
  - property `sors` added
  - `exchangeFilters`.items: oneOf modified
  - `symbols`.items.`filters`.items: oneOf modified
  - `symbols`.items.`filters`.items: oneOf modified

- Modified response for `klines()` (`GET /api/v3/klines`):
  - items.items: oneOf added 2 schema(s)
  - items.items: oneOf removed 2 schema(s)

- Modified response for `myFilters()` (`GET /api/v3/myFilters`):
  - `assetFilters`.items: oneOf modified
  - `exchangeFilters`.items: oneOf modified
  - `symbolFilters`.items: oneOf modified

- Modified response for `getOpenOrders()` (`GET /api/v3/openOrders`):
  - items: property `pegOffsetValue` added
  - items: property `preventedMatchId` added
  - items: property `strategyType` added
  - items: property `trailingDelta` added
  - items: property `trailingTime` added
  - items: property `pegPriceType` added
  - items: property `peggedPrice` added
  - items: property `strategyId` added
  - items: property `workingFloor` added
  - items: property `usedSor` added
  - items: property `pegOffsetType` added
  - items: property `expiryReason` added
  - items: property `preventedQuantity` added
  - items: item property `pegOffsetValue` added
  - items: item property `preventedMatchId` added
  - items: item property `strategyType` added
  - items: item property `trailingDelta` added
  - items: item property `trailingTime` added
  - items: item property `pegPriceType` added
  - items: item property `peggedPrice` added
  - items: item property `strategyId` added
  - items: item property `workingFloor` added
  - items: item property `usedSor` added
  - items: item property `pegOffsetType` added
  - items: item property `expiryReason` added
  - items: item property `preventedQuantity` added

- Modified response for `deleteOrder()` (`DELETE /api/v3/order`):
  - property `trailingTime` added
  - property `preventedMatchId` added
  - property `strategyType` added
  - property `pegOffsetValue` added
  - property `strategyId` added
  - property `pegOffsetType` added
  - property `expiryReason` added
  - property `workingFloor` added
  - property `pegPriceType` added
  - property `preventedQuantity` added
  - property `stopPrice` added
  - property `usedSor` added
  - property `trailingDelta` added
  - property `icebergQty` added
  - property `peggedPrice` added

- Modified response for `getOrder()` (`GET /api/v3/order`):
  - property `peggedPrice` added
  - property `strategyId` added
  - property `usedSor` added
  - property `strategyType` added
  - property `pegPriceType` added
  - property `trailingTime` added
  - property `workingFloor` added
  - property `pegOffsetValue` added
  - property `trailingDelta` added
  - property `pegOffsetType` added
  - property `expiryReason` added
  - property `preventedMatchId` added
  - property `preventedQuantity` added

- Modified response for `orderAmendKeepPriority()` (`PUT /api/v3/order/amend/keepPriority`):
  - `amendedOrder`: property `preventedMatchId` added
  - `amendedOrder`: property `usedSor` added
  - `amendedOrder`: property `strategyType` added
  - `amendedOrder`: property `pegPriceType` added
  - `amendedOrder`: property `expiryReason` added
  - `amendedOrder`: property `pegOffsetType` added
  - `amendedOrder`: property `workingFloor` added
  - `amendedOrder`: property `icebergQty` added
  - `amendedOrder`: property `peggedPrice` added
  - `amendedOrder`: property `pegOffsetValue` added
  - `amendedOrder`: property `strategyId` added
  - `amendedOrder`: property `preventedQuantity` added
  - `amendedOrder`: property `trailingTime` added
  - `amendedOrder`: property `trailingDelta` added
  - `amendedOrder`: property `stopPrice` added

- Modified response for `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`):
  - property `msg` deleted
  - property `code` deleted
  - property `data` deleted
  - `cancelResponse`: property `trailingDelta` added
  - `cancelResponse`: property `pegOffsetType` added
  - `cancelResponse`: property `pegPriceType` added
  - `cancelResponse`: property `pegOffsetValue` added
  - `cancelResponse`: property `preventedQuantity` added
  - `cancelResponse`: property `stopPrice` added
  - `cancelResponse`: property `usedSor` added
  - `cancelResponse`: property `preventedMatchId` added
  - `cancelResponse`: property `trailingTime` added
  - `cancelResponse`: property `strategyType` added
  - `cancelResponse`: property `peggedPrice` added
  - `cancelResponse`: property `strategyId` added
  - `cancelResponse`: property `icebergQty` added
  - `cancelResponse`: property `expiryReason` added
  - `cancelResponse`: property `workingFloor` added
  - `newOrderResponse`: property `trailingTime` added
  - `newOrderResponse`: property `pegOffsetValue` added
  - `newOrderResponse`: property `peggedPrice` added
  - `newOrderResponse`: property `icebergQty` added
  - `newOrderResponse`: property `strategyId` added
  - `newOrderResponse`: property `preventedMatchId` added
  - `newOrderResponse`: property `pegPriceType` added
  - `newOrderResponse`: property `pegOffsetType` added
  - `newOrderResponse`: property `usedSor` added
  - `newOrderResponse`: property `preventedQuantity` added
  - `newOrderResponse`: property `strategyType` added
  - `newOrderResponse`: property `trailingDelta` added
  - `newOrderResponse`: property `workingFloor` added
  - `newOrderResponse`: property `expiryReason` added
  - `newOrderResponse`: property `stopPrice` added
  - `newOrderResponse`.`fills`.items: type `string` → `object`
  - `newOrderResponse`.`fills`.items: property `commissionAsset` added
  - `newOrderResponse`.`fills`.items: property `price` added
  - `newOrderResponse`.`fills`.items: property `qty` added
  - `newOrderResponse`.`fills`.items: property `tradeId` added
  - `newOrderResponse`.`fills`.items: property `commission` added
  - `newOrderResponse`.`fills`.items: item property `commissionAsset` added
  - `newOrderResponse`.`fills`.items: item property `price` added
  - `newOrderResponse`.`fills`.items: item property `qty` added
  - `newOrderResponse`.`fills`.items: item property `tradeId` added
  - `newOrderResponse`.`fills`.items: item property `commission` added

- Modified response for `deleteOrderList()` (`DELETE /api/v3/orderList`):
  - `orderReports`.items: property `strategyType` added
  - `orderReports`.items: property `pegOffsetType` added
  - `orderReports`.items: property `trailingTime` added
  - `orderReports`.items: property `usedSor` added
  - `orderReports`.items: property `pegPriceType` added
  - `orderReports`.items: property `expiryReason` added
  - `orderReports`.items: property `preventedMatchId` added
  - `orderReports`.items: property `strategyId` added
  - `orderReports`.items: property `preventedQuantity` added
  - `orderReports`.items: property `workingFloor` added
  - `orderReports`.items: property `icebergQty` added
  - `orderReports`.items: property `trailingDelta` added
  - `orderReports`.items: property `peggedPrice` added
  - `orderReports`.items: property `pegOffsetValue` added
  - `orderReports`.items: property `selfTradePreventionMode` deleted
  - `orderReports`.items: item property `strategyType` added
  - `orderReports`.items: item property `pegOffsetType` added
  - `orderReports`.items: item property `trailingTime` added
  - `orderReports`.items: item property `usedSor` added
  - `orderReports`.items: item property `pegPriceType` added
  - `orderReports`.items: item property `expiryReason` added
  - `orderReports`.items: item property `preventedMatchId` added
  - `orderReports`.items: item property `strategyId` added
  - `orderReports`.items: item property `preventedQuantity` added
  - `orderReports`.items: item property `workingFloor` added
  - `orderReports`.items: item property `icebergQty` added
  - `orderReports`.items: item property `trailingDelta` added
  - `orderReports`.items: item property `peggedPrice` added
  - `orderReports`.items: item property `pegOffsetValue` added
  - `orderReports`.items: item property `selfTradePreventionMode` deleted

- Modified response for `orderListOpo()` (`POST /api/v3/orderList/opo`):
  - `orderReports`.items: property `pegOffsetValue` added
  - `orderReports`.items: property `trailingTime` added
  - `orderReports`.items: property `workingFloor` added
  - `orderReports`.items: property `preventedMatchId` added
  - `orderReports`.items: property `usedSor` added
  - `orderReports`.items: property `trailingDelta` added
  - `orderReports`.items: property `peggedPrice` added
  - `orderReports`.items: property `stopPrice` added
  - `orderReports`.items: property `strategyType` added
  - `orderReports`.items: property `pegOffsetType` added
  - `orderReports`.items: property `expiryReason` added
  - `orderReports`.items: property `preventedQuantity` added
  - `orderReports`.items: property `strategyId` added
  - `orderReports`.items: property `pegPriceType` added
  - `orderReports`.items: property `icebergQty` added
  - `orderReports`.items: item property `pegOffsetValue` added
  - `orderReports`.items: item property `trailingTime` added
  - `orderReports`.items: item property `workingFloor` added
  - `orderReports`.items: item property `preventedMatchId` added
  - `orderReports`.items: item property `usedSor` added
  - `orderReports`.items: item property `trailingDelta` added
  - `orderReports`.items: item property `peggedPrice` added
  - `orderReports`.items: item property `stopPrice` added
  - `orderReports`.items: item property `strategyType` added
  - `orderReports`.items: item property `pegOffsetType` added
  - `orderReports`.items: item property `expiryReason` added
  - `orderReports`.items: item property `preventedQuantity` added
  - `orderReports`.items: item property `strategyId` added
  - `orderReports`.items: item property `pegPriceType` added
  - `orderReports`.items: item property `icebergQty` added

- Modified response for `orderListOpoco()` (`POST /api/v3/orderList/opoco`):
  - `orderReports`.items: property `pegOffsetValue` added
  - `orderReports`.items: property `preventedMatchId` added
  - `orderReports`.items: property `workingFloor` added
  - `orderReports`.items: property `icebergQty` added
  - `orderReports`.items: property `strategyId` added
  - `orderReports`.items: property `expiryReason` added
  - `orderReports`.items: property `strategyType` added
  - `orderReports`.items: property `preventedQuantity` added
  - `orderReports`.items: property `usedSor` added
  - `orderReports`.items: property `trailingTime` added
  - `orderReports`.items: property `pegPriceType` added
  - `orderReports`.items: property `peggedPrice` added
  - `orderReports`.items: property `pegOffsetType` added
  - `orderReports`.items: property `trailingDelta` added
  - `orderReports`.items: item property `pegOffsetValue` added
  - `orderReports`.items: item property `preventedMatchId` added
  - `orderReports`.items: item property `workingFloor` added
  - `orderReports`.items: item property `icebergQty` added
  - `orderReports`.items: item property `strategyId` added
  - `orderReports`.items: item property `expiryReason` added
  - `orderReports`.items: item property `strategyType` added
  - `orderReports`.items: item property `preventedQuantity` added
  - `orderReports`.items: item property `usedSor` added
  - `orderReports`.items: item property `trailingTime` added
  - `orderReports`.items: item property `pegPriceType` added
  - `orderReports`.items: item property `peggedPrice` added
  - `orderReports`.items: item property `pegOffsetType` added
  - `orderReports`.items: item property `trailingDelta` added

- Modified response for `orderListOto()` (`POST /api/v3/orderList/oto`):
  - `orderReports`.items: property `pegPriceType` added
  - `orderReports`.items: property `trailingDelta` added
  - `orderReports`.items: property `stopPrice` added
  - `orderReports`.items: property `trailingTime` added
  - `orderReports`.items: property `expiryReason` added
  - `orderReports`.items: property `pegOffsetValue` added
  - `orderReports`.items: property `preventedMatchId` added
  - `orderReports`.items: property `preventedQuantity` added
  - `orderReports`.items: property `workingFloor` added
  - `orderReports`.items: property `pegOffsetType` added
  - `orderReports`.items: property `peggedPrice` added
  - `orderReports`.items: property `strategyId` added
  - `orderReports`.items: property `icebergQty` added
  - `orderReports`.items: property `usedSor` added
  - `orderReports`.items: property `strategyType` added
  - `orderReports`.items: item property `pegPriceType` added
  - `orderReports`.items: item property `trailingDelta` added
  - `orderReports`.items: item property `stopPrice` added
  - `orderReports`.items: item property `trailingTime` added
  - `orderReports`.items: item property `expiryReason` added
  - `orderReports`.items: item property `pegOffsetValue` added
  - `orderReports`.items: item property `preventedMatchId` added
  - `orderReports`.items: item property `preventedQuantity` added
  - `orderReports`.items: item property `workingFloor` added
  - `orderReports`.items: item property `pegOffsetType` added
  - `orderReports`.items: item property `peggedPrice` added
  - `orderReports`.items: item property `strategyId` added
  - `orderReports`.items: item property `icebergQty` added
  - `orderReports`.items: item property `usedSor` added
  - `orderReports`.items: item property `strategyType` added

- Modified response for `orderListOtoco()` (`POST /api/v3/orderList/otoco`):
  - `orderReports`.items: property `trailingTime` added
  - `orderReports`.items: property `preventedMatchId` added
  - `orderReports`.items: property `pegPriceType` added
  - `orderReports`.items: property `strategyId` added
  - `orderReports`.items: property `workingFloor` added
  - `orderReports`.items: property `icebergQty` added
  - `orderReports`.items: property `pegOffsetValue` added
  - `orderReports`.items: property `strategyType` added
  - `orderReports`.items: property `trailingDelta` added
  - `orderReports`.items: property `peggedPrice` added
  - `orderReports`.items: property `preventedQuantity` added
  - `orderReports`.items: property `expiryReason` added
  - `orderReports`.items: property `usedSor` added
  - `orderReports`.items: property `pegOffsetType` added
  - `orderReports`.items: item property `trailingTime` added
  - `orderReports`.items: item property `preventedMatchId` added
  - `orderReports`.items: item property `pegPriceType` added
  - `orderReports`.items: item property `strategyId` added
  - `orderReports`.items: item property `workingFloor` added
  - `orderReports`.items: item property `icebergQty` added
  - `orderReports`.items: item property `pegOffsetValue` added
  - `orderReports`.items: item property `strategyType` added
  - `orderReports`.items: item property `trailingDelta` added
  - `orderReports`.items: item property `peggedPrice` added
  - `orderReports`.items: item property `preventedQuantity` added
  - `orderReports`.items: item property `expiryReason` added
  - `orderReports`.items: item property `usedSor` added
  - `orderReports`.items: item property `pegOffsetType` added

- Modified response for `ticker()` (`GET /api/v3/ticker`):
  - oneOf modified

- Modified response for `ticker24hr()` (`GET /api/v3/ticker/24hr`):
  - oneOf modified

- Modified response for `tickerBookTicker()` (`GET /api/v3/ticker/bookTicker`):
  - oneOf modified

- Modified response for `tickerPrice()` (`GET /api/v3/ticker/price`):
  - oneOf modified

- Modified response for `tickerTradingDay()` (`GET /api/v3/ticker/tradingDay`):
  - oneOf modified

- Modified response for `uiKlines()` (`GET /api/v3/uiKlines`):
  - items.items: oneOf added 2 schema(s)
  - items.items: oneOf removed 2 schema(s)

- Marked `orderOco()` (`POST /api/v3/order/oco`) as deprecated.

#### WebSocket API

- Modified parameter `cancelRestrictions`:
  - enum removed: `NEW`, `PARTIALLY_FILLED`
  - affected methods:
    - `orderCancel()` (`order.cancel` method)
    - `orderCancelReplace()` (`order.cancelReplace` method)
- Modified parameter `newOrderRespType`:
  - enum removed: `MARKET`, `LIMIT`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
    - `orderListPlace()` (`orderList.place` method)
    - `orderListPlaceOco()` (`orderList.place.oco` method)
    - `orderListPlaceOpo()` (`orderList.place.opo` method)
    - `orderListPlaceOpoco()` (`orderList.place.opoco` method)
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
    - `sorOrderPlace()` (`sor.order.place` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Modified parameter `pegOffsetType`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
- Modified parameter `pegPriceType`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
- Modified parameter `selfTradePreventionMode`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
    - `orderListPlace()` (`orderList.place` method)
    - `orderListPlaceOco()` (`orderList.place.oco` method)
    - `orderListPlaceOpo()` (`orderList.place.opo` method)
    - `orderListPlaceOpoco()` (`orderList.place.opoco` method)
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
    - `sorOrderPlace()` (`sor.order.place` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Modified parameter `symbolStatus`:
  - enum removed: `END_OF_DAY`, `NON_REPRESENTABLE`
  - affected methods:
    - `depth()` (`depth` method)
    - `exchangeInfo()` (`exchangeInfo` method)
    - `executionRules()` (`executionRules` method)
    - `ticker()` (`ticker` method)
    - `ticker24hr()` (`ticker.24hr` method)
    - `tickerBook()` (`ticker.book` method)
    - `tickerPrice()` (`ticker.price` method)
    - `tickerTradingDay()` (`ticker.tradingDay` method)
- Modified parameter `symbolStatus`:
  - enum removed: `END_OF_DAY`, `NON_REPRESENTABLE`
  - affected methods:
    - `referencePriceCalculation()` (`referencePrice.calculation` method)
- Modified parameter `timeInForce`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
    - `sorOrderPlace()` (`sor.order.place` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Modified parameter `type`:
  - enum removed: `NON_REPRESENTABLE`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
- Modified parameter `type`:
  - enum removed: `STOP_LOSS`, `STOP_LOSS_LIMIT`, `TAKE_PROFIT`, `TAKE_PROFIT_LIMIT`, `LIMIT_MAKER`, `NON_REPRESENTABLE`
  - affected methods:
    - `sorOrderPlace()` (`sor.order.place` method)
    - `sorOrderTest()` (`sor.order.test` method)
- Modified parameter `windowSize`:
  - enum added: `7d`
  - affected methods:
    - `ticker()` (`ticker` method)
- Modified response for `allOrders()` (`allOrders` method):
  - `result`.items: property `trailingDelta` added
  - `result`.items: property `usedSor` added
  - `result`.items: property `pegOffsetValue` added
  - `result`.items: property `expiryReason` added
  - `result`.items: property `pegPriceType` added
  - `result`.items: property `strategyType` added
  - `result`.items: property `strategyId` added
  - `result`.items: property `trailingTime` added
  - `result`.items: property `pegOffsetType` added
  - `result`.items: property `peggedPrice` added
  - `result`.items: property `workingFloor` added
  - `result`.items: item property `trailingDelta` added
  - `result`.items: item property `usedSor` added
  - `result`.items: item property `pegOffsetValue` added
  - `result`.items: item property `expiryReason` added
  - `result`.items: item property `pegPriceType` added
  - `result`.items: item property `strategyType` added
  - `result`.items: item property `strategyId` added
  - `result`.items: item property `trailingTime` added
  - `result`.items: item property `pegOffsetType` added
  - `result`.items: item property `peggedPrice` added
  - `result`.items: item property `workingFloor` added

- Modified response for `depth()` (`depth` method):
  - `result`.`asks`.items: minItems `0` → `2`
  - `result`.`asks`.items: maxItems `null` → `2`
  - `result`.`bids`.items: minItems `0` → `2`
  - `result`.`bids`.items: maxItems `null` → `2`

- Modified response for `exchangeInfo()` (`exchangeInfo` method):
  - property `timezone` added
  - property `exchangeFilters` added
  - property `serverTime` added
  - property `sors` added
  - property `symbols` added
  - property `id` deleted
  - property `result` deleted
  - property `status` deleted

- Modified response for `klines()` (`klines` method):
  - `result`.items: minItems `0` → `12`
  - `result`.items: maxItems `null` → `12`
  - `result`.items.items: oneOf added 2 schema(s)
  - `result`.items.items: oneOf removed 2 schema(s)

- Modified response for `myFilters()` (`myFilters` method):
  - property `assetFilters` added
  - property `exchangeFilters` added
  - property `symbolFilters` added
  - property `id` deleted
  - property `result` deleted
  - property `status` deleted

- Modified response for `openOrdersCancelAll()` (`openOrders.cancelAll` method):
  - `result`.items: property `preventedMatchId` added
  - `result`.items: property `peggedPrice` added
  - `result`.items: property `preventedQuantity` added
  - `result`.items: property `pegPriceType` added
  - `result`.items: property `pegOffsetType` added
  - `result`.items: property `expiryReason` added
  - `result`.items: property `pegOffsetValue` added
  - `result`.items: property `workingFloor` added
  - `result`.items: property `usedSor` added
  - `result`.items.`orderReports`.items: property `strategyType` added
  - `result`.items.`orderReports`.items: property `preventedMatchId` added
  - `result`.items.`orderReports`.items: property `pegOffsetValue` added
  - `result`.items.`orderReports`.items: property `preventedQuantity` added
  - `result`.items.`orderReports`.items: property `expiryReason` added
  - `result`.items.`orderReports`.items: property `trailingDelta` added
  - `result`.items.`orderReports`.items: property `peggedPrice` added
  - `result`.items.`orderReports`.items: property `strategyId` added
  - `result`.items.`orderReports`.items: property `trailingTime` added
  - `result`.items.`orderReports`.items: property `usedSor` added
  - `result`.items.`orderReports`.items: property `workingFloor` added
  - `result`.items.`orderReports`.items: property `icebergQty` added
  - `result`.items.`orderReports`.items: property `pegOffsetType` added
  - `result`.items.`orderReports`.items: property `pegPriceType` added
  - `result`.items.`orderReports`.items: item property `strategyType` added
  - `result`.items.`orderReports`.items: item property `preventedMatchId` added
  - `result`.items.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.items.`orderReports`.items: item property `preventedQuantity` added
  - `result`.items.`orderReports`.items: item property `expiryReason` added
  - `result`.items.`orderReports`.items: item property `trailingDelta` added
  - `result`.items.`orderReports`.items: item property `peggedPrice` added
  - `result`.items.`orderReports`.items: item property `strategyId` added
  - `result`.items.`orderReports`.items: item property `trailingTime` added
  - `result`.items.`orderReports`.items: item property `usedSor` added
  - `result`.items.`orderReports`.items: item property `workingFloor` added
  - `result`.items.`orderReports`.items: item property `icebergQty` added
  - `result`.items.`orderReports`.items: item property `pegOffsetType` added
  - `result`.items.`orderReports`.items: item property `pegPriceType` added
  - `result`.items: item property `preventedMatchId` added
  - `result`.items: item property `peggedPrice` added
  - `result`.items: item property `preventedQuantity` added
  - `result`.items: item property `pegPriceType` added
  - `result`.items: item property `pegOffsetType` added
  - `result`.items: item property `expiryReason` added
  - `result`.items: item property `pegOffsetValue` added
  - `result`.items: item property `workingFloor` added
  - `result`.items: item property `usedSor` added
  - `result`.items.`orderReports`.items: property `strategyType` added
  - `result`.items.`orderReports`.items: property `preventedMatchId` added
  - `result`.items.`orderReports`.items: property `pegOffsetValue` added
  - `result`.items.`orderReports`.items: property `preventedQuantity` added
  - `result`.items.`orderReports`.items: property `expiryReason` added
  - `result`.items.`orderReports`.items: property `trailingDelta` added
  - `result`.items.`orderReports`.items: property `peggedPrice` added
  - `result`.items.`orderReports`.items: property `strategyId` added
  - `result`.items.`orderReports`.items: property `trailingTime` added
  - `result`.items.`orderReports`.items: property `usedSor` added
  - `result`.items.`orderReports`.items: property `workingFloor` added
  - `result`.items.`orderReports`.items: property `icebergQty` added
  - `result`.items.`orderReports`.items: property `pegOffsetType` added
  - `result`.items.`orderReports`.items: property `pegPriceType` added
  - `result`.items.`orderReports`.items: item property `strategyType` added
  - `result`.items.`orderReports`.items: item property `preventedMatchId` added
  - `result`.items.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.items.`orderReports`.items: item property `preventedQuantity` added
  - `result`.items.`orderReports`.items: item property `expiryReason` added
  - `result`.items.`orderReports`.items: item property `trailingDelta` added
  - `result`.items.`orderReports`.items: item property `peggedPrice` added
  - `result`.items.`orderReports`.items: item property `strategyId` added
  - `result`.items.`orderReports`.items: item property `trailingTime` added
  - `result`.items.`orderReports`.items: item property `usedSor` added
  - `result`.items.`orderReports`.items: item property `workingFloor` added
  - `result`.items.`orderReports`.items: item property `icebergQty` added
  - `result`.items.`orderReports`.items: item property `pegOffsetType` added
  - `result`.items.`orderReports`.items: item property `pegPriceType` added

- Modified response for `openOrdersStatus()` (`openOrders.status` method):
  - `result`.items: property `pegOffsetValue` added
  - `result`.items: property `strategyType` added
  - `result`.items: property `preventedQuantity` added
  - `result`.items: property `pegOffsetType` added
  - `result`.items: property `peggedPrice` added
  - `result`.items: property `trailingTime` added
  - `result`.items: property `workingFloor` added
  - `result`.items: property `strategyId` added
  - `result`.items: property `pegPriceType` added
  - `result`.items: property `expiryReason` added
  - `result`.items: property `preventedMatchId` added
  - `result`.items: property `trailingDelta` added
  - `result`.items: property `usedSor` added
  - `result`.items: item property `pegOffsetValue` added
  - `result`.items: item property `strategyType` added
  - `result`.items: item property `preventedQuantity` added
  - `result`.items: item property `pegOffsetType` added
  - `result`.items: item property `peggedPrice` added
  - `result`.items: item property `trailingTime` added
  - `result`.items: item property `workingFloor` added
  - `result`.items: item property `strategyId` added
  - `result`.items: item property `pegPriceType` added
  - `result`.items: item property `expiryReason` added
  - `result`.items: item property `preventedMatchId` added
  - `result`.items: item property `trailingDelta` added
  - `result`.items: item property `usedSor` added

- Modified response for `orderAmendKeepPriority()` (`order.amend.keepPriority` method):
  - `result`.`amendedOrder`: property `usedSor` added
  - `result`.`amendedOrder`: property `icebergQty` added
  - `result`.`amendedOrder`: property `workingFloor` added
  - `result`.`amendedOrder`: property `trailingTime` added
  - `result`.`amendedOrder`: property `pegOffsetValue` added
  - `result`.`amendedOrder`: property `pegPriceType` added
  - `result`.`amendedOrder`: property `stopPrice` added
  - `result`.`amendedOrder`: property `strategyType` added
  - `result`.`amendedOrder`: property `trailingDelta` added
  - `result`.`amendedOrder`: property `expiryReason` added
  - `result`.`amendedOrder`: property `preventedMatchId` added
  - `result`.`amendedOrder`: property `strategyId` added
  - `result`.`amendedOrder`: property `pegOffsetType` added
  - `result`.`amendedOrder`: property `preventedQuantity` added
  - `result`.`amendedOrder`: property `peggedPrice` added

- Modified response for `orderCancel()` (`order.cancel` method):
  - `result`: property `expiryReason` added
  - `result`: property `pegOffsetType` added
  - `result`: property `preventedMatchId` added
  - `result`: property `pegOffsetValue` added
  - `result`: property `pegPriceType` added
  - `result`: property `usedSor` added
  - `result`: property `preventedQuantity` added
  - `result`: property `trailingTime` added
  - `result`: property `peggedPrice` added
  - `result`: property `workingFloor` added
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `peggedPrice` added

- Modified response for `orderCancelReplace()` (`order.cancelReplace` method):
  - `result`.`cancelResponse`: property `strategyId` added
  - `result`.`cancelResponse`: property `usedSor` added
  - `result`.`cancelResponse`: property `stopPrice` added
  - `result`.`cancelResponse`: property `icebergQty` added
  - `result`.`cancelResponse`: property `pegOffsetValue` added
  - `result`.`cancelResponse`: property `preventedMatchId` added
  - `result`.`cancelResponse`: property `trailingDelta` added
  - `result`.`cancelResponse`: property `strategyType` added
  - `result`.`cancelResponse`: property `preventedQuantity` added
  - `result`.`cancelResponse`: property `workingFloor` added
  - `result`.`cancelResponse`: property `pegPriceType` added
  - `result`.`cancelResponse`: property `peggedPrice` added
  - `result`.`cancelResponse`: property `trailingTime` added
  - `result`.`cancelResponse`: property `expiryReason` added
  - `result`.`cancelResponse`: property `pegOffsetType` added
  - `result`.`newOrderResponse`: property `preventedMatchId` added
  - `result`.`newOrderResponse`: property `pegOffsetValue` added
  - `result`.`newOrderResponse`: property `stopPrice` added
  - `result`.`newOrderResponse`: property `preventedQuantity` added
  - `result`.`newOrderResponse`: property `strategyType` added
  - `result`.`newOrderResponse`: property `workingFloor` added
  - `result`.`newOrderResponse`: property `usedSor` added
  - `result`.`newOrderResponse`: property `strategyId` added
  - `result`.`newOrderResponse`: property `expiryReason` added
  - `result`.`newOrderResponse`: property `pegPriceType` added
  - `result`.`newOrderResponse`: property `pegOffsetType` added
  - `result`.`newOrderResponse`: property `peggedPrice` added
  - `result`.`newOrderResponse`: property `trailingDelta` added
  - `result`.`newOrderResponse`: property `icebergQty` added
  - `result`.`newOrderResponse`: property `trailingTime` added

- Modified response for `orderPlace()` (`order.place` method):
  - `result`: property `icebergQty` added
  - `result`: property `pegOffsetType` added
  - `result`: property `stopPrice` added
  - `result`: property `expiryReason` added
  - `result`: property `pegOffsetValue` added
  - `result`: property `preventedMatchId` added
  - `result`: property `workingFloor` added
  - `result`: property `pegPriceType` added
  - `result`: property `trailingTime` added
  - `result`: property `peggedPrice` added
  - `result`: property `strategyType` added
  - `result`: property `strategyId` added
  - `result`: property `usedSor` added
  - `result`: property `preventedQuantity` added
  - `result`: property `trailingDelta` added

- Modified response for `orderStatus()` (`order.status` method):
  - `result`: property `pegOffsetValue` added
  - `result`: property `expiryReason` added
  - `result`: property `peggedPrice` added
  - `result`: property `pegOffsetType` added
  - `result`: property `workingFloor` added
  - `result`: property `pegPriceType` added
  - `result`: property `usedSor` added

- Modified response for `orderListCancel()` (`orderList.cancel` method):
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `peggedPrice` added

- Modified response for `orderListPlace()` (`orderList.place` method):
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `peggedPrice` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `trailingDelta` added

- Modified response for `orderListPlaceOco()` (`orderList.place.oco` method):
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `peggedPrice` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `workingFloor` added

- Modified response for `orderListPlaceOpo()` (`orderList.place.opo` method):
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `stopPrice` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `peggedPrice` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `stopPrice` added

- Modified response for `orderListPlaceOpoco()` (`orderList.place.opoco` method):
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `peggedPrice` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `strategyType` added

- Modified response for `orderListPlaceOto()` (`orderList.place.oto` method):
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `stopPrice` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `trailingTime` added
  - `result`.`orderReports`.items: item property `peggedPrice` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `stopPrice` added

- Modified response for `orderListPlaceOtoco()` (`orderList.place.otoco` method):
  - `result`.`orderReports`.items: property `expiryReason` added
  - `result`.`orderReports`.items: property `peggedPrice` added
  - `result`.`orderReports`.items: property `preventedMatchId` added
  - `result`.`orderReports`.items: property `strategyType` added
  - `result`.`orderReports`.items: property `usedSor` added
  - `result`.`orderReports`.items: property `trailingDelta` added
  - `result`.`orderReports`.items: property `pegOffsetValue` added
  - `result`.`orderReports`.items: property `pegOffsetType` added
  - `result`.`orderReports`.items: property `workingFloor` added
  - `result`.`orderReports`.items: property `preventedQuantity` added
  - `result`.`orderReports`.items: property `strategyId` added
  - `result`.`orderReports`.items: property `pegPriceType` added
  - `result`.`orderReports`.items: property `icebergQty` added
  - `result`.`orderReports`.items: property `trailingTime` added
  - `result`.`orderReports`.items: item property `expiryReason` added
  - `result`.`orderReports`.items: item property `peggedPrice` added
  - `result`.`orderReports`.items: item property `preventedMatchId` added
  - `result`.`orderReports`.items: item property `strategyType` added
  - `result`.`orderReports`.items: item property `usedSor` added
  - `result`.`orderReports`.items: item property `trailingDelta` added
  - `result`.`orderReports`.items: item property `pegOffsetValue` added
  - `result`.`orderReports`.items: item property `pegOffsetType` added
  - `result`.`orderReports`.items: item property `workingFloor` added
  - `result`.`orderReports`.items: item property `preventedQuantity` added
  - `result`.`orderReports`.items: item property `strategyId` added
  - `result`.`orderReports`.items: item property `pegPriceType` added
  - `result`.`orderReports`.items: item property `icebergQty` added
  - `result`.`orderReports`.items: item property `trailingTime` added

- Modified response for `referencePrice()` (`referencePrice` method):
  - property `rateLimits` added

- Modified response for `referencePriceCalculation()` (`referencePrice.calculation` method):
  - property `rateLimits` added

- Modified response for `sorOrderPlace()` (`sor.order.place` method):
  - `result`.items: property `preventedMatchId` added
  - `result`.items: property `peggedPrice` added
  - `result`.items: property `pegOffsetType` added
  - `result`.items: property `expiryReason` added
  - `result`.items: property `pegOffsetValue` added
  - `result`.items: property `strategyId` added
  - `result`.items: property `trailingTime` added
  - `result`.items: property `icebergQty` added
  - `result`.items: property `stopPrice` added
  - `result`.items: property `strategyType` added
  - `result`.items: property `preventedQuantity` added
  - `result`.items: property `trailingDelta` added
  - `result`.items: property `pegPriceType` added
  - `result`.items: item property `preventedMatchId` added
  - `result`.items: item property `peggedPrice` added
  - `result`.items: item property `pegOffsetType` added
  - `result`.items: item property `expiryReason` added
  - `result`.items: item property `pegOffsetValue` added
  - `result`.items: item property `strategyId` added
  - `result`.items: item property `trailingTime` added
  - `result`.items: item property `icebergQty` added
  - `result`.items: item property `stopPrice` added
  - `result`.items: item property `strategyType` added
  - `result`.items: item property `preventedQuantity` added
  - `result`.items: item property `trailingDelta` added
  - `result`.items: item property `pegPriceType` added

- Modified response for `ticker()` (`ticker` method):
  - oneOf modified

- Modified response for `ticker24hr()` (`ticker.24hr` method):
  - oneOf modified

- Modified response for `tickerBook()` (`ticker.book` method):
  - oneOf modified

- Modified response for `tickerPrice()` (`ticker.price` method):
  - oneOf modified

- Modified response for `uiKlines()` (`uiKlines` method):
  - `result`.items: minItems `0` → `12`
  - `result`.items: maxItems `null` → `12`
  - `result`.items.items: oneOf added 2 schema(s)
  - `result`.items.items: oneOf removed 2 schema(s)

- Marked `orderListPlace()` (`orderList.place` method) as deprecated.

#### WebSocket Streams

- Modified parameter `updateSpeed`:
  - enum added: `100ms`
  - affected methods:
    - `partialBookDepth()` (`<symbol>@depth<levels>@<updateSpeed>` stream)
    - `diffBookDepth()` (`<symbol>@depth@<updateSpeed>` stream)
- Modified response for `partialBookDepth()` (`<symbol>@depth<levels>@<updateSpeed>` stream):
  - `asks`.items: minItems `0` → `2`
  - `asks`.items: maxItems `null` → `2`
  - `bids`.items: minItems `0` → `2`
  - `bids`.items: maxItems `null` → `2`

- Modified response for `diffBookDepth()` (`<symbol>@depth@<updateSpeed>` stream):
  - `a`.items: minItems `0` → `2`
  - `a`.items: maxItems `null` → `2`
  - `b`.items: minItems `0` → `2`
  - `b`.items: maxItems `null` → `2`

## 31.0.3 - 2026-06-18

### Changed (2)

- Update `@binance/common` library to version `2.4.1`.
- Resolve security vulnerabilities.

## 31.0.2 - 2026-06-02

### Changed (1)

- Update `@binance/common` library to version `2.4.0`.

## 31.0.1 - 2026-05-21

### Changed (2)

- Update `@binance/common` library to version `2.3.14`.
- Resolve security vulnerabilities on `ws`.

## 31.0.0 - 2026-05-12

### Added (1)

#### WebSocket Streams

- `blockTrade()` (`<symbol>@blockTrade` stream)

## 30.0.1 - 2026-05-07

### Changed (1)

- Resolve security vulnerabilities on `axios`.

## 30.0.0 - 2026-05-06

### Added (2)

#### REST API

- `historicalBlockTrades()` (`GET /api/v3/historicalBlockTrades`)

#### WebSocket API

- `blockTradesHistorical()` (`blockTrades.historical` method)

### Changed (5)

- Update `@binance/common` library to version `2.3.13`.
- Resolve security vulnerabilities on `axios`.

#### REST API

- Modified parameter `selfTradePreventionMode`:
  - enum added: `TRANSFER`
  - affected methods:
    - `newOrder()` (`POST /api/v3/order`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderOco()` (`POST /api/v3/order/oco`)
    - `orderTest()` (`POST /api/v3/order/test`)
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
    - `orderListOpo()` (`POST /api/v3/orderList/opo`)
    - `orderListOpoco()` (`POST /api/v3/orderList/opoco`)
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
    - `sorOrder()` (`POST /api/v3/sor/order`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)
- Marked `orderOco()` (`POST /api/v3/order/oco`) as deprecated.

#### WebSocket API

- Modified parameter `selfTradePreventionMode`:
  - enum added: `TRANSFER`
  - affected methods:
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderTest()` (`order.test` method)
    - `orderListPlace()` (`orderList.place` method)
    - `orderListPlaceOco()` (`orderList.place.oco` method)
    - `orderListPlaceOpo()` (`orderList.place.opo` method)
    - `orderListPlaceOpoco()` (`orderList.place.opoco` method)
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
    - `sorOrderPlace()` (`sor.order.place` method)
    - `sorOrderTest()` (`sor.order.test` method)

## 29.0.0 - 2026-04-20

### Changed (1)

#### WebSocket API

- Modified response for `referencePrice()` (`referencePrice` method):
  - `result`: property `code` added
  - `result`: property `msg` added

## 28.0.6 - 2026-04-15

### Changed (2)

- Update `@binance/common` library to version `2.3.12`.
- Resolve security vulnerabilities on `axios`.

## 28.0.5 - 2026-04-07

### Changed (1)

- Update `@binance/common` library to version `2.3.11`.

## 28.0.4 - 2026-03-30

### Changed (2)

- Update `@binance/common` library to version `2.3.10`.
- Resolve security vulnerabilities on `handlebars` (bump version from `4.7.8` to `4.7.9`) and `brace-expansion` (bump version from `1.1.12` to `1.1.13`).

## 28.0.3 - 2026-03-26

### Changed (2)

- Update `@binance/common` library to version `2.3.8`.
- Resolve security vulnerabilities on `picomatch` (bump version from `2.3.1` to `2.3.2`).

## 28.0.2 - 2026-03-24

### Changed (1)

- Update `@binance/common` library to version `2.3.7`.

## 28.0.1 - 2026-03-19

### Changed (2)

- Update `@binance/common` library to version `2.3.6`.
- Resolve security vulnerabilities on `flatted`.

## 28.0.0 - 2026-03-13

### Added (7)

#### REST API

- `executionRules()` (`GET /api/v3/executionRules`)
- `referencePrice()` (`GET /api/v3/referencePrice`)
- `referencePriceCalculation()` (`GET /api/v3/referencePrice/calculation`)

#### WebSocket API

- `executionRules()` (`executionRules` method)
- `referencePrice()` (`referencePrice` method)
- `referencePriceCalculation()` (`referencePrice.calculation` method)

#### WebSocket Streams

- `referencePrice()` (`<symbol>@referencePrice` stream)

### Changed (1)

- Update `@binance/common` library to version `2.3.5`.

## 27.0.3 - 2026-03-02

### Changed (2)

- Update `@binance/common` library to version `2.3.4`.
- Resolve security vulnerabilities on `minimatch`.

## 27.0.2 - 2026-02-24

### Changed (2)

- Update `@binance/common` library to version `2.3.3`.
- Resolve security vulnerabilities on `axios`.

## 27.0.1 - 2026-02-12

### Changed (1)

- Update `@binance/common` library to version `2.3.2`.

## 27.0.0 - 2026-01-27

### Changed (1)

#### WebSocket API

- Added parameter `recvWindow`
  - affected methods:
    - `userDataStreamSubscribeSignature()` (`userDataStream.subscribe.signature` method)

## 26.0.2 - 2026-01-20

### Changed (1)

- Update `@binance/common` library to version `2.3.1`.

## 26.0.1 - 2026-01-13

### Changed (1)

- Update `@binance/common` library to version `2.2.0`.

## 26.0.0 - 2025-12-19

### Added (1)

#### WebSocket API

- `orderAmendKeepPriority()` (`order.amend.keepPriority` method)

### Changed (1)

- Update `@binance/common` library to version `2.1.1`.

## 25.0.0 - 2025-12-16

### Added (4)

#### REST API

- `orderListOpo()` (`POST /api/v3/orderList/opo`)
- `orderListOpoco()` (`POST /api/v3/orderList/opoco`)

#### WebSocket API

- `orderListPlaceOpo()` (`orderList.place.opo` method)
- `orderListPlaceOpoco()` (`orderList.place.opoco` method)

### Changed (4)

- Update `@binance/common` library to version `2.1.0`.
- Support request body params on `sendRequest` and `sendSignedRequest` functions.

#### REST API

- Modified response for `exchangeInfo()` (`GET /api/v3/exchangeInfo`):
  - `symbols`.items: property `opoAllowed` added
  - `symbols`.items: item property `opoAllowed` added

#### WebSocket API

- Modified response for `exchangeInfo()` (`exchangeInfo` method):
  - `result`.`symbols`.items: property `opoAllowed` added
  - `result`.`symbols`.items: item property `opoAllowed` added

### Removed (2)

#### WebSocket API

- `/order.amend.keepPriority()` (`order.amend.keepPriority` method)

#### WebSocket Streams

- `/!ticker@arr()` (`!ticker@arr` stream)

## 24.0.1 - 2025-11-27

### Changed (1)

- Fixed bug with Configuration exported type.

## 24.0.0 - 2025-11-18

### Changed (3)

- Update `@binance/common` library to version `2.0.1`.
- Replaced deprecated `tsup` with `tsdown` for bundling.

#### WebSocket Streams

- Marked `allTicker()` (`!ticker@arr` stream) as deprecated.

## 23.0.1 - 2025-11-06

### Changed (1)

- Accept `BigInt` as input for all parameters that expect long numbers.

## 23.0.0 - 2025-11-06

### Changed (2)

- Convert long numbers to `BigInt` in all API responses when precision is high.
- Update `@binance/common` library to version `2.0.0`.

## 22.0.0 - 2025-10-30

### Changed (2)

#### REST API

- Added parameter `symbolStatus`
  - affected methods:
    - `depth()` (`GET /api/v3/depth`)
    - `ticker()` (`GET /api/v3/ticker`)
    - `ticker24hr()` (`GET /api/v3/ticker/24hr`)
    - `tickerBookTicker()` (`GET /api/v3/ticker/bookTicker`)
    - `tickerPrice()` (`GET /api/v3/ticker/price`)
    - `tickerTradingDay()` (`GET /api/v3/ticker/tradingDay`)

#### WebSocket API

- Added parameter `symbolStatus`
  - affected methods:
    - `depth()` (`depth` method)
    - `ticker()` (`ticker` method)
    - `ticker24hr()` (`ticker.24hr` method)
    - `tickerBook()` (`ticker.book` method)
    - `tickerPrice()` (`ticker.price` method)
    - `tickerTradingDay()` (`ticker.tradingDay` method)

## 21.0.0 - 2025-10-27

### Changed (2)

#### REST API

- Marked `orderOco` (`POST /api/v3/order/oco`) as deprecated.

#### WebSocket API

- Marked `orderListPlace` (`orderList.place` method) as deprecated.

### Removed (6)

#### REST API

- `deleteUserDataStream()` (`DELETE /api/v3/userDataStream`)
- `newUserDataStream()` (`POST /api/v3/userDataStream`)
- `putUserDataStream()` (`PUT /api/v3/userDataStream`)

#### WebSocket API

- `/userDataStream.ping()` (`userDataStream.ping` method)
- `/userDataStream.start()` (`userDataStream.start` method)
- `/userDataStream.stop()` (`userDataStream.stop` method)

## 20.0.1 - 2025-10-21

### Changed (1)

- Update `@binance/common` library to version `1.2.6`.

## 20.0.0 - 2025-10-09

### Changed (4)

#### REST API

- Modified response for `exchangeInfo()` (`GET /api/v3/exchangeInfo`):
  - modified `exchangeFilters` and `symbols`.`filters`

- Modified response for `myFilters()` (`GET /api/v3/myFilters`):
  - modified `assetFilters`, `exchangeFilters` and `symbolFilters`

#### WebSocket API

- Modified response for `exchangeInfo()` (`exchangeInfo` method):
  - modified `result`.`exchangeFilters` and `result`.`symbols`.`filters`

- Modified response for `myFilters()` (`myFilters` method):
  - modified `result`.`assetFilters`, `result`.`exchangeFilters` and `result`.`symbolFilters`

## 19.0.0 - 2025-10-02

### Added (2)

#### REST API

- `myFilters()` (`GET /api/v3/myFilters`)

#### WebSocket API

- `myFilters()` (`myFilters` method)

### Changed (4)

#### REST API

- Modified parameter `aboveTimeInForce`:
  - type `number` → `string`
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `orderListOco()` (`POST /api/v3/orderList/oco`)

- Modified response for `exchangeInfo()` (`GET /api/v3/exchangeInfo`):
  - `exchangeFilters`: item property `asset` added
  - `exchangeFilters`.`limit`: type `integer` → `string`
  - `symbols`.`filters`: item property `asset` added
  - `symbols`.`filters`.`limit`: type `integer` → `string`

#### WebSocket API

- Modified parameter `aboveTimeInForce`:
  - type `number` → `string`
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)

- Modified response for `exchangeInfo()` (`exchangeInfo` method):
  - `result`.`exchangeFilters`: item property `asset` added
  - `result`.`exchangeFilters`.`limit`: type `integer` → `string`
  - `result`.`symbols`.`filters`: item property `asset` added
  - `result`.`symbols`.`filters`.`limit`: type `integer` → `string`

## 18.0.0 - 2025-09-24

### Changed (2)

#### WebSocket API

- Modified parameter `belowTimeInForce`:
  - enum removed: `belowType`, `STOP_LOSS_LIMIT`, `TAKE_PROFIT_LIMIT`
  - enum added: `GTC`, `IOC`, `FOK`
  - affected methods:
    - `orderListPlaceOco()` (`orderList.place.oco` method)

## 17.0.0 - 2025-09-19

### Changed (2)

#### REST API

- Modified parameter `recvWindow`:
  - type `integer` → `number`
  - format `int64` → `float`
  - affected methods:
    - `getAccount()` (`GET /api/v3/account`)
    - `allOrderList()` (`GET /api/v3/allOrderList`)
    - `allOrders()` (`GET /api/v3/allOrders`)
    - `myAllocations()` (`GET /api/v3/myAllocations`)
    - `myPreventedMatches()` (`GET /api/v3/myPreventedMatches`)
    - `myTrades()` (`GET /api/v3/myTrades`)
    - `openOrderList()` (`GET /api/v3/openOrderList`)
    - `deleteOpenOrders()` (`DELETE /api/v3/openOrders`)
    - `getOpenOrders()` (`GET /api/v3/openOrders`)
    - `deleteOrder()` (`DELETE /api/v3/order`)
    - `getOrder()` (`GET /api/v3/order`)
    - `newOrder()` (`POST /api/v3/order`)
    - `orderAmendKeepPriority()` (`PUT /api/v3/order/amend/keepPriority`)
    - `orderAmendments()` (`GET /api/v3/order/amendments`)
    - `orderCancelReplace()` (`POST /api/v3/order/cancelReplace`)
    - `orderOco()` (`POST /api/v3/order/oco`)
    - `orderTest()` (`POST /api/v3/order/test`)
    - `deleteOrderList()` (`DELETE /api/v3/orderList`)
    - `getOrderList()` (`GET /api/v3/orderList`)
    - `orderListOco()` (`POST /api/v3/orderList/oco`)
    - `orderListOto()` (`POST /api/v3/orderList/oto`)
    - `orderListOtoco()` (`POST /api/v3/orderList/otoco`)
    - `rateLimitOrder()` (`GET /api/v3/rateLimit/order`)
    - `sorOrder()` (`POST /api/v3/sor/order`)
    - `sorOrderTest()` (`POST /api/v3/sor/order/test`)

#### WebSocket API

- Modified parameter `recvWindow`:
  - type `integer` → `number`
  - format `int64` → `float`
  - affected methods:
    - `accountRateLimitsOrders()` (`account.rateLimits.orders` method)
    - `accountStatus()` (`account.status` method)
    - `allOrderLists()` (`allOrderLists` method)
    - `allOrders()` (`allOrders` method)
    - `myAllocations()` (`myAllocations` method)
    - `myPreventedMatches()` (`myPreventedMatches` method)
    - `myTrades()` (`myTrades` method)
    - `openOrderListsStatus()` (`openOrderLists.status` method)
    - `openOrdersCancelAll()` (`openOrders.cancelAll` method)
    - `openOrdersStatus()` (`openOrders.status` method)
    - `orderAmendKeepPriority()` (`order.amend.keepPriority` method)
    - `orderAmendments()` (`order.amendments` method)
    - `orderCancel()` (`order.cancel` method)
    - `orderCancelReplace()` (`order.cancelReplace` method)
    - `orderPlace()` (`order.place` method)
    - `orderStatus()` (`order.status` method)
    - `orderTest()` (`order.test` method)
    - `orderListCancel()` (`orderList.cancel` method)
    - `orderListPlace()` (`orderList.place` method)
    - `orderListPlaceOco()` (`orderList.place.oco` method)
    - `orderListPlaceOto()` (`orderList.place.oto` method)
    - `orderListPlaceOtoco()` (`orderList.place.otoco` method)
    - `orderListStatus()` (`orderList.status` method)
    - `sessionLogon()` (`session.logon` method)
    - `sorOrderPlace()` (`sor.order.place` method)
    - `sorOrderTest()` (`sor.order.test` method)

## 16.0.1 - 2025-09-12

### Changed (1)

- Update `@binance/common` library to version `1.2.5`.

## 16.0.0 - 2025-08-20

### Changed (2)

#### WebSocket API

- Modified response for `userDataStreamSubscribe()` method (`POST /userDataStream.subscribe`):
  - `result`: property `subscriptionId` added

- Modified response for `userDataStreamUnsubscribe()` method (`POST /userDataStream.unsubscribe`):
  - `result`: property `subscriptionId` deleted

## 15.0.0 - 2025-08-19

### Changed (2)

#### WebSocket API

- Modified response for `userDataStreamUnsubscribe()` method (`POST /userDataStream.unsubscribe`):
  - `result`: property `subscriptionId` added
- Fixed bug with `userDataStreamSubscribeSignature()` being unsigned.

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
