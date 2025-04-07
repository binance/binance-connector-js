/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket API
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
}
