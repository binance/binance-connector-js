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

import { MarketMakerEndpointsApi } from '../../../src/rest-api';
import {
    AutoCancelAllOpenOrdersRequest,
    GetAutoCancelAllOpenOrdersRequest,
    GetMarketMakerProtectionConfigRequest,
    ResetMarketMakerProtectionConfigRequest,
    SetAutoCancelAllOpenOrdersRequest,
    SetMarketMakerProtectionConfigRequest,
} from '../../../src/rest-api';
import type {
    AutoCancelAllOpenOrdersResponse,
    GetAutoCancelAllOpenOrdersResponse,
    GetMarketMakerProtectionConfigResponse,
    ResetMarketMakerProtectionConfigResponse,
    SetAutoCancelAllOpenOrdersResponse,
    SetMarketMakerProtectionConfigResponse,
} from '../../../src/rest-api/types';

describe('MarketMakerEndpointsApi', () => {
    let client: MarketMakerEndpointsApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new MarketMakerEndpointsApi(config);
    });

    describe('autoCancelAllOpenOrders()', () => {
        it('should execute autoCancelAllOpenOrders() successfully with required parameters only', async () => {
            const params: AutoCancelAllOpenOrdersRequest = {
                underlyings: 'underlyings_example',
            };

            mockResponse = { underlyings: ['BTCUSDT', 'ETHUSDT'] };

            const spy = jest.spyOn(client, 'autoCancelAllOpenOrders').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AutoCancelAllOpenOrdersResponse>)
            );
            const response = await client.autoCancelAllOpenOrders(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute autoCancelAllOpenOrders() successfully with optional parameters', async () => {
            const params: AutoCancelAllOpenOrdersRequest = {
                underlyings: 'underlyings_example',
                recvWindow: 5000,
            };

            mockResponse = { underlyings: ['BTCUSDT', 'ETHUSDT'] };

            const spy = jest.spyOn(client, 'autoCancelAllOpenOrders').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AutoCancelAllOpenOrdersResponse>)
            );
            const response = await client.autoCancelAllOpenOrders(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when underlyings is missing', async () => {
            const _params: AutoCancelAllOpenOrdersRequest = {
                underlyings: 'underlyings_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.underlyings;

            await expect(client.autoCancelAllOpenOrders(params)).rejects.toThrow(
                'Required parameter underlyings was null or undefined when calling autoCancelAllOpenOrders.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: AutoCancelAllOpenOrdersRequest = {
                underlyings: 'underlyings_example',
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
                .spyOn(client, 'autoCancelAllOpenOrders')
                .mockRejectedValueOnce(mockError);
            await expect(client.autoCancelAllOpenOrders(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getAutoCancelAllOpenOrders()', () => {
        it('should execute getAutoCancelAllOpenOrders() successfully with required parameters only', async () => {
            mockResponse = { underlying: 'ETHUSDT', countdownTime: 100000 };

            const spy = jest.spyOn(client, 'getAutoCancelAllOpenOrders').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAutoCancelAllOpenOrdersResponse>)
            );
            const response = await client.getAutoCancelAllOpenOrders();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getAutoCancelAllOpenOrders() successfully with optional parameters', async () => {
            const params: GetAutoCancelAllOpenOrdersRequest = {
                underlying: 'underlying_example',
                recvWindow: 5000,
            };

            mockResponse = { underlying: 'ETHUSDT', countdownTime: 100000 };

            const spy = jest.spyOn(client, 'getAutoCancelAllOpenOrders').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAutoCancelAllOpenOrdersResponse>)
            );
            const response = await client.getAutoCancelAllOpenOrders(params);
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
                .spyOn(client, 'getAutoCancelAllOpenOrders')
                .mockRejectedValueOnce(mockError);
            await expect(client.getAutoCancelAllOpenOrders()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getMarketMakerProtectionConfig()', () => {
        it('should execute getMarketMakerProtectionConfig() successfully with required parameters only', async () => {
            mockResponse = {
                underlyingId: 2,
                underlying: 'BTCUSDT',
                windowTimeInMilliseconds: 3000,
                frozenTimeInMilliseconds: 300000,
                qtyLimit: '2',
                deltaLimit: '2.3',
                lastTriggerTime: 0,
            };

            const spy = jest.spyOn(client, 'getMarketMakerProtectionConfig').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetMarketMakerProtectionConfigResponse>)
            );
            const response = await client.getMarketMakerProtectionConfig();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getMarketMakerProtectionConfig() successfully with optional parameters', async () => {
            const params: GetMarketMakerProtectionConfigRequest = {
                underlying: 'underlying_example',
                recvWindow: 5000,
            };

            mockResponse = {
                underlyingId: 2,
                underlying: 'BTCUSDT',
                windowTimeInMilliseconds: 3000,
                frozenTimeInMilliseconds: 300000,
                qtyLimit: '2',
                deltaLimit: '2.3',
                lastTriggerTime: 0,
            };

            const spy = jest.spyOn(client, 'getMarketMakerProtectionConfig').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetMarketMakerProtectionConfigResponse>)
            );
            const response = await client.getMarketMakerProtectionConfig(params);
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
                .spyOn(client, 'getMarketMakerProtectionConfig')
                .mockRejectedValueOnce(mockError);
            await expect(client.getMarketMakerProtectionConfig()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('resetMarketMakerProtectionConfig()', () => {
        it('should execute resetMarketMakerProtectionConfig() successfully with required parameters only', async () => {
            mockResponse = {
                underlyingId: 2,
                underlying: 'BTCUSDT',
                windowTimeInMilliseconds: 3000,
                frozenTimeInMilliseconds: 300000,
                qtyLimit: '2',
                deltaLimit: '2.3',
                lastTriggerTime: 0,
            };

            const spy = jest.spyOn(client, 'resetMarketMakerProtectionConfig').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ResetMarketMakerProtectionConfigResponse>)
            );
            const response = await client.resetMarketMakerProtectionConfig();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute resetMarketMakerProtectionConfig() successfully with optional parameters', async () => {
            const params: ResetMarketMakerProtectionConfigRequest = {
                underlying: 'underlying_example',
                recvWindow: 5000,
            };

            mockResponse = {
                underlyingId: 2,
                underlying: 'BTCUSDT',
                windowTimeInMilliseconds: 3000,
                frozenTimeInMilliseconds: 300000,
                qtyLimit: '2',
                deltaLimit: '2.3',
                lastTriggerTime: 0,
            };

            const spy = jest.spyOn(client, 'resetMarketMakerProtectionConfig').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ResetMarketMakerProtectionConfigResponse>)
            );
            const response = await client.resetMarketMakerProtectionConfig(params);
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
                .spyOn(client, 'resetMarketMakerProtectionConfig')
                .mockRejectedValueOnce(mockError);
            await expect(client.resetMarketMakerProtectionConfig()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('setAutoCancelAllOpenOrders()', () => {
        it('should execute setAutoCancelAllOpenOrders() successfully with required parameters only', async () => {
            const params: SetAutoCancelAllOpenOrdersRequest = {
                underlying: 'underlying_example',
                countdownTime: 789,
            };

            mockResponse = { underlying: 'ETHUSDT', countdownTime: 30000 };

            const spy = jest.spyOn(client, 'setAutoCancelAllOpenOrders').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SetAutoCancelAllOpenOrdersResponse>)
            );
            const response = await client.setAutoCancelAllOpenOrders(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute setAutoCancelAllOpenOrders() successfully with optional parameters', async () => {
            const params: SetAutoCancelAllOpenOrdersRequest = {
                underlying: 'underlying_example',
                countdownTime: 789,
                recvWindow: 5000,
            };

            mockResponse = { underlying: 'ETHUSDT', countdownTime: 30000 };

            const spy = jest.spyOn(client, 'setAutoCancelAllOpenOrders').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SetAutoCancelAllOpenOrdersResponse>)
            );
            const response = await client.setAutoCancelAllOpenOrders(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when underlying is missing', async () => {
            const _params: SetAutoCancelAllOpenOrdersRequest = {
                underlying: 'underlying_example',
                countdownTime: 789,
            };
            const params = Object.assign({ ..._params });
            delete params?.underlying;

            await expect(client.setAutoCancelAllOpenOrders(params)).rejects.toThrow(
                'Required parameter underlying was null or undefined when calling setAutoCancelAllOpenOrders.'
            );
        });

        it('should throw RequiredError when countdownTime is missing', async () => {
            const _params: SetAutoCancelAllOpenOrdersRequest = {
                underlying: 'underlying_example',
                countdownTime: 789,
            };
            const params = Object.assign({ ..._params });
            delete params?.countdownTime;

            await expect(client.setAutoCancelAllOpenOrders(params)).rejects.toThrow(
                'Required parameter countdownTime was null or undefined when calling setAutoCancelAllOpenOrders.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: SetAutoCancelAllOpenOrdersRequest = {
                underlying: 'underlying_example',
                countdownTime: 789,
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
                .spyOn(client, 'setAutoCancelAllOpenOrders')
                .mockRejectedValueOnce(mockError);
            await expect(client.setAutoCancelAllOpenOrders(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('setMarketMakerProtectionConfig()', () => {
        it('should execute setMarketMakerProtectionConfig() successfully with required parameters only', async () => {
            mockResponse = {
                underlyingId: 2,
                underlying: 'BTCUSDT',
                windowTimeInMilliseconds: 3000,
                frozenTimeInMilliseconds: 300000,
                qtyLimit: '2',
                deltaLimit: '2.3',
                lastTriggerTime: 0,
            };

            const spy = jest.spyOn(client, 'setMarketMakerProtectionConfig').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SetMarketMakerProtectionConfigResponse>)
            );
            const response = await client.setMarketMakerProtectionConfig();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute setMarketMakerProtectionConfig() successfully with optional parameters', async () => {
            const params: SetMarketMakerProtectionConfigRequest = {
                underlying: 'underlying_example',
                windowTimeInMilliseconds: 789,
                frozenTimeInMilliseconds: 789,
                qtyLimit: 1.0,
                deltaLimit: 1.0,
                recvWindow: 5000,
            };

            mockResponse = {
                underlyingId: 2,
                underlying: 'BTCUSDT',
                windowTimeInMilliseconds: 3000,
                frozenTimeInMilliseconds: 300000,
                qtyLimit: '2',
                deltaLimit: '2.3',
                lastTriggerTime: 0,
            };

            const spy = jest.spyOn(client, 'setMarketMakerProtectionConfig').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SetMarketMakerProtectionConfigResponse>)
            );
            const response = await client.setMarketMakerProtectionConfig(params);
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
                .spyOn(client, 'setMarketMakerProtectionConfig')
                .mockRejectedValueOnce(mockError);
            await expect(client.setMarketMakerProtectionConfig()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
