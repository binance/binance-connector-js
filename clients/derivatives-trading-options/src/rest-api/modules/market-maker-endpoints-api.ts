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

import {
    ConfigurationRestAPI,
    TimeUnit,
    RestApiResponse,
    assertParamExists,
    sendRequest,
    type RequestArgs,
} from '@binance/common';
import type {
    AutoCancelAllOpenOrdersResponse,
    GetAutoCancelAllOpenOrdersResponse,
    GetMarketMakerProtectionConfigResponse,
    OptionMarginAccountInformationResponse,
    ResetMarketMakerProtectionConfigResponse,
    SetAutoCancelAllOpenOrdersResponse,
    SetMarketMakerProtectionConfigResponse,
} from '../types';

/**
 * MarketMakerEndpointsApi - axios parameter creator
 */
const MarketMakerEndpointsApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * This endpoint resets the time from which the countdown will begin to the time this messaged is received.  It should be called repeatedly as heartbeats.  Multiple heartbeats can be updated at once by specifying the underlying symbols as a list (ex. BTCUSDT,ETHUSDT) in the underlyings parameter.
         *
         * The response will only include underlying symbols where the heartbeat has been successfully updated.
         *
         * Weight: 10
         *
         * @summary Auto-Cancel All Open Orders (Kill-Switch) Heartbeat (TRADE)
         * @param {string} underlyings Option Underlying Symbols, e.g BTCUSDT,ETHUSDT
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        autoCancelAllOpenOrders: async (
            underlyings: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'underlyings' is not null or undefined
            assertParamExists('autoCancelAllOpenOrders', 'underlyings', underlyings);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (underlyings !== undefined && underlyings !== null) {
                localVarQueryParameter['underlyings'] = underlyings;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/countdownCancelAllHeartBeat',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This endpoint returns the auto-cancel parameters for each underlying symbol. Note only active auto-cancel parameters will be returned, if countdownTime is set to 0 (ie. countdownTime has been turned off), the underlying symbol and corresponding countdownTime parameter will not be returned in the response.
         *
         * countdownTime = 0 means the function is disabled.
         *
         * Weight: 1
         *
         * @summary Get Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)
         * @param {string} [underlying] underlying, e.g BTCUSDT
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getAutoCancelAllOpenOrders: async (
            underlying?: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (underlying !== undefined && underlying !== null) {
                localVarQueryParameter['underlying'] = underlying;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/countdownCancelAll',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get config for MMP.
         *
         * Weight: 1
         *
         * @summary Get Market Maker Protection Config (TRADE)
         * @param {string} [underlying] underlying, e.g BTCUSDT
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getMarketMakerProtectionConfig: async (
            underlying?: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (underlying !== undefined && underlying !== null) {
                localVarQueryParameter['underlying'] = underlying;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/mmp',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get current account information.
         *
         * Weight: 3
         *
         * @summary Option Margin Account Information (USER_DATA)
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        optionMarginAccountInformation: async (recvWindow?: number): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/marginAccount',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Reset MMP, start MMP order again.
         *
         * Weight: 1
         *
         * @summary Reset Market Maker Protection Config (TRADE)
         * @param {string} [underlying] underlying, e.g BTCUSDT
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        resetMarketMakerProtectionConfig: async (
            underlying?: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (underlying !== undefined && underlying !== null) {
                localVarQueryParameter['underlying'] = underlying;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/mmpReset',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * This endpoint sets the parameters of the auto-cancel feature which cancels all open orders (both market maker protection and non market maker protection order types) of the underlying symbol at the end of the specified countdown time period if no heartbeat message is sent.  After the countdown time period, all open orders will be cancelled and new orders will be rejected with error code -2010 until either a heartbeat message is sent or the auto-cancel feature is turned off by setting countdownTime to 0.
         *
         *
         * This rest endpoint sets up the parameters to cancel your open orders in case of an outage or disconnection.
         * Example usage:
         * Call this endpoint with a countdownTime value of 10000 (10 seconds) to turn on the auto-cancel feature. If the corresponding countdownCancelAllHeartBeat endpoint is not called within 10 seconds with the specified underlying symbol, all open orders of the specified symbol will be automatically canceled. If this endpoint is called with an countdownTime of 0, the countdown timer will be stopped.
         * The system will check all countdowns approximately every 1000 milliseconds, **please note that sufficient redundancy should be considered when using this function**. We do not recommend setting the countdown time to be too precise or too small.
         *
         * Weight: 1
         *
         * @summary Set Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)
         * @param {string} underlying Option underlying, e.g BTCUSDT
         * @param {number} countdownTime Countdown time in milliseconds (ex. 1,000 for 1 second). 0 to disable the timer. Negative values (ex. -10000) are not accepted. Minimum acceptable value is 5,000
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        setAutoCancelAllOpenOrders: async (
            underlying: string,
            countdownTime: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'underlying' is not null or undefined
            assertParamExists('setAutoCancelAllOpenOrders', 'underlying', underlying);
            // verify required parameter 'countdownTime' is not null or undefined
            assertParamExists('setAutoCancelAllOpenOrders', 'countdownTime', countdownTime);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (underlying !== undefined && underlying !== null) {
                localVarQueryParameter['underlying'] = underlying;
            }

            if (countdownTime !== undefined && countdownTime !== null) {
                localVarQueryParameter['countdownTime'] = countdownTime;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/countdownCancelAll',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Set config for MMP.
         * Market Maker Protection(MMP) is a set of protection mechanism for option market maker, this mechanism is able to prevent mass trading in short period time. Once market maker's account branches the threshold, the Market Maker Protection will be triggered. When Market Maker Protection triggers, all the current MMP orders will be canceled, new MMP orders will be rejected. Market maker can use this time to reevaluate market and modify order price.
         *
         * Weight: 1
         *
         * @summary Set Market Maker Protection Config (TRADE)
         * @param {string} [underlying] underlying, e.g BTCUSDT
         * @param {number} [windowTimeInMilliseconds] MMP Interval in milliseconds; Range (0,5000]
         * @param {number} [frozenTimeInMilliseconds] MMP frozen time in milliseconds, if set to 0 manual reset is required
         * @param {number} [qtyLimit] quantity limit
         * @param {number} [deltaLimit] net delta limit
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        setMarketMakerProtectionConfig: async (
            underlying?: string,
            windowTimeInMilliseconds?: number,
            frozenTimeInMilliseconds?: number,
            qtyLimit?: number,
            deltaLimit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (underlying !== undefined && underlying !== null) {
                localVarQueryParameter['underlying'] = underlying;
            }

            if (windowTimeInMilliseconds !== undefined && windowTimeInMilliseconds !== null) {
                localVarQueryParameter['windowTimeInMilliseconds'] = windowTimeInMilliseconds;
            }

            if (frozenTimeInMilliseconds !== undefined && frozenTimeInMilliseconds !== null) {
                localVarQueryParameter['frozenTimeInMilliseconds'] = frozenTimeInMilliseconds;
            }

            if (qtyLimit !== undefined && qtyLimit !== null) {
                localVarQueryParameter['qtyLimit'] = qtyLimit;
            }

            if (deltaLimit !== undefined && deltaLimit !== null) {
                localVarQueryParameter['deltaLimit'] = deltaLimit;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/eapi/v1/mmpSet',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * MarketMakerEndpointsApi - interface
 * @interface MarketMakerEndpointsApi
 */
export interface MarketMakerEndpointsApiInterface {
    /**
     * This endpoint resets the time from which the countdown will begin to the time this messaged is received.  It should be called repeatedly as heartbeats.  Multiple heartbeats can be updated at once by specifying the underlying symbols as a list (ex. BTCUSDT,ETHUSDT) in the underlyings parameter.
     *
     * The response will only include underlying symbols where the heartbeat has been successfully updated.
     *
     * Weight: 10
     *
     * @summary Auto-Cancel All Open Orders (Kill-Switch) Heartbeat (TRADE)
     * @param {AutoCancelAllOpenOrdersRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    autoCancelAllOpenOrders(
        requestParameters: AutoCancelAllOpenOrdersRequest
    ): Promise<RestApiResponse<AutoCancelAllOpenOrdersResponse>>;
    /**
     * This endpoint returns the auto-cancel parameters for each underlying symbol. Note only active auto-cancel parameters will be returned, if countdownTime is set to 0 (ie. countdownTime has been turned off), the underlying symbol and corresponding countdownTime parameter will not be returned in the response.
     *
     * countdownTime = 0 means the function is disabled.
     *
     * Weight: 1
     *
     * @summary Get Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)
     * @param {GetAutoCancelAllOpenOrdersRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    getAutoCancelAllOpenOrders(
        requestParameters?: GetAutoCancelAllOpenOrdersRequest
    ): Promise<RestApiResponse<GetAutoCancelAllOpenOrdersResponse>>;
    /**
     * Get config for MMP.
     *
     * Weight: 1
     *
     * @summary Get Market Maker Protection Config (TRADE)
     * @param {GetMarketMakerProtectionConfigRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    getMarketMakerProtectionConfig(
        requestParameters?: GetMarketMakerProtectionConfigRequest
    ): Promise<RestApiResponse<GetMarketMakerProtectionConfigResponse>>;
    /**
     * Get current account information.
     *
     * Weight: 3
     *
     * @summary Option Margin Account Information (USER_DATA)
     * @param {OptionMarginAccountInformationRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    optionMarginAccountInformation(
        requestParameters?: OptionMarginAccountInformationRequest
    ): Promise<RestApiResponse<OptionMarginAccountInformationResponse>>;
    /**
     * Reset MMP, start MMP order again.
     *
     * Weight: 1
     *
     * @summary Reset Market Maker Protection Config (TRADE)
     * @param {ResetMarketMakerProtectionConfigRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    resetMarketMakerProtectionConfig(
        requestParameters?: ResetMarketMakerProtectionConfigRequest
    ): Promise<RestApiResponse<ResetMarketMakerProtectionConfigResponse>>;
    /**
     * This endpoint sets the parameters of the auto-cancel feature which cancels all open orders (both market maker protection and non market maker protection order types) of the underlying symbol at the end of the specified countdown time period if no heartbeat message is sent.  After the countdown time period, all open orders will be cancelled and new orders will be rejected with error code -2010 until either a heartbeat message is sent or the auto-cancel feature is turned off by setting countdownTime to 0.
     *
     *
     * This rest endpoint sets up the parameters to cancel your open orders in case of an outage or disconnection.
     * Example usage:
     * Call this endpoint with a countdownTime value of 10000 (10 seconds) to turn on the auto-cancel feature. If the corresponding countdownCancelAllHeartBeat endpoint is not called within 10 seconds with the specified underlying symbol, all open orders of the specified symbol will be automatically canceled. If this endpoint is called with an countdownTime of 0, the countdown timer will be stopped.
     * The system will check all countdowns approximately every 1000 milliseconds, **please note that sufficient redundancy should be considered when using this function**. We do not recommend setting the countdown time to be too precise or too small.
     *
     * Weight: 1
     *
     * @summary Set Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)
     * @param {SetAutoCancelAllOpenOrdersRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    setAutoCancelAllOpenOrders(
        requestParameters: SetAutoCancelAllOpenOrdersRequest
    ): Promise<RestApiResponse<SetAutoCancelAllOpenOrdersResponse>>;
    /**
     * Set config for MMP.
     * Market Maker Protection(MMP) is a set of protection mechanism for option market maker, this mechanism is able to prevent mass trading in short period time. Once market maker's account branches the threshold, the Market Maker Protection will be triggered. When Market Maker Protection triggers, all the current MMP orders will be canceled, new MMP orders will be rejected. Market maker can use this time to reevaluate market and modify order price.
     *
     * Weight: 1
     *
     * @summary Set Market Maker Protection Config (TRADE)
     * @param {SetMarketMakerProtectionConfigRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApiInterface
     */
    setMarketMakerProtectionConfig(
        requestParameters?: SetMarketMakerProtectionConfigRequest
    ): Promise<RestApiResponse<SetMarketMakerProtectionConfigResponse>>;
}

/**
 * Request parameters for autoCancelAllOpenOrders operation in MarketMakerEndpointsApi.
 * @interface AutoCancelAllOpenOrdersRequest
 */
export interface AutoCancelAllOpenOrdersRequest {
    /**
     * Option Underlying Symbols, e.g BTCUSDT,ETHUSDT
     * @type {string}
     * @memberof MarketMakerEndpointsApiAutoCancelAllOpenOrders
     */
    readonly underlyings: string;

    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiAutoCancelAllOpenOrders
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getAutoCancelAllOpenOrders operation in MarketMakerEndpointsApi.
 * @interface GetAutoCancelAllOpenOrdersRequest
 */
export interface GetAutoCancelAllOpenOrdersRequest {
    /**
     * underlying, e.g BTCUSDT
     * @type {string}
     * @memberof MarketMakerEndpointsApiGetAutoCancelAllOpenOrders
     */
    readonly underlying?: string;

    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiGetAutoCancelAllOpenOrders
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getMarketMakerProtectionConfig operation in MarketMakerEndpointsApi.
 * @interface GetMarketMakerProtectionConfigRequest
 */
export interface GetMarketMakerProtectionConfigRequest {
    /**
     * underlying, e.g BTCUSDT
     * @type {string}
     * @memberof MarketMakerEndpointsApiGetMarketMakerProtectionConfig
     */
    readonly underlying?: string;

    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiGetMarketMakerProtectionConfig
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for optionMarginAccountInformation operation in MarketMakerEndpointsApi.
 * @interface OptionMarginAccountInformationRequest
 */
export interface OptionMarginAccountInformationRequest {
    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiOptionMarginAccountInformation
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for resetMarketMakerProtectionConfig operation in MarketMakerEndpointsApi.
 * @interface ResetMarketMakerProtectionConfigRequest
 */
export interface ResetMarketMakerProtectionConfigRequest {
    /**
     * underlying, e.g BTCUSDT
     * @type {string}
     * @memberof MarketMakerEndpointsApiResetMarketMakerProtectionConfig
     */
    readonly underlying?: string;

    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiResetMarketMakerProtectionConfig
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for setAutoCancelAllOpenOrders operation in MarketMakerEndpointsApi.
 * @interface SetAutoCancelAllOpenOrdersRequest
 */
export interface SetAutoCancelAllOpenOrdersRequest {
    /**
     * Option underlying, e.g BTCUSDT
     * @type {string}
     * @memberof MarketMakerEndpointsApiSetAutoCancelAllOpenOrders
     */
    readonly underlying: string;

    /**
     * Countdown time in milliseconds (ex. 1,000 for 1 second). 0 to disable the timer. Negative values (ex. -10000) are not accepted. Minimum acceptable value is 5,000
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetAutoCancelAllOpenOrders
     */
    readonly countdownTime: number;

    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetAutoCancelAllOpenOrders
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for setMarketMakerProtectionConfig operation in MarketMakerEndpointsApi.
 * @interface SetMarketMakerProtectionConfigRequest
 */
export interface SetMarketMakerProtectionConfigRequest {
    /**
     * underlying, e.g BTCUSDT
     * @type {string}
     * @memberof MarketMakerEndpointsApiSetMarketMakerProtectionConfig
     */
    readonly underlying?: string;

    /**
     * MMP Interval in milliseconds; Range (0,5000]
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetMarketMakerProtectionConfig
     */
    readonly windowTimeInMilliseconds?: number;

    /**
     * MMP frozen time in milliseconds, if set to 0 manual reset is required
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetMarketMakerProtectionConfig
     */
    readonly frozenTimeInMilliseconds?: number;

    /**
     * quantity limit
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetMarketMakerProtectionConfig
     */
    readonly qtyLimit?: number;

    /**
     * net delta limit
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetMarketMakerProtectionConfig
     */
    readonly deltaLimit?: number;

    /**
     *
     * @type {number}
     * @memberof MarketMakerEndpointsApiSetMarketMakerProtectionConfig
     */
    readonly recvWindow?: number;
}

/**
 * MarketMakerEndpointsApi - object-oriented interface
 * @class MarketMakerEndpointsApi
 */
export class MarketMakerEndpointsApi implements MarketMakerEndpointsApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = MarketMakerEndpointsApiAxiosParamCreator(configuration);
    }

    /**
     * This endpoint resets the time from which the countdown will begin to the time this messaged is received.  It should be called repeatedly as heartbeats.  Multiple heartbeats can be updated at once by specifying the underlying symbols as a list (ex. BTCUSDT,ETHUSDT) in the underlyings parameter.
     *
     * The response will only include underlying symbols where the heartbeat has been successfully updated.
     *
     * Weight: 10
     *
     * @summary Auto-Cancel All Open Orders (Kill-Switch) Heartbeat (TRADE)
     * @param {AutoCancelAllOpenOrdersRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<AutoCancelAllOpenOrdersResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Auto-Cancel-All-Open-Orders-Heartbeat Binance API Documentation}
     */
    public async autoCancelAllOpenOrders(
        requestParameters: AutoCancelAllOpenOrdersRequest
    ): Promise<RestApiResponse<AutoCancelAllOpenOrdersResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.autoCancelAllOpenOrders(
            requestParameters?.underlyings,
            requestParameters?.recvWindow
        );
        return sendRequest<AutoCancelAllOpenOrdersResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This endpoint returns the auto-cancel parameters for each underlying symbol. Note only active auto-cancel parameters will be returned, if countdownTime is set to 0 (ie. countdownTime has been turned off), the underlying symbol and corresponding countdownTime parameter will not be returned in the response.
     *
     * countdownTime = 0 means the function is disabled.
     *
     * Weight: 1
     *
     * @summary Get Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)
     * @param {GetAutoCancelAllOpenOrdersRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetAutoCancelAllOpenOrdersResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Get-Auto-Cancel-All-Open-Orders-Config Binance API Documentation}
     */
    public async getAutoCancelAllOpenOrders(
        requestParameters: GetAutoCancelAllOpenOrdersRequest = {}
    ): Promise<RestApiResponse<GetAutoCancelAllOpenOrdersResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getAutoCancelAllOpenOrders(
            requestParameters?.underlying,
            requestParameters?.recvWindow
        );
        return sendRequest<GetAutoCancelAllOpenOrdersResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get config for MMP.
     *
     * Weight: 1
     *
     * @summary Get Market Maker Protection Config (TRADE)
     * @param {GetMarketMakerProtectionConfigRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetMarketMakerProtectionConfigResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Get-Market-Maker-Protection-Config Binance API Documentation}
     */
    public async getMarketMakerProtectionConfig(
        requestParameters: GetMarketMakerProtectionConfigRequest = {}
    ): Promise<RestApiResponse<GetMarketMakerProtectionConfigResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.getMarketMakerProtectionConfig(
                requestParameters?.underlying,
                requestParameters?.recvWindow
            );
        return sendRequest<GetMarketMakerProtectionConfigResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get current account information.
     *
     * Weight: 3
     *
     * @summary Option Margin Account Information (USER_DATA)
     * @param {OptionMarginAccountInformationRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<OptionMarginAccountInformationResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Option-Margin-Account-Information Binance API Documentation}
     */
    public async optionMarginAccountInformation(
        requestParameters: OptionMarginAccountInformationRequest = {}
    ): Promise<RestApiResponse<OptionMarginAccountInformationResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.optionMarginAccountInformation(
                requestParameters?.recvWindow
            );
        return sendRequest<OptionMarginAccountInformationResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Reset MMP, start MMP order again.
     *
     * Weight: 1
     *
     * @summary Reset Market Maker Protection Config (TRADE)
     * @param {ResetMarketMakerProtectionConfigRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<ResetMarketMakerProtectionConfigResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Reset-Market-Maker-Protection-Config Binance API Documentation}
     */
    public async resetMarketMakerProtectionConfig(
        requestParameters: ResetMarketMakerProtectionConfigRequest = {}
    ): Promise<RestApiResponse<ResetMarketMakerProtectionConfigResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.resetMarketMakerProtectionConfig(
                requestParameters?.underlying,
                requestParameters?.recvWindow
            );
        return sendRequest<ResetMarketMakerProtectionConfigResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * This endpoint sets the parameters of the auto-cancel feature which cancels all open orders (both market maker protection and non market maker protection order types) of the underlying symbol at the end of the specified countdown time period if no heartbeat message is sent.  After the countdown time period, all open orders will be cancelled and new orders will be rejected with error code -2010 until either a heartbeat message is sent or the auto-cancel feature is turned off by setting countdownTime to 0.
     *
     *
     * This rest endpoint sets up the parameters to cancel your open orders in case of an outage or disconnection.
     * Example usage:
     * Call this endpoint with a countdownTime value of 10000 (10 seconds) to turn on the auto-cancel feature. If the corresponding countdownCancelAllHeartBeat endpoint is not called within 10 seconds with the specified underlying symbol, all open orders of the specified symbol will be automatically canceled. If this endpoint is called with an countdownTime of 0, the countdown timer will be stopped.
     * The system will check all countdowns approximately every 1000 milliseconds, **please note that sufficient redundancy should be considered when using this function**. We do not recommend setting the countdown time to be too precise or too small.
     *
     * Weight: 1
     *
     * @summary Set Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)
     * @param {SetAutoCancelAllOpenOrdersRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<SetAutoCancelAllOpenOrdersResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Set-Auto-Cancel-All-Open-Orders-Config Binance API Documentation}
     */
    public async setAutoCancelAllOpenOrders(
        requestParameters: SetAutoCancelAllOpenOrdersRequest
    ): Promise<RestApiResponse<SetAutoCancelAllOpenOrdersResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.setAutoCancelAllOpenOrders(
            requestParameters?.underlying,
            requestParameters?.countdownTime,
            requestParameters?.recvWindow
        );
        return sendRequest<SetAutoCancelAllOpenOrdersResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Set config for MMP.
     * Market Maker Protection(MMP) is a set of protection mechanism for option market maker, this mechanism is able to prevent mass trading in short period time. Once market maker's account branches the threshold, the Market Maker Protection will be triggered. When Market Maker Protection triggers, all the current MMP orders will be canceled, new MMP orders will be rejected. Market maker can use this time to reevaluate market and modify order price.
     *
     * Weight: 1
     *
     * @summary Set Market Maker Protection Config (TRADE)
     * @param {SetMarketMakerProtectionConfigRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<SetMarketMakerProtectionConfigResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof MarketMakerEndpointsApi
     * @see {@link https://developers.binance.com/docs/derivatives/option/market-maker-endpoints/Set-Market-Maker-Protection-Config Binance API Documentation}
     */
    public async setMarketMakerProtectionConfig(
        requestParameters: SetMarketMakerProtectionConfigRequest = {}
    ): Promise<RestApiResponse<SetMarketMakerProtectionConfigResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.setMarketMakerProtectionConfig(
                requestParameters?.underlying,
                requestParameters?.windowTimeInMilliseconds,
                requestParameters?.frozenTimeInMilliseconds,
                requestParameters?.qtyLimit,
                requestParameters?.deltaLimit,
                requestParameters?.recvWindow
            );
        return sendRequest<SetMarketMakerProtectionConfigResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
