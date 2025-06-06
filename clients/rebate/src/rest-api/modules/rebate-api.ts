/**
 * Binance Rebate REST API
 *
 * OpenAPI Specification for the Binance Rebate REST API
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
import type { GetSpotRebateHistoryRecordsResponse } from '../types';

/**
 * RebateApi - axios parameter creator
 */
const RebateApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * Get Spot Rebate History Records
         *
         * The max interval between startTime and endTime is 30 days.
         * If startTime and endTime are not sent, the recent 7 days' data will be returned.
         * The earliest startTime is supported on June 10, 2020
         * Return up to 200 records per request.
         *
         * Weight: 12000
         *
         * @summary Get Spot Rebate History Records (USER_DATA)
         * @param {number} [startTime]
         * @param {number} [endTime]
         * @param {number} [page] Default 1
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getSpotRebateHistoryRecords: async (
            startTime?: number,
            endTime?: number,
            page?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (startTime !== undefined && startTime !== null) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined && endTime !== null) {
                localVarQueryParameter['endTime'] = endTime;
            }

            if (page !== undefined && page !== null) {
                localVarQueryParameter['page'] = page;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/rebate/taxQuery',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * RebateApi - interface
 * @interface RebateApi
 */
export interface RebateApiInterface {
    /**
     * Get Spot Rebate History Records
     *
     * The max interval between startTime and endTime is 30 days.
     * If startTime and endTime are not sent, the recent 7 days' data will be returned.
     * The earliest startTime is supported on June 10, 2020
     * Return up to 200 records per request.
     *
     * Weight: 12000
     *
     * @summary Get Spot Rebate History Records (USER_DATA)
     * @param {GetSpotRebateHistoryRecordsRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof RebateApiInterface
     */
    getSpotRebateHistoryRecords(
        requestParameters?: GetSpotRebateHistoryRecordsRequest
    ): Promise<RestApiResponse<GetSpotRebateHistoryRecordsResponse>>;
}

/**
 * Request parameters for getSpotRebateHistoryRecords operation in RebateApi.
 * @interface GetSpotRebateHistoryRecordsRequest
 */
export interface GetSpotRebateHistoryRecordsRequest {
    /**
     *
     * @type {number}
     * @memberof RebateApiGetSpotRebateHistoryRecords
     */
    readonly startTime?: number;

    /**
     *
     * @type {number}
     * @memberof RebateApiGetSpotRebateHistoryRecords
     */
    readonly endTime?: number;

    /**
     * Default 1
     * @type {number}
     * @memberof RebateApiGetSpotRebateHistoryRecords
     */
    readonly page?: number;

    /**
     *
     * @type {number}
     * @memberof RebateApiGetSpotRebateHistoryRecords
     */
    readonly recvWindow?: number;
}

/**
 * RebateApi - object-oriented interface
 * @class RebateApi
 */
export class RebateApi implements RebateApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = RebateApiAxiosParamCreator(configuration);
    }

    /**
     * Get Spot Rebate History Records
     *
     * The max interval between startTime and endTime is 30 days.
     * If startTime and endTime are not sent, the recent 7 days' data will be returned.
     * The earliest startTime is supported on June 10, 2020
     * Return up to 200 records per request.
     *
     * Weight: 12000
     *
     * @summary Get Spot Rebate History Records (USER_DATA)
     * @param {GetSpotRebateHistoryRecordsRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetSpotRebateHistoryRecordsResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof RebateApi
     * @see {@link https://developers.binance.com/docs/rebate/rest-api/Get-Spot-Rebate-History-Records Binance API Documentation}
     */
    public async getSpotRebateHistoryRecords(
        requestParameters: GetSpotRebateHistoryRecordsRequest = {}
    ): Promise<RestApiResponse<GetSpotRebateHistoryRecordsResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getSpotRebateHistoryRecords(
            requestParameters?.startTime,
            requestParameters?.endTime,
            requestParameters?.page,
            requestParameters?.recvWindow
        );
        return sendRequest<GetSpotRebateHistoryRecordsResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
