/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures WebSocket API
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
import type { ModifyOrderResponseRateLimitsInner } from './modify-order-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { NewOrderResponseResult } from './new-order-response-result';

/**
 *
 * @export
 * @interface NewOrderResponse
 */
export interface NewOrderResponse {
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof NewOrderResponse
     */
    status?: number;
    /**
     *
     * @type {NewOrderResponseResult}
     * @memberof NewOrderResponse
     */
    result?: NewOrderResponseResult;
    /**
     *
     * @type {Array<ModifyOrderResponseRateLimitsInner>}
     * @memberof NewOrderResponse
     */
    rateLimits?: Array<ModifyOrderResponseRateLimitsInner>;
}
