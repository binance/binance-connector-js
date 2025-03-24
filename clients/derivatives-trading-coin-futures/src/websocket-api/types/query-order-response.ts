/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Derivatives Trading COIN Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures WebSocket API
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
import type { CancelOrderResponseRateLimitsInner } from './cancel-order-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { QueryOrderResponseResult } from './query-order-response-result';

/**
 *
 * @export
 * @interface QueryOrderResponse
 */
export interface QueryOrderResponse {
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponse
     */
    status?: number;
    /**
     *
     * @type {QueryOrderResponseResult}
     * @memberof QueryOrderResponse
     */
    result?: QueryOrderResponseResult;
    /**
     *
     * @type {Array<CancelOrderResponseRateLimitsInner>}
     * @memberof QueryOrderResponse
     */
    rateLimits?: Array<CancelOrderResponseRateLimitsInner>;
}
