/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { GetConvertTradeHistoryResponseListInner } from './get-convert-trade-history-response-list-inner';

/**
 *
 * @export
 * @interface GetConvertTradeHistoryResponse
 */
export interface GetConvertTradeHistoryResponse {
    /**
     *
     * @type {Array<GetConvertTradeHistoryResponseListInner>}
     * @memberof GetConvertTradeHistoryResponse
     */
    list?: Array<GetConvertTradeHistoryResponseListInner>;
    /**
     *
     * @type {number}
     * @memberof GetConvertTradeHistoryResponse
     */
    startTime?: number;
    /**
     *
     * @type {number}
     * @memberof GetConvertTradeHistoryResponse
     */
    endTime?: number;
    /**
     *
     * @type {number}
     * @memberof GetConvertTradeHistoryResponse
     */
    limit?: number;
    /**
     *
     * @type {boolean}
     * @memberof GetConvertTradeHistoryResponse
     */
    moreData?: boolean;
}
