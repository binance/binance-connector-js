/* tslint:disable */
/* eslint-disable */

/**
 * Binance Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Spot WebSocket API
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
import type { TickerBookResponse1Result } from './ticker-book-response1-result';
// May contain unused imports in some cases
// @ts-ignore
import type { TickerResponse1RateLimitsInner } from './ticker-response1-rate-limits-inner';

/**
 *
 * @export
 * @interface TickerBookResponse2
 */
export interface TickerBookResponse2 {
    /**
     *
     * @type {string}
     * @memberof TickerBookResponse2
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof TickerBookResponse2
     */
    status?: number;
    /**
     *
     * @type {Array<TickerBookResponse1Result>}
     * @memberof TickerBookResponse2
     */
    result?: Array<TickerBookResponse1Result>;
    /**
     *
     * @type {Array<TickerResponse1RateLimitsInner>}
     * @memberof TickerBookResponse2
     */
    rateLimits?: Array<TickerResponse1RateLimitsInner>;
}
