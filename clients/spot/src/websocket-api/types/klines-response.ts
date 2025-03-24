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
import type { AvgPriceResponseRateLimitsInner } from './avg-price-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { KlinesItem } from './klines-item';

/**
 *
 * @export
 * @interface KlinesResponse
 */
export interface KlinesResponse {
    /**
     *
     * @type {string}
     * @memberof KlinesResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof KlinesResponse
     */
    status?: number;
    /**
     *
     * @type {Array<KlinesItem>}
     * @memberof KlinesResponse
     */
    result?: Array<KlinesItem>;
    /**
     *
     * @type {Array<AvgPriceResponseRateLimitsInner>}
     * @memberof KlinesResponse
     */
    rateLimits?: Array<AvgPriceResponseRateLimitsInner>;
}
