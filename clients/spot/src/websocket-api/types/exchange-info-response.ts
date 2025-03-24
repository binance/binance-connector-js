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
import type { ExchangeInfoResponseRateLimitsInner } from './exchange-info-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ExchangeInfoResponseResult } from './exchange-info-response-result';

/**
 *
 * @export
 * @interface ExchangeInfoResponse
 */
export interface ExchangeInfoResponse {
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponse
     */
    status?: number;
    /**
     *
     * @type {ExchangeInfoResponseResult}
     * @memberof ExchangeInfoResponse
     */
    result?: ExchangeInfoResponseResult;
    /**
     *
     * @type {Array<ExchangeInfoResponseRateLimitsInner>}
     * @memberof ExchangeInfoResponse
     */
    rateLimits?: Array<ExchangeInfoResponseRateLimitsInner>;
}
