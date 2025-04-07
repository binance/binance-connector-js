/**
 * Binance Convert REST API
 *
 * OpenAPI Specification for the Binance Convert REST API
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

import { MarketDataApi } from '../../../src/rest-api';
import {
    ListAllConvertPairsRequest,
    QueryOrderQuantityPrecisionPerAssetRequest,
} from '../../../src/rest-api';
import type {
    ListAllConvertPairsResponse,
    QueryOrderQuantityPrecisionPerAssetResponse,
} from '../../../src/rest-api/types';

describe('MarketDataApi', () => {
    let client: MarketDataApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new MarketDataApi(config);
    });

    describe('listAllConvertPairs()', () => {
        it('should execute listAllConvertPairs() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    fromAsset: 'BTC',
                    toAsset: 'USDT',
                    fromAssetMinAmount: '0.0004',
                    fromAssetMaxAmount: '50',
                    toAssetMinAmount: '20',
                    toAssetMaxAmount: '2500000',
                },
            ];

            const spy = jest.spyOn(client, 'listAllConvertPairs').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ListAllConvertPairsResponse>)
            );
            const response = await client.listAllConvertPairs();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute listAllConvertPairs() successfully with optional parameters', async () => {
            const params: ListAllConvertPairsRequest = {
                fromAsset: 'fromAsset_example',
                toAsset: 'toAsset_example',
            };

            mockResponse = [
                {
                    fromAsset: 'BTC',
                    toAsset: 'USDT',
                    fromAssetMinAmount: '0.0004',
                    fromAssetMaxAmount: '50',
                    toAssetMinAmount: '20',
                    toAssetMaxAmount: '2500000',
                },
            ];

            const spy = jest.spyOn(client, 'listAllConvertPairs').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ListAllConvertPairsResponse>)
            );
            const response = await client.listAllConvertPairs(params);
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
            const spy = jest.spyOn(client, 'listAllConvertPairs').mockRejectedValueOnce(mockError);
            await expect(client.listAllConvertPairs()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryOrderQuantityPrecisionPerAsset()', () => {
        it('should execute queryOrderQuantityPrecisionPerAsset() successfully with required parameters only', async () => {
            mockResponse = [
                { asset: 'BTC', fraction: 8 },
                { asset: 'SHIB', fraction: 2 },
            ];

            const spy = jest.spyOn(client, 'queryOrderQuantityPrecisionPerAsset').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryOrderQuantityPrecisionPerAssetResponse>)
            );
            const response = await client.queryOrderQuantityPrecisionPerAsset();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryOrderQuantityPrecisionPerAsset() successfully with optional parameters', async () => {
            const params: QueryOrderQuantityPrecisionPerAssetRequest = {
                recvWindow: 5000,
            };

            mockResponse = [
                { asset: 'BTC', fraction: 8 },
                { asset: 'SHIB', fraction: 2 },
            ];

            const spy = jest.spyOn(client, 'queryOrderQuantityPrecisionPerAsset').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryOrderQuantityPrecisionPerAssetResponse>)
            );
            const response = await client.queryOrderQuantityPrecisionPerAsset(params);
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
                .spyOn(client, 'queryOrderQuantityPrecisionPerAsset')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryOrderQuantityPrecisionPerAsset()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });
});
