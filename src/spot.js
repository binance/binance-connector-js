const APIBase = require('./APIBase')
const {
  Blvt, Bswap, SubAccount, Market, Trade, Futures,
  Wallet, Margin, Mining, Savings, Stream, Websocket
} = require('./modules')
const { flowRight } = require('./helpers/utils')

class Spot extends flowRight(Blvt, Bswap, SubAccount, Websocket, Stream,
  Savings, Margin, Mining, Wallet, Market, Trade, Futures)(APIBase) {
  constructor (apiKey = '', apiSecret = '', options = {}) {
    options.baseURL = options.baseURL || 'https://api.binance.com'
    super({
      apiKey,
      apiSecret,
      ...options
    })
  }
}

module.exports = Spot
