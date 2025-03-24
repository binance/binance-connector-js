/**
 * Binance Public NFT REST API
 *
 * OpenAPI Specification for the Binance Public NFT REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConfigurationRestAPI, RestApiResponse, sendRequest } from '@binance/common';
import { NftApi } from './modules/nft-api';

import type {
    GetNFTAssetRequest,
    GetNFTDepositHistoryRequest,
    GetNFTTransactionHistoryRequest,
    GetNFTWithdrawHistoryRequest,
} from './modules/nft-api';

import type {
    GetNFTAssetResponse,
    GetNFTDepositHistoryResponse,
    GetNFTTransactionHistoryResponse,
    GetNFTWithdrawHistoryResponse,
} from './types';

export class RestAPI {
    private configuration: ConfigurationRestAPI;
    private nftApi: NftApi;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.nftApi = new NftApi(configuration);
    }

    /**
     * Generic function to send a request.
     * @param endpoint - The API endpoint to call.
     * @param method - HTTP method to use (GET, POST, DELETE, etc.).
     * @param params - Query parameters for the request.
     *
     * @returns A promise resolving to the response data object.
     */
    sendRequest<T>(
        endpoint: string,
        method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
        params: Record<string, unknown> = {}
    ): Promise<RestApiResponse<T>> {
        return sendRequest<T>(this.configuration, endpoint, method, params, undefined);
    }

    /**
     * Generic function to send a signed request.
     * @param endpoint - The API endpoint to call.
     * @param method - HTTP method to use (GET, POST, DELETE, etc.).
     * @param params - Query parameters for the request.
     *
     * @returns A promise resolving to the response data object.
     */
    sendSignedRequest<T>(
        endpoint: string,
        method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
        params: Record<string, unknown> = {}
    ): Promise<RestApiResponse<T>> {
        return sendRequest<T>(this.configuration, endpoint, method, params, undefined, {
            isSigned: true,
        });
    }

    /**
     * Get NFT Asset
     *
     * Weight: 3000
     *
     * @summary Get NFT Asset(USER_DATA)
     * @param {GetNFTAssetRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetNFTAssetResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/nft/rest-api/Get-NFT-Asset Binance API Documentation}
     */
    getNFTAsset(
        requestParameters: GetNFTAssetRequest = {}
    ): Promise<RestApiResponse<GetNFTAssetResponse>> {
        return this.nftApi.getNFTAsset(requestParameters);
    }

    /**
     * et NFT Deposit History
     *
     *
     * The max interval between startTime and endTime is 90 days.
     * If startTime and endTime are not sent, the recent 7 days' data will be returned.
     *
     * Weight: 3000
     *
     * @summary Get NFT Deposit History(USER_DATA)
     * @param {GetNFTDepositHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetNFTDepositHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/nft/rest-api/Get-NFT-Deposit-History Binance API Documentation}
     */
    getNFTDepositHistory(
        requestParameters: GetNFTDepositHistoryRequest = {}
    ): Promise<RestApiResponse<GetNFTDepositHistoryResponse>> {
        return this.nftApi.getNFTDepositHistory(requestParameters);
    }

    /**
     * Get NFT Transaction History
     *
     * The max interval between startTime and endTime is 90 days.
     * If startTime and endTime are not sent, the recent 7 days' data will be returned.
     *
     * Weight: 3000
     *
     * @summary Get NFT Transaction History(USER_DATA)
     * @param {GetNFTTransactionHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetNFTTransactionHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/nft/rest-api/Get-NFT-Transaction-History Binance API Documentation}
     */
    getNFTTransactionHistory(
        requestParameters: GetNFTTransactionHistoryRequest
    ): Promise<RestApiResponse<GetNFTTransactionHistoryResponse>> {
        return this.nftApi.getNFTTransactionHistory(requestParameters);
    }

    /**
     * Get NFT Withdraw History
     *
     * The max interval between startTime and endTime is 90 days.
     * If startTime and endTime are not sent, the recent 7 days' data will be returned.
     *
     * Weight: 3000
     *
     * @summary Get NFT Withdraw History(USER_DATA)
     * @param {GetNFTWithdrawHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetNFTWithdrawHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/nft/rest-api/Get-NFT-Withdraw-History Binance API Documentation}
     */
    getNFTWithdrawHistory(
        requestParameters: GetNFTWithdrawHistoryRequest = {}
    ): Promise<RestApiResponse<GetNFTWithdrawHistoryResponse>> {
        return this.nftApi.getNFTWithdrawHistory(requestParameters);
    }
}
