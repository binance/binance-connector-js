/**
 * Binance Simple Earn REST API
 *
 * OpenAPI Specification for the Binance Simple Earn REST API
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
    GetFlexiblePersonalLeftQuotaRequest,
    GetFlexibleProductPositionRequest,
    GetLockedPersonalLeftQuotaRequest,
    GetLockedProductPositionRequest,
    GetSimpleEarnFlexibleProductListRequest,
    GetSimpleEarnLockedProductListRequest,
    SimpleAccountRequest,
} from '../../../src/rest-api';
import type {
    GetFlexiblePersonalLeftQuotaResponse,
    GetFlexibleProductPositionResponse,
    GetLockedPersonalLeftQuotaResponse,
    GetLockedProductPositionResponse,
    GetSimpleEarnFlexibleProductListResponse,
    GetSimpleEarnLockedProductListResponse,
    SimpleAccountResponse,
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

    describe('getFlexiblePersonalLeftQuota()', () => {
        it('should execute getFlexiblePersonalLeftQuota() successfully with required parameters only', async () => {
            const params: GetFlexiblePersonalLeftQuotaRequest = {
                productId: '1',
            };

            mockResponse = { leftPersonalQuota: '1000' };

            const spy = jest.spyOn(client, 'getFlexiblePersonalLeftQuota').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetFlexiblePersonalLeftQuotaResponse>)
            );
            const response = await client.getFlexiblePersonalLeftQuota(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getFlexiblePersonalLeftQuota() successfully with optional parameters', async () => {
            const params: GetFlexiblePersonalLeftQuotaRequest = {
                productId: '1',
                recvWindow: 5000,
            };

            mockResponse = { leftPersonalQuota: '1000' };

            const spy = jest.spyOn(client, 'getFlexiblePersonalLeftQuota').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetFlexiblePersonalLeftQuotaResponse>)
            );
            const response = await client.getFlexiblePersonalLeftQuota(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when productId is missing', async () => {
            const _params: GetFlexiblePersonalLeftQuotaRequest = {
                productId: '1',
            };
            const params = Object.assign({ ..._params });
            delete params?.productId;

            await expect(client.getFlexiblePersonalLeftQuota(params)).rejects.toThrow(
                'Required parameter productId was null or undefined when calling getFlexiblePersonalLeftQuota.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: GetFlexiblePersonalLeftQuotaRequest = {
                productId: '1',
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
                .spyOn(client, 'getFlexiblePersonalLeftQuota')
                .mockRejectedValueOnce(mockError);
            await expect(client.getFlexiblePersonalLeftQuota(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('getFlexibleProductPosition()', () => {
        it('should execute getFlexibleProductPosition() successfully with required parameters only', async () => {
            mockResponse = {
                rows: [
                    {
                        totalAmount: '75.46000000',
                        tierAnnualPercentageRate: { '0-5BTC': 0.05, '5-10BTC': 0.03 },
                        latestAnnualPercentageRate: '0.02599895',
                        yesterdayAirdropPercentageRate: '0.02599895',
                        asset: 'USDT',
                        airDropAsset: 'BETH',
                        canRedeem: true,
                        collateralAmount: '232.23123213',
                        productId: 'USDT001',
                        yesterdayRealTimeRewards: '0.10293829',
                        cumulativeBonusRewards: '0.22759183',
                        cumulativeRealTimeRewards: '0.22759183',
                        cumulativeTotalRewards: '0.45459183',
                        autoSubscribe: true,
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getFlexibleProductPosition').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetFlexibleProductPositionResponse>)
            );
            const response = await client.getFlexibleProductPosition();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getFlexibleProductPosition() successfully with optional parameters', async () => {
            const params: GetFlexibleProductPositionRequest = {
                asset: 'asset_example',
                productId: '1',
                current: 1,
                size: 10,
                recvWindow: 5000,
            };

            mockResponse = {
                rows: [
                    {
                        totalAmount: '75.46000000',
                        tierAnnualPercentageRate: { '0-5BTC': 0.05, '5-10BTC': 0.03 },
                        latestAnnualPercentageRate: '0.02599895',
                        yesterdayAirdropPercentageRate: '0.02599895',
                        asset: 'USDT',
                        airDropAsset: 'BETH',
                        canRedeem: true,
                        collateralAmount: '232.23123213',
                        productId: 'USDT001',
                        yesterdayRealTimeRewards: '0.10293829',
                        cumulativeBonusRewards: '0.22759183',
                        cumulativeRealTimeRewards: '0.22759183',
                        cumulativeTotalRewards: '0.45459183',
                        autoSubscribe: true,
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getFlexibleProductPosition').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetFlexibleProductPositionResponse>)
            );
            const response = await client.getFlexibleProductPosition(params);
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
                .spyOn(client, 'getFlexibleProductPosition')
                .mockRejectedValueOnce(mockError);
            await expect(client.getFlexibleProductPosition()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getLockedPersonalLeftQuota()', () => {
        it('should execute getLockedPersonalLeftQuota() successfully with required parameters only', async () => {
            const params: GetLockedPersonalLeftQuotaRequest = {
                projectId: '1',
            };

            mockResponse = { leftPersonalQuota: '1000' };

            const spy = jest.spyOn(client, 'getLockedPersonalLeftQuota').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetLockedPersonalLeftQuotaResponse>)
            );
            const response = await client.getLockedPersonalLeftQuota(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getLockedPersonalLeftQuota() successfully with optional parameters', async () => {
            const params: GetLockedPersonalLeftQuotaRequest = {
                projectId: '1',
                recvWindow: 5000,
            };

            mockResponse = { leftPersonalQuota: '1000' };

            const spy = jest.spyOn(client, 'getLockedPersonalLeftQuota').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetLockedPersonalLeftQuotaResponse>)
            );
            const response = await client.getLockedPersonalLeftQuota(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when projectId is missing', async () => {
            const _params: GetLockedPersonalLeftQuotaRequest = {
                projectId: '1',
            };
            const params = Object.assign({ ..._params });
            delete params?.projectId;

            await expect(client.getLockedPersonalLeftQuota(params)).rejects.toThrow(
                'Required parameter projectId was null or undefined when calling getLockedPersonalLeftQuota.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: GetLockedPersonalLeftQuotaRequest = {
                projectId: '1',
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
                .spyOn(client, 'getLockedPersonalLeftQuota')
                .mockRejectedValueOnce(mockError);
            await expect(client.getLockedPersonalLeftQuota(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('getLockedProductPosition()', () => {
        it('should execute getLockedProductPosition() successfully with required parameters only', async () => {
            mockResponse = {
                rows: [
                    {
                        positionId: 123123,
                        parentPositionId: 123122,
                        projectId: 'Axs*90',
                        asset: 'AXS',
                        amount: '122.09202928',
                        purchaseTime: '1646182276000',
                        duration: '60',
                        accrualDays: '4',
                        rewardAsset: 'AXS',
                        APY: '0.2032',
                        rewardAmt: '5.17181528',
                        extraRewardAsset: 'BNB',
                        extraRewardAPR: '0.0203',
                        estExtraRewardAmt: '5.17181528',
                        boostRewardAsset: 'AXS',
                        boostApr: '0.0121',
                        totalBoostRewardAmt: '3.98201829',
                        nextPay: '1.29295383',
                        nextPayDate: '1646697600000',
                        payPeriod: '1',
                        redeemAmountEarly: '2802.24068892',
                        rewardsEndDate: '1651449600000',
                        deliverDate: '1651536000000',
                        redeemPeriod: '1',
                        redeemingAmt: '232.2323',
                        redeemTo: 'FLEXIBLE',
                        partialAmtDeliverDate: '1651536000000',
                        canRedeemEarly: true,
                        canFastRedemption: true,
                        autoSubscribe: true,
                        type: 'AUTO',
                        status: 'HOLDING',
                        canReStake: true,
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getLockedProductPosition').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetLockedProductPositionResponse>)
            );
            const response = await client.getLockedProductPosition();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getLockedProductPosition() successfully with optional parameters', async () => {
            const params: GetLockedProductPositionRequest = {
                asset: 'asset_example',
                positionId: 1,
                projectId: '1',
                current: 1,
                size: 10,
                recvWindow: 5000,
            };

            mockResponse = {
                rows: [
                    {
                        positionId: 123123,
                        parentPositionId: 123122,
                        projectId: 'Axs*90',
                        asset: 'AXS',
                        amount: '122.09202928',
                        purchaseTime: '1646182276000',
                        duration: '60',
                        accrualDays: '4',
                        rewardAsset: 'AXS',
                        APY: '0.2032',
                        rewardAmt: '5.17181528',
                        extraRewardAsset: 'BNB',
                        extraRewardAPR: '0.0203',
                        estExtraRewardAmt: '5.17181528',
                        boostRewardAsset: 'AXS',
                        boostApr: '0.0121',
                        totalBoostRewardAmt: '3.98201829',
                        nextPay: '1.29295383',
                        nextPayDate: '1646697600000',
                        payPeriod: '1',
                        redeemAmountEarly: '2802.24068892',
                        rewardsEndDate: '1651449600000',
                        deliverDate: '1651536000000',
                        redeemPeriod: '1',
                        redeemingAmt: '232.2323',
                        redeemTo: 'FLEXIBLE',
                        partialAmtDeliverDate: '1651536000000',
                        canRedeemEarly: true,
                        canFastRedemption: true,
                        autoSubscribe: true,
                        type: 'AUTO',
                        status: 'HOLDING',
                        canReStake: true,
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getLockedProductPosition').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetLockedProductPositionResponse>)
            );
            const response = await client.getLockedProductPosition(params);
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
                .spyOn(client, 'getLockedProductPosition')
                .mockRejectedValueOnce(mockError);
            await expect(client.getLockedProductPosition()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getSimpleEarnFlexibleProductList()', () => {
        it('should execute getSimpleEarnFlexibleProductList() successfully with required parameters only', async () => {
            mockResponse = {
                rows: [
                    {
                        asset: 'BTC',
                        latestAnnualPercentageRate: '0.05000000',
                        tierAnnualPercentageRate: { '0-5BTC': 0.05, '5-10BTC': 0.03 },
                        airDropPercentageRate: '0.05000000',
                        canPurchase: true,
                        canRedeem: true,
                        isSoldOut: true,
                        hot: true,
                        minPurchaseAmount: '0.01000000',
                        productId: 'BTC001',
                        subscriptionStartTime: '1646182276000',
                        status: 'PURCHASING',
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getSimpleEarnFlexibleProductList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetSimpleEarnFlexibleProductListResponse>)
            );
            const response = await client.getSimpleEarnFlexibleProductList();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getSimpleEarnFlexibleProductList() successfully with optional parameters', async () => {
            const params: GetSimpleEarnFlexibleProductListRequest = {
                asset: 'asset_example',
                current: 1,
                size: 10,
                recvWindow: 5000,
            };

            mockResponse = {
                rows: [
                    {
                        asset: 'BTC',
                        latestAnnualPercentageRate: '0.05000000',
                        tierAnnualPercentageRate: { '0-5BTC': 0.05, '5-10BTC': 0.03 },
                        airDropPercentageRate: '0.05000000',
                        canPurchase: true,
                        canRedeem: true,
                        isSoldOut: true,
                        hot: true,
                        minPurchaseAmount: '0.01000000',
                        productId: 'BTC001',
                        subscriptionStartTime: '1646182276000',
                        status: 'PURCHASING',
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getSimpleEarnFlexibleProductList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetSimpleEarnFlexibleProductListResponse>)
            );
            const response = await client.getSimpleEarnFlexibleProductList(params);
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
                .spyOn(client, 'getSimpleEarnFlexibleProductList')
                .mockRejectedValueOnce(mockError);
            await expect(client.getSimpleEarnFlexibleProductList()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('getSimpleEarnLockedProductList()', () => {
        it('should execute getSimpleEarnLockedProductList() successfully with required parameters only', async () => {
            mockResponse = {
                rows: [
                    {
                        projectId: 'Axs*90',
                        detail: {
                            asset: 'AXS',
                            rewardAsset: 'AXS',
                            duration: 90,
                            renewable: true,
                            isSoldOut: true,
                            apr: '1.2069',
                            status: 'CREATED',
                            subscriptionStartTime: '1646182276000',
                            extraRewardAsset: 'BNB',
                            extraRewardAPR: '0.23',
                            boostRewardAsset: 'AXS',
                            boostApr: '0.0121',
                            boostEndTime: '1646182276000',
                        },
                        quota: { totalPersonalQuota: '2', minimum: '0.001' },
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getSimpleEarnLockedProductList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetSimpleEarnLockedProductListResponse>)
            );
            const response = await client.getSimpleEarnLockedProductList();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getSimpleEarnLockedProductList() successfully with optional parameters', async () => {
            const params: GetSimpleEarnLockedProductListRequest = {
                asset: 'asset_example',
                current: 1,
                size: 10,
                recvWindow: 5000,
            };

            mockResponse = {
                rows: [
                    {
                        projectId: 'Axs*90',
                        detail: {
                            asset: 'AXS',
                            rewardAsset: 'AXS',
                            duration: 90,
                            renewable: true,
                            isSoldOut: true,
                            apr: '1.2069',
                            status: 'CREATED',
                            subscriptionStartTime: '1646182276000',
                            extraRewardAsset: 'BNB',
                            extraRewardAPR: '0.23',
                            boostRewardAsset: 'AXS',
                            boostApr: '0.0121',
                            boostEndTime: '1646182276000',
                        },
                        quota: { totalPersonalQuota: '2', minimum: '0.001' },
                    },
                ],
                total: 1,
            };

            const spy = jest.spyOn(client, 'getSimpleEarnLockedProductList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetSimpleEarnLockedProductListResponse>)
            );
            const response = await client.getSimpleEarnLockedProductList(params);
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
                .spyOn(client, 'getSimpleEarnLockedProductList')
                .mockRejectedValueOnce(mockError);
            await expect(client.getSimpleEarnLockedProductList()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('simpleAccount()', () => {
        it('should execute simpleAccount() successfully with required parameters only', async () => {
            mockResponse = {
                totalAmountInBTC: '0.01067982',
                totalAmountInUSDT: '77.13289230',
                totalFlexibleAmountInBTC: '0.00000000',
                totalFlexibleAmountInUSDT: '0.00000000',
                totalLockedInBTC: '0.01067982',
                totalLockedInUSDT: '77.13289230',
            };

            const spy = jest.spyOn(client, 'simpleAccount').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SimpleAccountResponse>)
            );
            const response = await client.simpleAccount();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute simpleAccount() successfully with optional parameters', async () => {
            const params: SimpleAccountRequest = {
                recvWindow: 5000,
            };

            mockResponse = {
                totalAmountInBTC: '0.01067982',
                totalAmountInUSDT: '77.13289230',
                totalFlexibleAmountInBTC: '0.00000000',
                totalFlexibleAmountInUSDT: '0.00000000',
                totalLockedInBTC: '0.01067982',
                totalLockedInUSDT: '77.13289230',
            };

            const spy = jest.spyOn(client, 'simpleAccount').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<SimpleAccountResponse>)
            );
            const response = await client.simpleAccount(params);
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
            const spy = jest.spyOn(client, 'simpleAccount').mockRejectedValueOnce(mockError);
            await expect(client.simpleAccount()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
