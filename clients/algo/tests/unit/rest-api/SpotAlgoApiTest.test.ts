/**
 * Binance Algo REST API
 *
 * OpenAPI Specification for the Binance Algo REST API
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

import { SpotAlgoApi } from '../../../src/rest-api';
import {
    CancelAlgoOrderSpotAlgoRequest,
    QueryCurrentAlgoOpenOrdersSpotAlgoRequest,
    QueryHistoricalAlgoOrdersSpotAlgoRequest,
    QuerySubOrdersSpotAlgoRequest,
    TimeWeightedAveragePriceSpotAlgoRequest,
} from '../../../src/rest-api';
import type {
    CancelAlgoOrderSpotAlgoResponse,
    QueryCurrentAlgoOpenOrdersSpotAlgoResponse,
    QueryHistoricalAlgoOrdersSpotAlgoResponse,
    QuerySubOrdersSpotAlgoResponse,
    TimeWeightedAveragePriceSpotAlgoResponse,
} from '../../../src/rest-api/types';

describe('SpotAlgoApi', () => {
    let client: SpotAlgoApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new SpotAlgoApi(config);
    });

    describe('cancelAlgoOrderSpotAlgo()', () => {
        it('should execute cancelAlgoOrderSpotAlgo() successfully with required parameters only', async () => {
            const params: CancelAlgoOrderSpotAlgoRequest = {
                algoId: 1,
            };

            mockResponse = { algoId: 14511, success: true, code: 0, msg: 'OK' };

            const spy = jest.spyOn(client, 'cancelAlgoOrderSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CancelAlgoOrderSpotAlgoResponse>)
            );
            const response = await client.cancelAlgoOrderSpotAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute cancelAlgoOrderSpotAlgo() successfully with optional parameters', async () => {
            const params: CancelAlgoOrderSpotAlgoRequest = {
                algoId: 1,
                recvWindow: 5000,
            };

            mockResponse = { algoId: 14511, success: true, code: 0, msg: 'OK' };

            const spy = jest.spyOn(client, 'cancelAlgoOrderSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CancelAlgoOrderSpotAlgoResponse>)
            );
            const response = await client.cancelAlgoOrderSpotAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when algoId is missing', async () => {
            const _params: CancelAlgoOrderSpotAlgoRequest = {
                algoId: 1,
            };
            const params = Object.assign({ ..._params });
            delete params?.algoId;

            await expect(client.cancelAlgoOrderSpotAlgo(params)).rejects.toThrow(
                'Required parameter algoId was null or undefined when calling cancelAlgoOrderSpotAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: CancelAlgoOrderSpotAlgoRequest = {
                algoId: 1,
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
                .spyOn(client, 'cancelAlgoOrderSpotAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.cancelAlgoOrderSpotAlgo(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryCurrentAlgoOpenOrdersSpotAlgo()', () => {
        it('should execute queryCurrentAlgoOpenOrdersSpotAlgo() successfully with required parameters only', async () => {
            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14517,
                        symbol: 'ETHUSDT',
                        side: 'SELL',
                        totalQty: '5.000',
                        executedQty: '0.000',
                        executedAmt: '0.00000000',
                        avgPrice: '0.00',
                        clientAlgoId: 'd7096549481642f8a0bb69e9e2e31f2e',
                        bookTime: 1649756817004,
                        endTime: 0,
                        algoStatus: 'WORKING',
                        algoType: 'TWAP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryCurrentAlgoOpenOrdersSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryCurrentAlgoOpenOrdersSpotAlgoResponse>)
            );
            const response = await client.queryCurrentAlgoOpenOrdersSpotAlgo();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryCurrentAlgoOpenOrdersSpotAlgo() successfully with optional parameters', async () => {
            const params: QueryCurrentAlgoOpenOrdersSpotAlgoRequest = {
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14517,
                        symbol: 'ETHUSDT',
                        side: 'SELL',
                        totalQty: '5.000',
                        executedQty: '0.000',
                        executedAmt: '0.00000000',
                        avgPrice: '0.00',
                        clientAlgoId: 'd7096549481642f8a0bb69e9e2e31f2e',
                        bookTime: 1649756817004,
                        endTime: 0,
                        algoStatus: 'WORKING',
                        algoType: 'TWAP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryCurrentAlgoOpenOrdersSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryCurrentAlgoOpenOrdersSpotAlgoResponse>)
            );
            const response = await client.queryCurrentAlgoOpenOrdersSpotAlgo(params);
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
                .spyOn(client, 'queryCurrentAlgoOpenOrdersSpotAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryCurrentAlgoOpenOrdersSpotAlgo()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('queryHistoricalAlgoOrdersSpotAlgo()', () => {
        it('should execute queryHistoricalAlgoOrdersSpotAlgo() successfully with required parameters only', async () => {
            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14518,
                        symbol: 'BNBUSDT',
                        side: 'BUY',
                        totalQty: '100.00',
                        executedQty: '0.00',
                        executedAmt: '0.00000000',
                        avgPrice: '0.000',
                        clientAlgoId: 'acacab56b3c44bef9f6a8f8ebd2a8408',
                        bookTime: 1649757019503,
                        endTime: 1649757088101,
                        algoStatus: 'CANCELLED',
                        algoType: 'VP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryHistoricalAlgoOrdersSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryHistoricalAlgoOrdersSpotAlgoResponse>)
            );
            const response = await client.queryHistoricalAlgoOrdersSpotAlgo();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryHistoricalAlgoOrdersSpotAlgo() successfully with optional parameters', async () => {
            const params: QueryHistoricalAlgoOrdersSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                startTime: 1623319461670,
                endTime: 1641782889000,
                page: 1,
                pageSize: 100,
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14518,
                        symbol: 'BNBUSDT',
                        side: 'BUY',
                        totalQty: '100.00',
                        executedQty: '0.00',
                        executedAmt: '0.00000000',
                        avgPrice: '0.000',
                        clientAlgoId: 'acacab56b3c44bef9f6a8f8ebd2a8408',
                        bookTime: 1649757019503,
                        endTime: 1649757088101,
                        algoStatus: 'CANCELLED',
                        algoType: 'VP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryHistoricalAlgoOrdersSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryHistoricalAlgoOrdersSpotAlgoResponse>)
            );
            const response = await client.queryHistoricalAlgoOrdersSpotAlgo(params);
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
                .spyOn(client, 'queryHistoricalAlgoOrdersSpotAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryHistoricalAlgoOrdersSpotAlgo()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('querySubOrdersSpotAlgo()', () => {
        it('should execute querySubOrdersSpotAlgo() successfully with required parameters only', async () => {
            const params: QuerySubOrdersSpotAlgoRequest = {
                algoId: 1,
            };

            mockResponse = {
                total: 1,
                executedQty: '1.000',
                executedAmt: '3229.44000000',
                subOrders: [
                    {
                        algoId: 13723,
                        orderId: 8389765519993909000,
                        orderStatus: 'FILLED',
                        executedQty: '1.000',
                        executedAmt: '3229.44000000',
                        feeAmt: '-1.61471999',
                        feeAsset: 'USDT',
                        bookTime: 1649319001964,
                        avgPrice: '3229.44',
                        side: 'SELL',
                        symbol: 'ETHUSDT',
                        subId: 1,
                        timeInForce: 'IMMEDIATE_OR_CANCEL',
                        origQty: '1.000',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'querySubOrdersSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QuerySubOrdersSpotAlgoResponse>)
            );
            const response = await client.querySubOrdersSpotAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute querySubOrdersSpotAlgo() successfully with optional parameters', async () => {
            const params: QuerySubOrdersSpotAlgoRequest = {
                algoId: 1,
                page: 1,
                pageSize: 100,
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                executedQty: '1.000',
                executedAmt: '3229.44000000',
                subOrders: [
                    {
                        algoId: 13723,
                        orderId: 8389765519993909000,
                        orderStatus: 'FILLED',
                        executedQty: '1.000',
                        executedAmt: '3229.44000000',
                        feeAmt: '-1.61471999',
                        feeAsset: 'USDT',
                        bookTime: 1649319001964,
                        avgPrice: '3229.44',
                        side: 'SELL',
                        symbol: 'ETHUSDT',
                        subId: 1,
                        timeInForce: 'IMMEDIATE_OR_CANCEL',
                        origQty: '1.000',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'querySubOrdersSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QuerySubOrdersSpotAlgoResponse>)
            );
            const response = await client.querySubOrdersSpotAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when algoId is missing', async () => {
            const _params: QuerySubOrdersSpotAlgoRequest = {
                algoId: 1,
            };
            const params = Object.assign({ ..._params });
            delete params?.algoId;

            await expect(client.querySubOrdersSpotAlgo(params)).rejects.toThrow(
                'Required parameter algoId was null or undefined when calling querySubOrdersSpotAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QuerySubOrdersSpotAlgoRequest = {
                algoId: 1,
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
                .spyOn(client, 'querySubOrdersSpotAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.querySubOrdersSpotAlgo(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('timeWeightedAveragePriceSpotAlgo()', () => {
        it('should execute timeWeightedAveragePriceSpotAlgo() successfully with required parameters only', async () => {
            const params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };

            mockResponse = {
                clientAlgoId: '65ce1630101a480b85915d7e11fd5078',
                success: true,
                code: 0,
                msg: 'OK',
            };

            const spy = jest.spyOn(client, 'timeWeightedAveragePriceSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<TimeWeightedAveragePriceSpotAlgoResponse>)
            );
            const response = await client.timeWeightedAveragePriceSpotAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute timeWeightedAveragePriceSpotAlgo() successfully with optional parameters', async () => {
            const params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
                clientAlgoId: '1',
                limitPrice: 1.0,
            };

            mockResponse = {
                clientAlgoId: '65ce1630101a480b85915d7e11fd5078',
                success: true,
                code: 0,
                msg: 'OK',
            };

            const spy = jest.spyOn(client, 'timeWeightedAveragePriceSpotAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<TimeWeightedAveragePriceSpotAlgoResponse>)
            );
            const response = await client.timeWeightedAveragePriceSpotAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.timeWeightedAveragePriceSpotAlgo(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling timeWeightedAveragePriceSpotAlgo.'
            );
        });

        it('should throw RequiredError when side is missing', async () => {
            const _params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.side;

            await expect(client.timeWeightedAveragePriceSpotAlgo(params)).rejects.toThrow(
                'Required parameter side was null or undefined when calling timeWeightedAveragePriceSpotAlgo.'
            );
        });

        it('should throw RequiredError when quantity is missing', async () => {
            const _params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.quantity;

            await expect(client.timeWeightedAveragePriceSpotAlgo(params)).rejects.toThrow(
                'Required parameter quantity was null or undefined when calling timeWeightedAveragePriceSpotAlgo.'
            );
        });

        it('should throw RequiredError when duration is missing', async () => {
            const _params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.duration;

            await expect(client.timeWeightedAveragePriceSpotAlgo(params)).rejects.toThrow(
                'Required parameter duration was null or undefined when calling timeWeightedAveragePriceSpotAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: TimeWeightedAveragePriceSpotAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
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
                .spyOn(client, 'timeWeightedAveragePriceSpotAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.timeWeightedAveragePriceSpotAlgo(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });
});
