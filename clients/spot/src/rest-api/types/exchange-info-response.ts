/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Spot REST API
 *
 * OpenAPI Specifications for the Binance Public Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
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
import type { ExchangeInfoResponseSymbolsInner } from './exchange-info-response-symbols-inner';

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
    timezone?: string;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponse
     */
    serverTime?: number;
    /**
     *
     * @type {Array<ExchangeInfoResponseRateLimitsInner>}
     * @memberof ExchangeInfoResponse
     */
    rateLimits?: Array<ExchangeInfoResponseRateLimitsInner>;
    /**
     *
     * @type {Array<string>}
     * @memberof ExchangeInfoResponse
     */
    exchangeFilters?: Array<string>;
    /**
     *
     * @type {Array<ExchangeInfoResponseSymbolsInner>}
     * @memberof ExchangeInfoResponse
     */
    symbols?: Array<ExchangeInfoResponseSymbolsInner>;
}
