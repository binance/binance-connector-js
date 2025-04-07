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

import {
    ConfigurationRestAPI,
    TimeUnit,
    RestApiResponse,
    sendRequest,
    type RequestArgs,
} from '@binance/common';
import type {
    ListAllConvertPairsResponse,
    QueryOrderQuantityPrecisionPerAssetResponse,
} from '../types';

/**
 * MarketDataApi - axios parameter creator
 */
const MarketDataApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * Query for all convertible token pairs and the tokens’ respective upper/lower limits
         *
         * User needs to supply either or both of the input parameter
         * If not defined for both fromAsset and toAsset, only partial token pairs will be returned
         *
         * Weight: 3000(IP)
         *
         * @summary List All Convert Pairs
         * @param {string} [fromAsset] User spends coin
         * @param {string} [toAsset] User receives coin
         *
         * @throws {RequiredError}
         */
        listAllConvertPairs: async (fromAsset?: string, toAsset?: string): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (fromAsset !== undefined && fromAsset !== null) {
                localVarQueryParameter['fromAsset'] = fromAsset;
            }

            if (toAsset !== undefined && toAsset !== null) {
                localVarQueryParameter['toAsset'] = toAsset;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/exchangeInfo',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Query for supported asset’s precision information
         *
         * Weight: 100(IP)
         *
         * @summary Query order quantity precision per asset(USER_DATA)
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        queryOrderQuantityPrecisionPerAsset: async (recvWindow?: number): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/assetInfo',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * MarketDataApi - interface
 * @interface MarketDataApi
 */
export interface MarketDataApiInterface {
    /**
     * Query for all convertible token pairs and the tokens’ respective upper/lower limits
     *
     * User needs to supply either or both of the input parameter
     * If not defined for both fromAsset and toAsset, only partial token pairs will be returned
     *
     * Weight: 3000(IP)
     *
     * @summary List All Convert Pairs
     * @param {ListAllConvertPairsRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    listAllConvertPairs(
        requestParameters?: ListAllConvertPairsRequest
    ): Promise<RestApiResponse<ListAllConvertPairsResponse>>;
    /**
     * Query for supported asset’s precision information
     *
     * Weight: 100(IP)
     *
     * @summary Query order quantity precision per asset(USER_DATA)
     * @param {QueryOrderQuantityPrecisionPerAssetRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApiInterface
     */
    queryOrderQuantityPrecisionPerAsset(
        requestParameters?: QueryOrderQuantityPrecisionPerAssetRequest
    ): Promise<RestApiResponse<QueryOrderQuantityPrecisionPerAssetResponse>>;
}

/**
 * Request parameters for listAllConvertPairs operation in MarketDataApi.
 * @interface ListAllConvertPairsRequest
 */
export interface ListAllConvertPairsRequest {
    /**
     * User spends coin
     * @type {string}
     * @memberof MarketDataApiListAllConvertPairs
     */
    readonly fromAsset?: string;

    /**
     * User receives coin
     * @type {string}
     * @memberof MarketDataApiListAllConvertPairs
     */
    readonly toAsset?: string;
}

/**
 * Request parameters for queryOrderQuantityPrecisionPerAsset operation in MarketDataApi.
 * @interface QueryOrderQuantityPrecisionPerAssetRequest
 */
export interface QueryOrderQuantityPrecisionPerAssetRequest {
    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof MarketDataApiQueryOrderQuantityPrecisionPerAsset
     */
    readonly recvWindow?: number;
}

/**
 * MarketDataApi - object-oriented interface
 * @class MarketDataApi
 */
export class MarketDataApi implements MarketDataApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = MarketDataApiAxiosParamCreator(configuration);
    }

    /**
     * Query for all convertible token pairs and the tokens’ respective upper/lower limits
     *
     * User needs to supply either or both of the input parameter
     * If not defined for both fromAsset and toAsset, only partial token pairs will be returned
     *
     * Weight: 3000(IP)
     *
     * @summary List All Convert Pairs
     * @param {ListAllConvertPairsRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<ListAllConvertPairsResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/convert/market-data/List-All-Convert-Pairs Binance API Documentation}
     */
    public async listAllConvertPairs(
        requestParameters: ListAllConvertPairsRequest = {}
    ): Promise<RestApiResponse<ListAllConvertPairsResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.listAllConvertPairs(
            requestParameters?.fromAsset,
            requestParameters?.toAsset
        );
        return sendRequest<ListAllConvertPairsResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: false }
        );
    }

    /**
     * Query for supported asset’s precision information
     *
     * Weight: 100(IP)
     *
     * @summary Query order quantity precision per asset(USER_DATA)
     * @param {QueryOrderQuantityPrecisionPerAssetRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryOrderQuantityPrecisionPerAssetResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketDataApi
     * @see {@link https://developers.binance.com/docs/convert/market-data/Query-order-quantity-precision-per-asset Binance API Documentation}
     */
    public async queryOrderQuantityPrecisionPerAsset(
        requestParameters: QueryOrderQuantityPrecisionPerAssetRequest = {}
    ): Promise<RestApiResponse<QueryOrderQuantityPrecisionPerAssetResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.queryOrderQuantityPrecisionPerAsset(
                requestParameters?.recvWindow
            );
        return sendRequest<QueryOrderQuantityPrecisionPerAssetResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
