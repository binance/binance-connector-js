/**
 * Binance Public Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading Options REST API
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

import { AccountApi } from '../../../src/rest-api';
import {
    AccountFundingFlowRequest,
    GetDownloadIdForOptionTransactionHistoryRequest,
    GetOptionTransactionHistoryDownloadLinkByIdRequest,
    OptionAccountInformationRequest,
} from '../../../src/rest-api';
import type {
    AccountFundingFlowResponse,
    GetDownloadIdForOptionTransactionHistoryResponse,
    GetOptionTransactionHistoryDownloadLinkByIdResponse,
    OptionAccountInformationResponse,
} from '../../../src/rest-api/types';

describe('AccountApi', () => {
    let client: AccountApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new AccountApi(config);
    });

    describe('accountFundingFlow()', () => {
        it('should execute accountFundingFlow() successfully with required parameters only', async () => {
            const params: AccountFundingFlowRequest = {
                currency: 'currency_example',
            };

            mockResponse = [
                {
                    id: 1125899906842624000,
                    asset: 'USDT',
                    amount: '-0.552',
                    type: 'FEE',
                    createDate: 1592449456000,
                },
                {
                    id: 1125899906842624000,
                    asset: 'USDT',
                    amount: '100',
                    type: 'CONTRACT',
                    createDate: 1592449456000,
                },
                {
                    id: 1125899906842624000,
                    asset: 'USDT',
                    amount: '10000',
                    type: 'TRANSFER',
                    createDate: 1592448410000,
                },
            ];

            const spy = jest.spyOn(client, 'accountFundingFlow').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AccountFundingFlowResponse>)
            );
            const response = await client.accountFundingFlow(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute accountFundingFlow() successfully with optional parameters', async () => {
            const params: AccountFundingFlowRequest = {
                currency: 'currency_example',
                recordId: 1,
                startTime: 1623319461670,
                endTime: 1641782889000,
                limit: 100,
                recvWindow: 5000,
            };

            mockResponse = [
                {
                    id: 1125899906842624000,
                    asset: 'USDT',
                    amount: '-0.552',
                    type: 'FEE',
                    createDate: 1592449456000,
                },
                {
                    id: 1125899906842624000,
                    asset: 'USDT',
                    amount: '100',
                    type: 'CONTRACT',
                    createDate: 1592449456000,
                },
                {
                    id: 1125899906842624000,
                    asset: 'USDT',
                    amount: '10000',
                    type: 'TRANSFER',
                    createDate: 1592448410000,
                },
            ];

            const spy = jest.spyOn(client, 'accountFundingFlow').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<AccountFundingFlowResponse>)
            );
            const response = await client.accountFundingFlow(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when currency is missing', async () => {
            const _params: AccountFundingFlowRequest = {
                currency: 'currency_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.currency;

            await expect(client.accountFundingFlow(params)).rejects.toThrow(
                'Required parameter currency was null or undefined when calling accountFundingFlow.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: AccountFundingFlowRequest = {
                currency: 'currency_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'accountFundingFlow').mockRejectedValueOnce(mockError);
            await expect(client.accountFundingFlow(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getDownloadIdForOptionTransactionHistory()', () => {
        it('should execute getDownloadIdForOptionTransactionHistory() successfully with required parameters only', async () => {
            const params: GetDownloadIdForOptionTransactionHistoryRequest = {
                startTime: 1623319461670,
                endTime: 1641782889000,
            };

            mockResponse = { avgCostTimestampOfLast30d: 7241837, downloadId: '546975389218332672' };

            const spy = jest
                .spyOn(client, 'getDownloadIdForOptionTransactionHistory')
                .mockReturnValue(
                    Promise.resolve({
                        data: () => Promise.resolve(mockResponse),
                        status: 200,
                        headers: {},
                        rateLimits: [],
                    } as RestApiResponse<GetDownloadIdForOptionTransactionHistoryResponse>)
                );
            const response = await client.getDownloadIdForOptionTransactionHistory(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getDownloadIdForOptionTransactionHistory() successfully with optional parameters', async () => {
            const params: GetDownloadIdForOptionTransactionHistoryRequest = {
                startTime: 1623319461670,
                endTime: 1641782889000,
                recvWindow: 5000,
            };

            mockResponse = { avgCostTimestampOfLast30d: 7241837, downloadId: '546975389218332672' };

            const spy = jest
                .spyOn(client, 'getDownloadIdForOptionTransactionHistory')
                .mockReturnValue(
                    Promise.resolve({
                        data: () => Promise.resolve(mockResponse),
                        status: 200,
                        headers: {},
                        rateLimits: [],
                    } as RestApiResponse<GetDownloadIdForOptionTransactionHistoryResponse>)
                );
            const response = await client.getDownloadIdForOptionTransactionHistory(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when startTime is missing', async () => {
            const _params: GetDownloadIdForOptionTransactionHistoryRequest = {
                startTime: 1623319461670,
                endTime: 1641782889000,
            };
            const params = Object.assign({ ..._params });
            delete params?.startTime;

            await expect(client.getDownloadIdForOptionTransactionHistory(params)).rejects.toThrow(
                'Required parameter startTime was null or undefined when calling getDownloadIdForOptionTransactionHistory.'
            );
        });

        it('should throw RequiredError when endTime is missing', async () => {
            const _params: GetDownloadIdForOptionTransactionHistoryRequest = {
                startTime: 1623319461670,
                endTime: 1641782889000,
            };
            const params = Object.assign({ ..._params });
            delete params?.endTime;

            await expect(client.getDownloadIdForOptionTransactionHistory(params)).rejects.toThrow(
                'Required parameter endTime was null or undefined when calling getDownloadIdForOptionTransactionHistory.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: GetDownloadIdForOptionTransactionHistoryRequest = {
                startTime: 1623319461670,
                endTime: 1641782889000,
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
                .spyOn(client, 'getDownloadIdForOptionTransactionHistory')
                .mockRejectedValueOnce(mockError);
            await expect(client.getDownloadIdForOptionTransactionHistory(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('getOptionTransactionHistoryDownloadLinkById()', () => {
        it('should execute getOptionTransactionHistoryDownloadLinkById() successfully with required parameters only', async () => {
            const params: GetOptionTransactionHistoryDownloadLinkByIdRequest = {
                downloadId: '1',
            };

            mockResponse = {
                downloadId: '545923594199212032',
                status: 'completed',
                url: 'www.binance.com',
                notified: true,
                expirationTimestamp: 1645009771000,
                isExpired: null,
            };

            const spy = jest
                .spyOn(client, 'getOptionTransactionHistoryDownloadLinkById')
                .mockReturnValue(
                    Promise.resolve({
                        data: () => Promise.resolve(mockResponse),
                        status: 200,
                        headers: {},
                        rateLimits: [],
                    } as RestApiResponse<GetOptionTransactionHistoryDownloadLinkByIdResponse>)
                );
            const response = await client.getOptionTransactionHistoryDownloadLinkById(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getOptionTransactionHistoryDownloadLinkById() successfully with optional parameters', async () => {
            const params: GetOptionTransactionHistoryDownloadLinkByIdRequest = {
                downloadId: '1',
                recvWindow: 5000,
            };

            mockResponse = {
                downloadId: '545923594199212032',
                status: 'completed',
                url: 'www.binance.com',
                notified: true,
                expirationTimestamp: 1645009771000,
                isExpired: null,
            };

            const spy = jest
                .spyOn(client, 'getOptionTransactionHistoryDownloadLinkById')
                .mockReturnValue(
                    Promise.resolve({
                        data: () => Promise.resolve(mockResponse),
                        status: 200,
                        headers: {},
                        rateLimits: [],
                    } as RestApiResponse<GetOptionTransactionHistoryDownloadLinkByIdResponse>)
                );
            const response = await client.getOptionTransactionHistoryDownloadLinkById(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when downloadId is missing', async () => {
            const _params: GetOptionTransactionHistoryDownloadLinkByIdRequest = {
                downloadId: '1',
            };
            const params = Object.assign({ ..._params });
            delete params?.downloadId;

            await expect(
                client.getOptionTransactionHistoryDownloadLinkById(params)
            ).rejects.toThrow(
                'Required parameter downloadId was null or undefined when calling getOptionTransactionHistoryDownloadLinkById.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: GetOptionTransactionHistoryDownloadLinkByIdRequest = {
                downloadId: '1',
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
                .spyOn(client, 'getOptionTransactionHistoryDownloadLinkById')
                .mockRejectedValueOnce(mockError);
            await expect(
                client.getOptionTransactionHistoryDownloadLinkById(params)
            ).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('optionAccountInformation()', () => {
        it('should execute optionAccountInformation() successfully with required parameters only', async () => {
            mockResponse = {
                asset: [
                    {
                        asset: 'USDT',
                        marginBalance: '1877.52214415',
                        equity: '617.77711415',
                        available: '0',
                        locked: '2898.92389933',
                        unrealizedPNL: '222.23697000',
                    },
                ],
                greek: [
                    {
                        underlying: 'BTCUSDT',
                        delta: '-0.05',
                        gamma: '-0.002',
                        theta: '-0.05',
                        vega: '-0.002',
                    },
                ],
                time: 1592449455993,
                riskLevel: 'NORMAL',
            };

            const spy = jest.spyOn(client, 'optionAccountInformation').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<OptionAccountInformationResponse>)
            );
            const response = await client.optionAccountInformation();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute optionAccountInformation() successfully with optional parameters', async () => {
            const params: OptionAccountInformationRequest = {
                recvWindow: 5000,
            };

            mockResponse = {
                asset: [
                    {
                        asset: 'USDT',
                        marginBalance: '1877.52214415',
                        equity: '617.77711415',
                        available: '0',
                        locked: '2898.92389933',
                        unrealizedPNL: '222.23697000',
                    },
                ],
                greek: [
                    {
                        underlying: 'BTCUSDT',
                        delta: '-0.05',
                        gamma: '-0.002',
                        theta: '-0.05',
                        vega: '-0.002',
                    },
                ],
                time: 1592449455993,
                riskLevel: 'NORMAL',
            };

            const spy = jest.spyOn(client, 'optionAccountInformation').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<OptionAccountInformationResponse>)
            );
            const response = await client.optionAccountInformation(params);
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
                .spyOn(client, 'optionAccountInformation')
                .mockRejectedValueOnce(mockError);
            await expect(client.optionAccountInformation()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
