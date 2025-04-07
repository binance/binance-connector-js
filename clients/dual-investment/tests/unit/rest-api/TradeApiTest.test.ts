/**
 * Binance Dual Investment REST API
 *
 * OpenAPI Specification for the Binance Dual Investment REST API
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

import { TradeApi } from '../../../src/rest-api';
import {
    ChangeAutoCompoundStatusRequest,
    CheckDualInvestmentAccountsRequest,
    GetDualInvestmentPositionsRequest,
    SubscribeDualInvestmentProductsRequest,
} from '../../../src/rest-api';
import type {
    ChangeAutoCompoundStatusResponse,
    CheckDualInvestmentAccountsResponse,
    GetDualInvestmentPositionsResponse,
    SubscribeDualInvestmentProductsResponse,
} from '../../../src/rest-api/types';

describe('TradeApi', () => {
    let client: TradeApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new TradeApi(config);
    });

    describe('changeAutoCompoundStatus()', () => {
        it('should execute changeAutoCompoundStatus() successfully with required parameters only', async () => {
            const params: ChangeAutoCompoundStatusRequest = {
                positionId: '1',
            };

            mockResponse = { positionId: '123456789', autoCompoundPlan: 'ADVANCED' };

            const spy = jest.spyOn(client, 'changeAutoCompoundStatus').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ChangeAutoCompoundStatusResponse>)
            );
            const response = await client.changeAutoCompoundStatus(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute changeAutoCompoundStatus() successfully with optional parameters', async () => {
            const params: ChangeAutoCompoundStatusRequest = {
                positionId: '1',
                autoCompoundPlan: 'autoCompoundPlan_example',
                recvWindow: 5000,
            };

            mockResponse = { positionId: '123456789', autoCompoundPlan: 'ADVANCED' };

            const spy = jest.spyOn(client, 'changeAutoCompoundStatus').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ChangeAutoCompoundStatusResponse>)
            );
            const response = await client.changeAutoCompoundStatus(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when positionId is missing', async () => {
            const _params: ChangeAutoCompoundStatusRequest = {
                positionId: '1',
            };
            const params = Object.assign({ ..._params });
            delete params?.positionId;

            await expect(client.changeAutoCompoundStatus(params)).rejects.toThrow(
                'Required parameter positionId was null or undefined when calling changeAutoCompoundStatus.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: ChangeAutoCompoundStatusRequest = {
                positionId: '1',
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
                .spyOn(client, 'changeAutoCompoundStatus')
                .mockRejectedValueOnce(mockError);
            await expect(client.changeAutoCompoundStatus(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('checkDualInvestmentAccounts()', () => {
        it('should execute checkDualInvestmentAccounts() successfully with required parameters only', async () => {
            mockResponse = { totalAmountInBTC: '0.01067982', totalAmountInUSDT: '77.13289230' };

            const spy = jest.spyOn(client, 'checkDualInvestmentAccounts').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CheckDualInvestmentAccountsResponse>)
            );
            const response = await client.checkDualInvestmentAccounts();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute checkDualInvestmentAccounts() successfully with optional parameters', async () => {
            const params: CheckDualInvestmentAccountsRequest = {
                recvWindow: 5000,
            };

            mockResponse = { totalAmountInBTC: '0.01067982', totalAmountInUSDT: '77.13289230' };

            const spy = jest.spyOn(client, 'checkDualInvestmentAccounts').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CheckDualInvestmentAccountsResponse>)
            );
            const response = await client.checkDualInvestmentAccounts(params);
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
                .spyOn(client, 'checkDualInvestmentAccounts')
                .mockRejectedValueOnce(mockError);
            await expect(client.checkDualInvestmentAccounts()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getDualInvestmentPositions()', () => {
        it('should execute getDualInvestmentPositions() successfully with required parameters only', async () => {
            mockResponse = {
                total: 1,
                list: [
                    {
                        id: '10160533',
                        investCoin: 'USDT',
                        exercisedCoin: 'BNB',
                        subscriptionAmount: '0.5',
                        strikePrice: '330',
                        duration: 4,
                        settleDate: 1708416000000,
                        purchaseStatus: 'PURCHASE_SUCCESS',
                        apr: '0.0365',
                        orderId: 7973677530,
                        purchaseEndTime: 1708329600000,
                        optionType: 'PUT',
                        autoCompoundPlan: 'STANDARD',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'getDualInvestmentPositions').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetDualInvestmentPositionsResponse>)
            );
            const response = await client.getDualInvestmentPositions();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getDualInvestmentPositions() successfully with optional parameters', async () => {
            const params: GetDualInvestmentPositionsRequest = {
                status: 'status_example',
                pageSize: 10,
                pageIndex: 1,
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                list: [
                    {
                        id: '10160533',
                        investCoin: 'USDT',
                        exercisedCoin: 'BNB',
                        subscriptionAmount: '0.5',
                        strikePrice: '330',
                        duration: 4,
                        settleDate: 1708416000000,
                        purchaseStatus: 'PURCHASE_SUCCESS',
                        apr: '0.0365',
                        orderId: 7973677530,
                        purchaseEndTime: 1708329600000,
                        optionType: 'PUT',
                        autoCompoundPlan: 'STANDARD',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'getDualInvestmentPositions').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetDualInvestmentPositionsResponse>)
            );
            const response = await client.getDualInvestmentPositions(params);
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
                .spyOn(client, 'getDualInvestmentPositions')
                .mockRejectedValueOnce(mockError);
            await expect(client.getDualInvestmentPositions()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('subscribeDualInvestmentProducts()', () => {
        it('should execute subscribeDualInvestmentProducts() successfully with required parameters only', async () => {
            const params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
            };

            mockResponse = {
                positionId: 10208824,
                investCoin: 'BNB',
                exercisedCoin: 'USDT',
                subscriptionAmount: '0.002',
                duration: 4,
                autoCompoundPlan: 'STANDARD',
                strikePrice: '380',
                settleDate: 1709020800000,
                purchaseStatus: 'PURCHASE_SUCCESS',
                apr: '0.7397',
                orderId: 8259117597,
                purchaseTime: 1708677583874,
                optionType: 'CALL',
            };

            const spy = jest.spyOn(client, 'subscribeDualInvestmentProducts').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SubscribeDualInvestmentProductsResponse>)
            );
            const response = await client.subscribeDualInvestmentProducts(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute subscribeDualInvestmentProducts() successfully with optional parameters', async () => {
            const params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
                recvWindow: 5000,
            };

            mockResponse = {
                positionId: 10208824,
                investCoin: 'BNB',
                exercisedCoin: 'USDT',
                subscriptionAmount: '0.002',
                duration: 4,
                autoCompoundPlan: 'STANDARD',
                strikePrice: '380',
                settleDate: 1709020800000,
                purchaseStatus: 'PURCHASE_SUCCESS',
                apr: '0.7397',
                orderId: 8259117597,
                purchaseTime: 1708677583874,
                optionType: 'CALL',
            };

            const spy = jest.spyOn(client, 'subscribeDualInvestmentProducts').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SubscribeDualInvestmentProductsResponse>)
            );
            const response = await client.subscribeDualInvestmentProducts(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when id is missing', async () => {
            const _params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
            };
            const params = Object.assign({ ..._params });
            delete params?.id;

            await expect(client.subscribeDualInvestmentProducts(params)).rejects.toThrow(
                'Required parameter id was null or undefined when calling subscribeDualInvestmentProducts.'
            );
        });

        it('should throw RequiredError when orderId is missing', async () => {
            const _params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
            };
            const params = Object.assign({ ..._params });
            delete params?.orderId;

            await expect(client.subscribeDualInvestmentProducts(params)).rejects.toThrow(
                'Required parameter orderId was null or undefined when calling subscribeDualInvestmentProducts.'
            );
        });

        it('should throw RequiredError when depositAmount is missing', async () => {
            const _params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
            };
            const params = Object.assign({ ..._params });
            delete params?.depositAmount;

            await expect(client.subscribeDualInvestmentProducts(params)).rejects.toThrow(
                'Required parameter depositAmount was null or undefined when calling subscribeDualInvestmentProducts.'
            );
        });

        it('should throw RequiredError when autoCompoundPlan is missing', async () => {
            const _params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
            };
            const params = Object.assign({ ..._params });
            delete params?.autoCompoundPlan;

            await expect(client.subscribeDualInvestmentProducts(params)).rejects.toThrow(
                'Required parameter autoCompoundPlan was null or undefined when calling subscribeDualInvestmentProducts.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: SubscribeDualInvestmentProductsRequest = {
                id: 'id_example',
                orderId: '1',
                depositAmount: 1,
                autoCompoundPlan: 'NONE',
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
                .spyOn(client, 'subscribeDualInvestmentProducts')
                .mockRejectedValueOnce(mockError);
            await expect(client.subscribeDualInvestmentProducts(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });
});
