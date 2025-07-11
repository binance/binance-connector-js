/**
 * Binance Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Options REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { jest, expect, beforeEach, describe, it } from '@jest/globals';
import { ConfigurationRestAPI, type RestApiResponse } from '@binance/common';

import { MarketMakerBlockTradeApi, NewBlockTradeOrderSideEnum } from '../../../src/rest-api';
import {
    AcceptBlockTradeOrderRequest,
    AccountBlockTradeListRequest,
    CancelBlockTradeOrderRequest,
    ExtendBlockTradeOrderRequest,
    NewBlockTradeOrderRequest,
    QueryBlockTradeDetailsRequest,
    QueryBlockTradeOrderRequest,
} from '../../../src/rest-api';
import type {
    AcceptBlockTradeOrderResponse,
    AccountBlockTradeListResponse,
    ExtendBlockTradeOrderResponse,
    NewBlockTradeOrderResponse,
    QueryBlockTradeDetailsResponse,
    QueryBlockTradeOrderResponse,
} from '../../../src/rest-api/types';

describe('MarketMakerBlockTradeApi', () => {
    let client: MarketMakerBlockTradeApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new MarketMakerBlockTradeApi(config);
    });

    describe('acceptBlockTradeOrder()', () => {
        it('should execute acceptBlockTradeOrder() successfully with required parameters only', async () => {
            const params: AcceptBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            mockResponse = {
                blockTradeSettlementKey: '7d046e6e-a429-4335-ab9d-6a681febcde5',
                expireTime: 1730172115801,
                liquidity: 'MAKER',
                status: 'ACCEPTED',
                createTime: 1730170315803,
                legs: [{ symbol: 'BNB-241101-700-C', side: 'SELL', quantity: '1.2', price: '2.8' }],
            };

            const spy = jest.spyOn(client, 'acceptBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AcceptBlockTradeOrderResponse>)
            );
            const response = await client.acceptBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute acceptBlockTradeOrder() successfully with optional parameters', async () => {
            const params: AcceptBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
                recvWindow: 5000,
            };

            mockResponse = {
                blockTradeSettlementKey: '7d046e6e-a429-4335-ab9d-6a681febcde5',
                expireTime: 1730172115801,
                liquidity: 'MAKER',
                status: 'ACCEPTED',
                createTime: 1730170315803,
                legs: [{ symbol: 'BNB-241101-700-C', side: 'SELL', quantity: '1.2', price: '2.8' }],
            };

            const spy = jest.spyOn(client, 'acceptBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AcceptBlockTradeOrderResponse>)
            );
            const response = await client.acceptBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when blockOrderMatchingKey is missing', async () => {
            const _params: AcceptBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.blockOrderMatchingKey;

            await expect(client.acceptBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter blockOrderMatchingKey was null or undefined when calling acceptBlockTradeOrder.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: AcceptBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'acceptBlockTradeOrder')
                .mockRejectedValueOnce(mockError);
            await expect(client.acceptBlockTradeOrder(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('accountBlockTradeList()', () => {
        it('should execute accountBlockTradeList() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    parentOrderId: '4675011431944499201',
                    crossType: 'USER_BLOCK',
                    legs: [
                        {
                            createTime: 1730170445600,
                            updateTime: 1730170445600,
                            symbol: 'BNB-241101-700-C',
                            orderId: '4675011431944499203',
                            orderPrice: 2.8,
                            orderQuantity: 1.2,
                            orderStatus: 'FILLED',
                            executedQty: 1.2,
                            executedAmount: 3.36,
                            fee: 0.336,
                            orderType: 'PREV_QUOTED',
                            orderSide: 'BUY',
                            id: '1125899906900937837',
                            tradeId: 1,
                            tradePrice: 2.8,
                            tradeQty: 1.2,
                            tradeTime: 1730170445600,
                            liquidity: 'TAKER',
                            commission: 0.336,
                        },
                    ],
                    blockTradeSettlementKey: '7d085e6e-a229-2335-ab9d-6a581febcd25',
                },
            ];

            const spy = jest.spyOn(client, 'accountBlockTradeList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AccountBlockTradeListResponse>)
            );
            const response = await client.accountBlockTradeList();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute accountBlockTradeList() successfully with optional parameters', async () => {
            const params: AccountBlockTradeListRequest = {
                endTime: 1641782889000,
                startTime: 1623319461670,
                underlying: 'underlying_example',
                recvWindow: 5000,
            };

            mockResponse = [
                {
                    parentOrderId: '4675011431944499201',
                    crossType: 'USER_BLOCK',
                    legs: [
                        {
                            createTime: 1730170445600,
                            updateTime: 1730170445600,
                            symbol: 'BNB-241101-700-C',
                            orderId: '4675011431944499203',
                            orderPrice: 2.8,
                            orderQuantity: 1.2,
                            orderStatus: 'FILLED',
                            executedQty: 1.2,
                            executedAmount: 3.36,
                            fee: 0.336,
                            orderType: 'PREV_QUOTED',
                            orderSide: 'BUY',
                            id: '1125899906900937837',
                            tradeId: 1,
                            tradePrice: 2.8,
                            tradeQty: 1.2,
                            tradeTime: 1730170445600,
                            liquidity: 'TAKER',
                            commission: 0.336,
                        },
                    ],
                    blockTradeSettlementKey: '7d085e6e-a229-2335-ab9d-6a581febcd25',
                },
            ];

            const spy = jest.spyOn(client, 'accountBlockTradeList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AccountBlockTradeListResponse>)
            );
            const response = await client.accountBlockTradeList(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw an error when server is returning an error', async () => {
            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'accountBlockTradeList')
                .mockRejectedValueOnce(mockError);
            await expect(client.accountBlockTradeList()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('cancelBlockTradeOrder()', () => {
        it('should execute cancelBlockTradeOrder() successfully with required parameters only', async () => {
            const params: CancelBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            const spy = jest.spyOn(client, 'cancelBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<void>)
            );
            const response = await client.cancelBlockTradeOrder(params);

            await expect(response.data()).resolves.toBeUndefined();
            spy.mockRestore();
        });

        it('should execute cancelBlockTradeOrder() successfully with optional parameters', async () => {
            const params: CancelBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
                recvWindow: 5000,
            };

            const spy = jest.spyOn(client, 'cancelBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<void>)
            );
            const response = await client.cancelBlockTradeOrder(params);

            await expect(response.data()).resolves.toBeUndefined();
            spy.mockRestore();
        });

        it('should throw RequiredError when blockOrderMatchingKey is missing', async () => {
            const _params: CancelBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.blockOrderMatchingKey;

            await expect(client.cancelBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter blockOrderMatchingKey was null or undefined when calling cancelBlockTradeOrder.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: CancelBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'cancelBlockTradeOrder')
                .mockRejectedValueOnce(mockError);
            await expect(client.cancelBlockTradeOrder(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('extendBlockTradeOrder()', () => {
        it('should execute extendBlockTradeOrder() successfully with required parameters only', async () => {
            const params: ExtendBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            mockResponse = {
                blockTradeSettlementKey: '3668822b8-1baa-6a2f-adb8-d3de6289b361',
                expireTime: 1730172007000,
                liquidity: 'TAKER',
                status: 'RECEIVED',
                createTime: 1730170088111,
                legs: [{ symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.2', price: '2.8' }],
            };

            const spy = jest.spyOn(client, 'extendBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ExtendBlockTradeOrderResponse>)
            );
            const response = await client.extendBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute extendBlockTradeOrder() successfully with optional parameters', async () => {
            const params: ExtendBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
                recvWindow: 5000,
            };

            mockResponse = {
                blockTradeSettlementKey: '3668822b8-1baa-6a2f-adb8-d3de6289b361',
                expireTime: 1730172007000,
                liquidity: 'TAKER',
                status: 'RECEIVED',
                createTime: 1730170088111,
                legs: [{ symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.2', price: '2.8' }],
            };

            const spy = jest.spyOn(client, 'extendBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ExtendBlockTradeOrderResponse>)
            );
            const response = await client.extendBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when blockOrderMatchingKey is missing', async () => {
            const _params: ExtendBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.blockOrderMatchingKey;

            await expect(client.extendBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter blockOrderMatchingKey was null or undefined when calling extendBlockTradeOrder.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: ExtendBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'extendBlockTradeOrder')
                .mockRejectedValueOnce(mockError);
            await expect(client.extendBlockTradeOrder(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('newBlockTradeOrder()', () => {
        it('should execute newBlockTradeOrder() successfully with required parameters only', async () => {
            const params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };

            mockResponse = {
                blockTradeSettlementKey: '3668822b8-1baa-6a2f-adb8-d3de6289b361',
                expireTime: 1730171888109,
                liquidity: 'TAKER',
                status: 'RECEIVED',
                legs: [{ symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.2', price: '2.8' }],
            };

            const spy = jest.spyOn(client, 'newBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<NewBlockTradeOrderResponse>)
            );
            const response = await client.newBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute newBlockTradeOrder() successfully with optional parameters', async () => {
            const params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
                recvWindow: 5000,
            };

            mockResponse = {
                blockTradeSettlementKey: '3668822b8-1baa-6a2f-adb8-d3de6289b361',
                expireTime: 1730171888109,
                liquidity: 'TAKER',
                status: 'RECEIVED',
                legs: [{ symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.2', price: '2.8' }],
            };

            const spy = jest.spyOn(client, 'newBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<NewBlockTradeOrderResponse>)
            );
            const response = await client.newBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when liquidity is missing', async () => {
            const _params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };
            const params = Object.assign({ ..._params });
            delete params?.liquidity;

            await expect(client.newBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter liquidity was null or undefined when calling newBlockTradeOrder.'
            );
        });

        it('should throw RequiredError when legs is missing', async () => {
            const _params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };
            const params = Object.assign({ ..._params });
            delete params?.legs;

            await expect(client.newBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter legs was null or undefined when calling newBlockTradeOrder.'
            );
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.newBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling newBlockTradeOrder.'
            );
        });

        it('should throw RequiredError when side is missing', async () => {
            const _params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };
            const params = Object.assign({ ..._params });
            delete params?.side;

            await expect(client.newBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter side was null or undefined when calling newBlockTradeOrder.'
            );
        });

        it('should throw RequiredError when price is missing', async () => {
            const _params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };
            const params = Object.assign({ ..._params });
            delete params?.price;

            await expect(client.newBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter price was null or undefined when calling newBlockTradeOrder.'
            );
        });

        it('should throw RequiredError when quantity is missing', async () => {
            const _params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };
            const params = Object.assign({ ..._params });
            delete params?.quantity;

            await expect(client.newBlockTradeOrder(params)).rejects.toThrow(
                'Required parameter quantity was null or undefined when calling newBlockTradeOrder.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: NewBlockTradeOrderRequest = {
                liquidity: 'liquidity_example',
                legs: [],
                symbol: 'symbol_example',
                side: NewBlockTradeOrderSideEnum.BUY,
                price: 1.0,
                quantity: 1.0,
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'newBlockTradeOrder').mockRejectedValueOnce(mockError);
            await expect(client.newBlockTradeOrder(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryBlockTradeDetails()', () => {
        it('should execute queryBlockTradeDetails() successfully with required parameters only', async () => {
            const params: QueryBlockTradeDetailsRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            mockResponse = {
                blockTradeSettlementKey: '12b96c28-ba05-8906-c89t-703215cfb2e6',
                expireTime: 1730171860460,
                liquidity: 'MAKER',
                status: 'RECEIVED',
                createTime: 1730170060462,
                legs: [{ symbol: 'BNB-241101-700-C', side: 'SELL', quantity: '1.66', price: '20' }],
            };

            const spy = jest.spyOn(client, 'queryBlockTradeDetails').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryBlockTradeDetailsResponse>)
            );
            const response = await client.queryBlockTradeDetails(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryBlockTradeDetails() successfully with optional parameters', async () => {
            const params: QueryBlockTradeDetailsRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
                recvWindow: 5000,
            };

            mockResponse = {
                blockTradeSettlementKey: '12b96c28-ba05-8906-c89t-703215cfb2e6',
                expireTime: 1730171860460,
                liquidity: 'MAKER',
                status: 'RECEIVED',
                createTime: 1730170060462,
                legs: [{ symbol: 'BNB-241101-700-C', side: 'SELL', quantity: '1.66', price: '20' }],
            };

            const spy = jest.spyOn(client, 'queryBlockTradeDetails').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryBlockTradeDetailsResponse>)
            );
            const response = await client.queryBlockTradeDetails(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when blockOrderMatchingKey is missing', async () => {
            const _params: QueryBlockTradeDetailsRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.blockOrderMatchingKey;

            await expect(client.queryBlockTradeDetails(params)).rejects.toThrow(
                'Required parameter blockOrderMatchingKey was null or undefined when calling queryBlockTradeDetails.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QueryBlockTradeDetailsRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'queryBlockTradeDetails')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryBlockTradeDetails(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryBlockTradeOrder()', () => {
        it('should execute queryBlockTradeOrder() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    blockTradeSettlementKey: '7d046e6e-a429-4335-ab9d-6a681febcde5',
                    expireTime: 1730172115801,
                    liquidity: 'TAKER',
                    status: 'RECEIVED',
                    createTime: 1730170315803,
                    legs: [
                        { symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.2', price: '2.8' },
                    ],
                },
                {
                    blockTradeSettlementKey: '28b96c28-ba05-6906-a47c-703215cfbfe6',
                    expireTime: 1730171860460,
                    liquidity: 'TAKER',
                    status: 'RECEIVED',
                    createTime: 1730170060462,
                    legs: [
                        { symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.66', price: '20' },
                    ],
                },
            ];

            const spy = jest.spyOn(client, 'queryBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryBlockTradeOrderResponse>)
            );
            const response = await client.queryBlockTradeOrder();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryBlockTradeOrder() successfully with optional parameters', async () => {
            const params: QueryBlockTradeOrderRequest = {
                blockOrderMatchingKey: 'blockOrderMatchingKey_example',
                endTime: 1641782889000,
                startTime: 1623319461670,
                underlying: 'underlying_example',
                recvWindow: 5000,
            };

            mockResponse = [
                {
                    blockTradeSettlementKey: '7d046e6e-a429-4335-ab9d-6a681febcde5',
                    expireTime: 1730172115801,
                    liquidity: 'TAKER',
                    status: 'RECEIVED',
                    createTime: 1730170315803,
                    legs: [
                        { symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.2', price: '2.8' },
                    ],
                },
                {
                    blockTradeSettlementKey: '28b96c28-ba05-6906-a47c-703215cfbfe6',
                    expireTime: 1730171860460,
                    liquidity: 'TAKER',
                    status: 'RECEIVED',
                    createTime: 1730170060462,
                    legs: [
                        { symbol: 'BNB-241101-700-C', side: 'BUY', quantity: '1.66', price: '20' },
                    ],
                },
            ];

            const spy = jest.spyOn(client, 'queryBlockTradeOrder').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryBlockTradeOrderResponse>)
            );
            const response = await client.queryBlockTradeOrder(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw an error when server is returning an error', async () => {
            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'queryBlockTradeOrder').mockRejectedValueOnce(mockError);
            await expect(client.queryBlockTradeOrder()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
