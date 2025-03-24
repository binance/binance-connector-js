/**
 * Binance Public Wallet REST API
 *
 * OpenAPI Specification for the Binance Public Wallet REST API
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
import type { GetSymbolsDelistScheduleForSpotResponse, SystemStatusResponse } from '../types';

/**
 * OthersApi - axios parameter creator
 */
const OthersApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * Get symbols delist schedule for spot
         *
         * Weight: 100
         *
         * @summary Get symbols delist schedule for spot (MARKET_DATA)
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getSymbolsDelistScheduleForSpot: async (recvWindow?: number): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/spot/delist-schedule',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Fetch system status.
         *
         * Weight: 1
         *
         * @summary System Status (System)
         *
         * @throws {RequiredError}
         */
        systemStatus: async (): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/system/status',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * OthersApi - interface
 * @interface OthersApi
 */
export interface OthersApiInterface {
    /**
     * Get symbols delist schedule for spot
     *
     * Weight: 100
     *
     * @summary Get symbols delist schedule for spot (MARKET_DATA)
     * @param {GetSymbolsDelistScheduleForSpotRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof OthersApiInterface
     */
    getSymbolsDelistScheduleForSpot(
        requestParameters?: GetSymbolsDelistScheduleForSpotRequest
    ): Promise<RestApiResponse<GetSymbolsDelistScheduleForSpotResponse>>;
    /**
     * Fetch system status.
     *
     * Weight: 1
     *
     * @summary System Status (System)
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof OthersApiInterface
     */
    systemStatus(): Promise<RestApiResponse<SystemStatusResponse>>;
}

/**
 * Request parameters for getSymbolsDelistScheduleForSpot operation in OthersApi.
 * @interface GetSymbolsDelistScheduleForSpotRequest
 */
export interface GetSymbolsDelistScheduleForSpotRequest {
    /**
     *
     * @type {number}
     * @memberof OthersApiGetSymbolsDelistScheduleForSpot
     */
    readonly recvWindow?: number;
}

/**
 * OthersApi - object-oriented interface
 * @class OthersApi
 */
export class OthersApi implements OthersApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = OthersApiAxiosParamCreator(configuration);
    }

    /**
     * Get symbols delist schedule for spot
     *
     * Weight: 100
     *
     * @summary Get symbols delist schedule for spot (MARKET_DATA)
     * @param {GetSymbolsDelistScheduleForSpotRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetSymbolsDelistScheduleForSpotResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof OthersApi
     * @see {@link https://developers.binance.com/docs/wallet/others/delist-schedule Binance API Documentation}
     */
    public async getSymbolsDelistScheduleForSpot(
        requestParameters: GetSymbolsDelistScheduleForSpotRequest = {}
    ): Promise<RestApiResponse<GetSymbolsDelistScheduleForSpotResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.getSymbolsDelistScheduleForSpot(
                requestParameters?.recvWindow
            );
        return sendRequest<GetSymbolsDelistScheduleForSpotResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: false }
        );
    }

    /**
     * Fetch system status.
     *
     * Weight: 1
     *
     * @summary System Status (System)
     * @returns {Promise<RestApiResponse<SystemStatusResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof OthersApi
     * @see {@link https://developers.binance.com/docs/wallet/others/System-Status Binance API Documentation}
     */
    public async systemStatus(): Promise<RestApiResponse<SystemStatusResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.systemStatus();
        return sendRequest<SystemStatusResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: false }
        );
    }
}
