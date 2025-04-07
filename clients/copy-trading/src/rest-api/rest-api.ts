/**
 * Binance Copy Trading REST API
 *
 * OpenAPI Specification for the Binance Copy Trading REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConfigurationRestAPI, RestApiResponse, sendRequest } from '@binance/common';
import { FutureCopyTradingApi } from './modules/future-copy-trading-api';

import type {
    GetFuturesLeadTraderStatusRequest,
    GetFuturesLeadTradingSymbolWhitelistRequest,
} from './modules/future-copy-trading-api';

import type {
    GetFuturesLeadTraderStatusResponse,
    GetFuturesLeadTradingSymbolWhitelistResponse,
} from './types';

export class RestAPI {
    private configuration: ConfigurationRestAPI;
    private futureCopyTradingApi: FutureCopyTradingApi;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.futureCopyTradingApi = new FutureCopyTradingApi(configuration);
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
     * Get Futures Lead Trader Status
     *
     * Weight: 20
     *
     * @summary Get Futures Lead Trader Status(TRADE)
     * @param {GetFuturesLeadTraderStatusRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetFuturesLeadTraderStatusResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/copy_trading/future-copy-trading/Get-Futures-Lead-Trader-Status Binance API Documentation}
     */
    getFuturesLeadTraderStatus(
        requestParameters: GetFuturesLeadTraderStatusRequest = {}
    ): Promise<RestApiResponse<GetFuturesLeadTraderStatusResponse>> {
        return this.futureCopyTradingApi.getFuturesLeadTraderStatus(requestParameters);
    }

    /**
     * Get Futures Lead Trading Symbol Whitelist
     *
     * Weight: 20
     *
     * @summary Get Futures Lead Trading Symbol Whitelist(USER_DATA)
     * @param {GetFuturesLeadTradingSymbolWhitelistRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetFuturesLeadTradingSymbolWhitelistResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @see {@link https://developers.binance.com/docs/copy_trading/future-copy-trading/Get-Futures-Lead-Trading-Symbol-Whitelist Binance API Documentation}
     */
    getFuturesLeadTradingSymbolWhitelist(
        requestParameters: GetFuturesLeadTradingSymbolWhitelistRequest = {}
    ): Promise<RestApiResponse<GetFuturesLeadTradingSymbolWhitelistResponse>> {
        return this.futureCopyTradingApi.getFuturesLeadTradingSymbolWhitelist(requestParameters);
    }
}
