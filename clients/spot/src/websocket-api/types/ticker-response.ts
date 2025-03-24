/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Public Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
 *
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
import type { TickerResponseRateLimitsInner } from './ticker-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { TickerResponseResult } from './ticker-response-result';

/**
 *
 * @export
 * @interface TickerResponse
 */
export interface TickerResponse {
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof TickerResponse
     */
    status?: number;
    /**
     *
     * @type {TickerResponseResult}
     * @memberof TickerResponse
     */
    result?: TickerResponseResult;
    /**
     *
     * @type {Array<TickerResponseRateLimitsInner>}
     * @memberof TickerResponse
     */
    rateLimits?: Array<TickerResponseRateLimitsInner>;
}
