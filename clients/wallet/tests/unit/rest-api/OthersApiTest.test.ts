/**
 * Binance Wallet REST API
 *
 * OpenAPI Specification for the Binance Wallet REST API
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

import { OthersApi } from '../../../src/rest-api';
import { GetSymbolsDelistScheduleForSpotRequest } from '../../../src/rest-api';
import type {
    GetSymbolsDelistScheduleForSpotResponse,
    SystemStatusResponse,
} from '../../../src/rest-api/types';

describe('OthersApi', () => {
    let client: OthersApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new OthersApi(config);
    });

    describe('getSymbolsDelistScheduleForSpot()', () => {
        it('should execute getSymbolsDelistScheduleForSpot() successfully with required parameters only', async () => {
            mockResponse = [
                { delistTime: 1686161202000, symbols: ['ADAUSDT', 'BNBUSDT'] },
                { delistTime: 1686222232000, symbols: ['ETHUSDT'] },
            ];

            const spy = jest.spyOn(client, 'getSymbolsDelistScheduleForSpot').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetSymbolsDelistScheduleForSpotResponse>)
            );
            const response = await client.getSymbolsDelistScheduleForSpot();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getSymbolsDelistScheduleForSpot() successfully with optional parameters', async () => {
            const params: GetSymbolsDelistScheduleForSpotRequest = {
                recvWindow: 5000,
            };

            mockResponse = [
                { delistTime: 1686161202000, symbols: ['ADAUSDT', 'BNBUSDT'] },
                { delistTime: 1686222232000, symbols: ['ETHUSDT'] },
            ];

            const spy = jest.spyOn(client, 'getSymbolsDelistScheduleForSpot').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetSymbolsDelistScheduleForSpotResponse>)
            );
            const response = await client.getSymbolsDelistScheduleForSpot(params);
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
                .spyOn(client, 'getSymbolsDelistScheduleForSpot')
                .mockRejectedValueOnce(mockError);
            await expect(client.getSymbolsDelistScheduleForSpot()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('systemStatus()', () => {
        it('should execute systemStatus() successfully with required parameters only', async () => {
            mockResponse = { status: 0, msg: 'normal' };

            const spy = jest.spyOn(client, 'systemStatus').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SystemStatusResponse>)
            );
            const response = await client.systemStatus();
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
            const spy = jest.spyOn(client, 'systemStatus').mockRejectedValueOnce(mockError);
            await expect(client.systemStatus()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
