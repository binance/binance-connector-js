/**
 * Binance Pay REST API
 *
 * OpenAPI Specification for the Binance Pay REST API
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

import { PayApi } from '../../../src/rest-api';
import { GetPayTradeHistoryRequest } from '../../../src/rest-api';
import type { GetPayTradeHistoryResponse } from '../../../src/rest-api/types';

describe('PayApi', () => {
    let client: PayApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new PayApi(config);
    });

    describe('getPayTradeHistory()', () => {
        it('should execute getPayTradeHistory() successfully with required parameters only', async () => {
            mockResponse = {
                code: '000000',
                message: 'success',
                data: [
                    {
                        orderType: 'C2C',
                        transactionId: 'M_P_71505104267788288',
                        transactionTime: 1610090460133,
                        amount: '23.72469206',
                        currency: 'BNB',
                        walletType: 1,
                        walletTypes: [1, 2],
                        fundsDetail: [
                            {
                                currency: 'USDT',
                                amount: '1.2',
                                walletAssetCost: [{ '1': '0.6' }, { '2': '0.6' }],
                            },
                            {
                                currency: 'ETH',
                                amount: '0.0001',
                                walletAssetCost: [{ '1': '0.00005' }, { '2': '0.00005' }],
                            },
                        ],
                        payerInfo: {
                            name: 'Jack',
                            type: 'USER',
                            binanceId: '12345678',
                            accountId: '67736251',
                        },
                        receiverInfo: {
                            name: 'Alan',
                            type: 'MERCHANT',
                            email: 'alan@binance.com',
                            binanceId: '34355667',
                            accountId: '21326891',
                            countryCode: '1',
                            phoneNumber: '8057651210',
                            mobileCode: 'US',
                            extend: { institutionName: '', cardNumber: '', digitalWalletId: '' },
                        },
                    },
                ],
                success: true,
            };

            const spy = jest.spyOn(client, 'getPayTradeHistory').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetPayTradeHistoryResponse>)
            );
            const response = await client.getPayTradeHistory();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getPayTradeHistory() successfully with optional parameters', async () => {
            const params: GetPayTradeHistoryRequest = {
                startTime: 1623319461670,
                endTime: 1641782889000,
                limit: 100,
                recvWindow: 5000,
            };

            mockResponse = {
                code: '000000',
                message: 'success',
                data: [
                    {
                        orderType: 'C2C',
                        transactionId: 'M_P_71505104267788288',
                        transactionTime: 1610090460133,
                        amount: '23.72469206',
                        currency: 'BNB',
                        walletType: 1,
                        walletTypes: [1, 2],
                        fundsDetail: [
                            {
                                currency: 'USDT',
                                amount: '1.2',
                                walletAssetCost: [{ '1': '0.6' }, { '2': '0.6' }],
                            },
                            {
                                currency: 'ETH',
                                amount: '0.0001',
                                walletAssetCost: [{ '1': '0.00005' }, { '2': '0.00005' }],
                            },
                        ],
                        payerInfo: {
                            name: 'Jack',
                            type: 'USER',
                            binanceId: '12345678',
                            accountId: '67736251',
                        },
                        receiverInfo: {
                            name: 'Alan',
                            type: 'MERCHANT',
                            email: 'alan@binance.com',
                            binanceId: '34355667',
                            accountId: '21326891',
                            countryCode: '1',
                            phoneNumber: '8057651210',
                            mobileCode: 'US',
                            extend: { institutionName: '', cardNumber: '', digitalWalletId: '' },
                        },
                    },
                ],
                success: true,
            };

            const spy = jest.spyOn(client, 'getPayTradeHistory').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetPayTradeHistoryResponse>)
            );
            const response = await client.getPayTradeHistory(params);
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
            const spy = jest.spyOn(client, 'getPayTradeHistory').mockRejectedValueOnce(mockError);
            await expect(client.getPayTradeHistory()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
