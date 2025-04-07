/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
import type { QueryUserNegativeBalanceAutoExchangeRecordResponseRowsInner } from './query-user-negative-balance-auto-exchange-record-response-rows-inner';

/**
 *
 * @export
 * @interface QueryUserNegativeBalanceAutoExchangeRecordResponse
 */
export interface QueryUserNegativeBalanceAutoExchangeRecordResponse {
    /**
     *
     * @type {number}
     * @memberof QueryUserNegativeBalanceAutoExchangeRecordResponse
     */
    total?: number;
    /**
     *
     * @type {Array<QueryUserNegativeBalanceAutoExchangeRecordResponseRowsInner>}
     * @memberof QueryUserNegativeBalanceAutoExchangeRecordResponse
     */
    rows?: Array<QueryUserNegativeBalanceAutoExchangeRecordResponseRowsInner>;
}
