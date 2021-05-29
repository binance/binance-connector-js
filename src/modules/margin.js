const { validateParameter } = require('../helpers/validation')

/**
 * API margin endpoints
 * @module Margin
 * @param {*} superclass
 */
const Margin = superclass => class extends superclass {
  /**
   * Cross Margin Account Transfer (MARGIN)
   *
   * POST /sapi/v1/margin/transfer
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#cross-margin-account-transfer-margin}
   *
   * @param {string} asset
   * @param {number} amount
   * @param {number} type 1: transfer from main account to margin account 2: transfer from margin account to main account
   * @param {number} [recvWindow]
   */
  marginTransfer (asset, amount, type, options = {}) {
    validateParameter(asset, 'asset')
    validateParameter(amount, 'amount')
    validateParameter(type, 'type')

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/transfer',
      Object.assign(options, {
        asset: asset.toUpperCase(),
        amount,
        type
      })
    )
  }

  /**
   * Margin Account Borrow (MARGIN)
   * Apply for a loan.
   *
   * POST /sapi/v1/margin/load
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-borrow-margin}
   *
   * @param {string} asset
   * @param {number} amount
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {string} [symbol]
   * @param {number} [recvWindow]
   */
  marginBorrow (asset, amount, options = {}) {
    validateParameter(asset, 'asset')
    validateParameter(amount, 'amount')

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/loan',
      Object.assign(options, {
        asset: asset.toUpperCase(),
        amount
      })
    )
  }

  /**
   * Margin Account Repay(MARGIN)
   * Repay loan for margin account.
   *
   * POST /sapi/v1/margin/repay
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-repay-margin}
   *
   * @param {string} asset
   * @param {string} amount
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {string} [symbol]
   * @param {number} [recvWindow]
   */
  marginRepay (asset, amount, options = {}) {
    validateParameter(asset, 'asset')
    validateParameter(amount, 'amount')

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/repay',
      Object.assign(options, {
        asset: asset.toUpperCase(),
        amount
      })
    )
  }

  /**
   * Query Margin Asset (MARKET_DATA)
   *
   * GET /sapi/v1/margin/asset
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-asset-market_data}
   *
   * @param {string} asset
   */
  marginAsset (asset) {
    validateParameter(asset, 'asset')

    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/asset',
      { asset: asset.toUpperCase() }
    )
  }

  /**
   * Query Cross Margin Pair (MARKET_DATA)
   *
   * GET /sapi/v1/margin/pair
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-pair-market_data}
   *
   * @param {string} symbol
   */
  marginPair (symbol) {
    validateParameter(symbol, 'symbol')

    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/pair',
      { symbol: symbol.toUpperCase() }
    )
  }

  /**
   * Get All Margin Assets (MARKET_DATA)
   *
   * GET /sapi/v1/margin/allAssets
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-margin-assets-market_data}
   */
  marginAllAssets () {
    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/allAssets'
    )
  }

  /**
   * Get All Cross Margin Pairs (MARKET_DATA)
   *
   * GET /sapi/v1/margin/allPairs
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-all-cross-margin-pairs-market_data}
   */
  marginAllPairs () {
    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/allPairs'
    )
  }

  /**
   * Query Margin PriceIndex (MARKET_DATA)
   *
   * GET /sapi/v1/margin/priceIndex
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-priceindex-market_data}
   *
   * @param {string} symbol
   */
  marginPairIndex (symbol) {
    validateParameter(symbol, 'symbol')

    return this.publicRequest(
      'GET',
      '/sapi/v1/margin/priceIndex',
      { symbol: symbol.toUpperCase() }
    )
  }

  /**
   * Margin Account New Order (TRADE)
   *
   * POST /sapi/v1/margin/order
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-new-order-trade}
   *
   * @param {string} symbol
   * @param {string} side
   * @param {string} type
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {number} [quantity]
   * @param {number} [quoteOrderQty]
   * @param {number} [price]
   * @param {number} [stopPrice]
   * @param {string} [newClientOrderId]
   * @param {number} [icebergQty]
   * @param {string} [newOrderRespType]
   * @param {string} [sideEffectType]
   * @param {string} [timeInForce]
   * @param {number} [recvWindow]
   */
  newMarginOrder (symbol, side, type, options = {}) {
    validateParameter(symbol, 'symbol')
    validateParameter(side, 'side')
    validateParameter(type, 'type')

    return this.signRequest(
      'POST',
      '/sapi/v1/margin/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase()
      })
    )
  }

  /**
   * Margin Account Cancel Order (TRADE)
   *
   * DELETE /sapi/v1/margin/order
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-order-trade}
   *
   * @param {string} symbol
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {number} [orderId]
   * @param {string} [origClientOrderId]
   * @param {string} [newClientOrderId]
   * @param {number} [recvWindow]
   */
  cancelMarginOrder (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'DELETE',
      '/sapi/v1/margin/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Margin Account Cancel all Open Orders on a Symbol (TRADE)
   *
   * DELETE /sapi/v1/margin/openOrders
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#margin-account-cancel-all-open-orders-on-a-symbol-trade}
   *
   * @param {string} symbol
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {number} [recvWindow]
   */
  cancelAllOpenMarginOrder (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'DELETE',
      '/sapi/v1/margin/openOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Get Cross Margin Transfer History (USER_DATA)
   *
   * GET /sapi/v1/margin/transfer
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-cross-margin-transfer-history-user_data}
   *
   * @param {string} [asset]
   * @param {string} [type] - ROLL_IN, ROLL_OUT
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [current]
   * @param {number} [size]
   * @param {boolean} [archived]
   * @param {number} [recvWindow]
   */
  marginTransferHistory (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/transfer',
      options
    )
  }

  /**
   * Query Loan Record (USER_DATA)
   *
   * GET /sapi/v1/margin/loan
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-loan-record-user_data}
   *
   * @param {string} asset
   * @param {string} [isolatedSymbol]
   * @param {number} [txId]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [current]
   * @param {number} [size]
   * @param {boolean} [archived]
   * @param {number} [recvWindow]
   */
  marginLoanRecord (asset, options = {}) {
    validateParameter(asset, 'asset')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/loan',
      Object.assign(options, {
        asset: asset.toUpperCase()
      })
    )
  }

  /**
   * Query Repay Record (USER_DATA)
   *
   * GET /sapi/v1/margin/repay
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-repay-record-user_data}
   *
   * @param {string} asset
   * @param {string} [isolatedSymbol]
   * @param {number} [txId]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [current]
   * @param {number} [size]
   * @param {boolean} [archived]
   * @param {number} [recvWindow]
   */
  marginRepayRecord (asset, options = {}) {
    validateParameter(asset, 'asset')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/repay',
      Object.assign(options, {
        asset: asset.toUpperCase()
      })
    )
  }

  /**
   * Get Interest History (USER_DATA)
   *
   * GET /sapi/v1/margin/interestHistory
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-interest-history-user_data}
   *
   * @param {string} [asset]
   * @param {string} [isolatedSymbol]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [current]
   * @param {number} [size]
   * @param {boolean} [archived]
   * @param {number} [recvWindow]
   */
  marginInterestHistory (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/interestHistory',
      options
    )
  }

  /**
   * Get Force Liquidation Record (USER_DATA)
   *
   * GET /sapi/v1/margin/forceLiquidationRec
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#get-force-liquidation-record-user_data}
   *
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {string} [isolatedSymbol]
   * @param {number} [current]
   * @param {number} [size]
   * @param {number} [recvWindow]
   */
  marginForceLiquidationRecord (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/forceLiquidationRec',
      options
    )
  }

  /**
   * Query Cross Margin Account Details (USER_DATA)
   *
   * GET /sapi/v1/margin/account
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-cross-margin-account-details-user_data}
   *
   * @param {number} [recvWindow]
   */
  marginAccount (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/account',
      options
    )
  }

  /**
   * Query Margin Account's Order (USER_DATA)
   *
   * GET /sapi/v1/margin/order
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-order-user_data}
   *
   * @param {string} symbol
   * @param {string} [isolatedSymbol]
   * @param {number} [orderId]
   * @param {string} [origClientOrderId]
   * @param {number} [recvWindow]
   */
  marginOrder (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Query Margin Account's Open Order (USER_DATA)
   *
   * GET /sapi/v1/margin/openOrders
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-open-orders-user_data}
   *
   * @param {string} [symbol]
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {number} [recvWindow]
   */
  marginOpenOrders (options = {}) {
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/openOrders',
      options
    )
  }

  /**
   * Query Margin Account's All Order (USER_DATA)
   *
   * GET /sapi/v1/margin/allOrders
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-all-orders-user_data}
   *
   * @param {string} symbol
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {number} [orderId]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [limit]
   * @param {number} [recvWindow]
   */
  marginAllOrders (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/allOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Query Margin Account's Trade List (USER_DATA)
   *
   * GET /sapi/v1/margin/myTrades
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-account-39-s-trade-list-user_data}
   *
   * @param {string} symbol
   * @param {string} [isIsolated] - TRUE or FALSE
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [fromId]
   * @param {number} [limit]
   * @param {number} [recvWindow]
   */
  marginMyTrades (symbol, options = {}) {
    validateParameter(symbol, 'symbol')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/myTrades',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Query Max Borrow (USER_DATA)
   *
   * GET /sapi/v1/margin/maxBorrowable
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-borrow-user_data}
   *
   * @param {string} asset
   * @param {string} [isolatedSymbol]
   * @param {number} [recvWindow]
   */
  marginMaxBorrowable (asset, options = {}) {
    validateParameter(asset, 'asset')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/maxBorrowable',
      Object.assign(options, {
        asset: asset.toUpperCase()
      })
    )
  }

  /**
   * Query Max Transfer-Out Amount (USER_DATA)
   *
   * GET /sapi/v1/margin/maxTransferable
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-max-transfer-out-amount-user_data}
   *
   * @param {string} asset
   * @param {string} [isolatedSymbol]
   * @param {number} [recvWindow]
   */
  marginMaxTransferable (asset, options = {}) {
    validateParameter(asset, 'asset')

    return this.signRequest(
      'GET',
      '/sapi/v1/margin/maxTransferable',
      Object.assign(options, {
        asset: asset.toUpperCase()
      })
    )
  }

  /**
   * Query Margin Interest Rate History (USER_DATA)
   *
   * GET /sapi/v1/margin/interestRateHistory
   *
   * {@link https://binance-docs.github.io/apidocs/spot/en/#query-margin-interest-rate-history-user_data}
   *
   * @param {string} asset
   * @param {number} [vipLevel]
   * @param {number} [startTime]
   * @param {number} [endTime]
   * @param {number} [limit]
   * @param {number} [recvWindow]
   */
  marginInterestRateHistory (asset, options = {}) {
    validateParameter(asset, 'asset')
    return this.signRequest(
      'GET',
      '/sapi/v1/margin/interestRateHistory',
      Object.assign(options, { asset })
    )
  }
}

module.exports = Margin
