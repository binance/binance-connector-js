/* global describe, it, expect, */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, responseMockData, SpotClient } = require('../../testUtils/testSetup')

const {
  queryString,
  price,
  newClientOrderId,
  symbol,
  side,
  type,
  quantity
} = require('../../testUtils/mockData')

describe('#newMarginOrder', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        SpotClient.newMarginOrder('', side, type)
      }).toThrow(MissingParameterError)
    })
    it('missing side', () => {
      expect(() => {
        SpotClient.newMarginOrder(symbol, '', type)
      }).toThrow(MissingParameterError)
    })
    it('missing type', () => {
      expect(() => {
        SpotClient.newMarginOrder(symbol, side, '')
      }).toThrow(MissingParameterError)
    })
  })
  it('should return new margin order', () => {
    const parameters = {
      quantity,
      price,
      newClientOrderId
    }
    nockPostMock(`/sapi/v1/margin/order?${queryString({ symbol, side, type, ...parameters })}`)(responseMockData)

    return SpotClient.newMarginOrder(symbol, side, type, parameters).then(response => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(responseMockData)
    })
  })
})
