const { validateParameter } = require('../helpers/validation')

/**
 * API trade endpoints
 * @module Trade
 * @param {*} superclass
 */
const Trade = superclass => class extends superclass {
  /**
   * Test New Order (TRADE)
   *
   * POST /api/v3/order/test
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#test-new-order-trade}
   *
   * @param {string} symbol
   * @param {string} side
   * @param {string} type
   * @param {string} [timeInForce]
   * @param {number} [quantity]
   * @param {number} [quoteOrderQty]
   * @param {number} [price]
   * @param {string} [newClientOrderId]
   * @param {number} [stopPrice]
   * @param {number} [icebergQty]
   * @param {string} [newOrderRespType]
   * @param {number} [recvWindow]
   */
  newOrderTest (symbol, side, type, options = {}) {
    validateParameter(symbol, 'symbol')
    validateParameter(side, 'side')
    validateParameter(type, 'type')

    return this.signRequest(
      'POST',
      '/api/v3/order/test',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase()
      })
    )
  }

  /**
   * New Order (TRADE)
   *
   * POST /api/v3/order
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#new-order-trade}
   *
   * @param {string} symbol
   * @param {string} side
   * @param {string} type
   * @param {string} [timeInForce]
   * @param {number} [quantity]
   * @param {number} [quoteOrderQty]
   * @param {number} [price]
   * @param {string} [newClientOrderId]
   * @param {number} [stopPrice]
   * @param {number} [icebergQty]
   * @param {string} [newOrderRespType]
   * @param {number} [recvWindow]
   */
  newOrder (symbol, side, type, options = {}) {
    validateParameter(symbol, 'symbol')
    validateParameter(side, 'side')
    validateParameter(type, 'type')

    return this.signRequest(
      'POST',
      '/api/v3/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase()
      })
    )
  }

  /**
   * Cancel Order (TRADE)
   *
   * DELETE /api/v3/order
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-order-trade}
   *
   * @param {string} symbol
   * @param {number} [orderId]
   * @param {string} [origClientOrderId]
   * @param {string} [newClientOrderId]
   * @param {number} [recvWindow]
   */
  cancelOrder (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'DELETE',
      '/api/v3/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Cancel all Open Orders on a Symbol (TRADE)
   *
   * DELETE /api/v3/openOrders
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-all-open-orders-on-a-symbol-trade}
   * @param {string} symbol
   * @param {number} [recvWindow]
   */
  cancelOpenOrders (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'DELETE',
      '/api/v3/openOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Query Order (USER_DATA)
   *
   * GET /api/v3/order
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-order-user_data}
   *
   * @param {string} symbol
   * @param {number} [orderId]
   * @param {string} [origClientOrderId]
   * @param {number} [recvWindow]
   */
  getOrder (symbol, options = {}) {
    validateParameter(symbol, 'symbol')
    return this.signRequest(
      'GET',
      '/api/v3/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Current Open Orders (USER_DATA)
   *
   * GET /api/v3/openOrders
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#current-open-orders-user_data}
   *
   * @param {string} symbol
   * @param {number} [recvWindow]
   */
  openOrders (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v3/openOrders',
      options
    )
  }

  /**
   * All Orders (USER_DATA)
   *
   * GET /api/v3/allOrders
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#all-orders-user_data}
   *
   * @param {string} symbol
   * @param {number} [orderId]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [limit]
   * @param {string} [recvWindow]
   */
  allOrders (symbol, options = {}) {
    validateParameter(symbol, 'symbol')
    return this.signRequest(
      'GET',
      '/api/v3/allOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * New OCO (TRADE)
   *
   * POST /api/v3/order/oco
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#new-oco-trade}
   *
   * @param {string} symbol
   * @param {string} side
   * @param {number} quantity
   * @param {number} price
   * @param {number} stopPrice
   * @param {string} [listClientOrderId]
   * @param {string} [limitClientOrderId]
   * @param {number} [limitIcebergQty]
   * @param {string} [stopClientOrderId]
   * @param {number} [stopLimitPrice]
   * @param {number} [stopIcebergQty]
   * @param {string} [stopLimitTimeInForce]
   * @param {string} [newOrderRespType]
   * @param {string} [recvWindow]
   */
  newOCOOrder (symbol, side, quantity, price, stopPrice, options = {}) {
    validateParameter(symbol, 'symbol')
    validateParameter(side, 'side')
    validateParameter(quantity, 'quantity')
    validateParameter(price, 'price')
    validateParameter(stopPrice, 'stopPrice')

    return this.signRequest(
      'POST',
      '/api/v3/order/oco',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        quantity,
        price,
        stopPrice
      })
    )
  }

  /**
   * Cancel OCO (TRADE)
   *
   * DELETE /api/v3/orderList
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#cancel-oco-trade}
   *
   * @param {string} symbol
   * @param {number} [orderListId]
   * @param {string} [listClientOrderId]
   * @param {string} [newClientOrderId]
   * @param {number} [recvWindow]
   */
  cancelOCOOrder (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'DELETE',
      '/api/v3/orderList',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Query OCO (USER_DATA)
   *
   * GET /api/v3/orderList
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-oco-user_data}
   *
   * @param {number} [orderListId]
   * @param {string} [origClientOrderId]
   * @param {number} [recvWindow]
   */
  getOCOOrder (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v3/orderList',
      options
    )
  }

  /**
   * Query all OCO (USER_DATA)
   *
   * GET /api/v3/allOrderList
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-all-oco-user_data}
   *
   * @param {number} [fromId]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [limit]
   * @param {number} [recvWindow]
   */
  getOCOOrders (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v3/allOrderList',
      options
    )
  }

  /**
   * Query Open OCO (USER_DATA)
   *
   * GET /api/v3/openOrderList
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-open-oco-user_data}
   *
   * @param {number} [recvWindow]
   */
  getOpenOCOOrders (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v3/openOrderList',
      options
    )
  }

  /**
   * Account Information (USER_DATA)
   *
   * GET /api/v3/account
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#account-information-user_data}
   *
   * @param {number} [recvWindow]
   */
  account (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v3/account',
      options
    )
  }

  /**
   * Account Trade List (USER_DATA)
   *
   * GET /api/v3/myTrades
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#account-trade-list-user_data}
   *
   * @param {string} symbol
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [fromId]
   * @param {number} [limit]
   * @param {number} [recvWindow]
   */
  myTrades (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'GET',
      '/api/v3/myTrades',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }
}

module.exports = Trade
