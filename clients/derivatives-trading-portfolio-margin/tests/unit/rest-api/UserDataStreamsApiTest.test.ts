/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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

import { UserDataStreamsApi } from '../../../src/rest-api';
import {} from '../../../src/rest-api';
import type { StartUserDataStreamResponse } from '../../../src/rest-api/types';

describe('UserDataStreamsApi', () => {
    let client: UserDataStreamsApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new UserDataStreamsApi(config);
    });

    describe('closeUserDataStream()', () => {
        it('should execute closeUserDataStream() successfully with required parameters only', async () => {
            const spy = jest.spyOn(client, 'closeUserDataStream').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<void>)
            );
            const response = await client.closeUserDataStream();

            await expect(response.data()).resolves.toBeUndefined();
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
            const spy = jest.spyOn(client, 'closeUserDataStream').mockRejectedValueOnce(mockError);
            await expect(client.closeUserDataStream()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('keepaliveUserDataStream()', () => {
        it('should execute keepaliveUserDataStream() successfully with required parameters only', async () => {
            const spy = jest.spyOn(client, 'keepaliveUserDataStream').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<void>)
            );
            const response = await client.keepaliveUserDataStream();

            await expect(response.data()).resolves.toBeUndefined();
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
                .spyOn(client, 'keepaliveUserDataStream')
                .mockRejectedValueOnce(mockError);
            await expect(client.keepaliveUserDataStream()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('startUserDataStream()', () => {
        it('should execute startUserDataStream() successfully with required parameters only', async () => {
            mockResponse = {
                listenKey: 'pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1',
            };

            const spy = jest.spyOn(client, 'startUserDataStream').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<StartUserDataStreamResponse>)
            );
            const response = await client.startUserDataStream();
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
            const spy = jest.spyOn(client, 'startUserDataStream').mockRejectedValueOnce(mockError);
            await expect(client.startUserDataStream()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
