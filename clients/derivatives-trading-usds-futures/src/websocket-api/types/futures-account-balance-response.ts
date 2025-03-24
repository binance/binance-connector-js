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
import type { AccountInformationV2Response1RateLimitsInner } from './account-information-v2-response1-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { FuturesAccountBalanceV2ResponseResultInner } from './futures-account-balance-v2-response-result-inner';

/**
 *
 * @export
 * @interface FuturesAccountBalanceResponse
 */
export interface FuturesAccountBalanceResponse {
    /**
     *
     * @type {string}
     * @memberof FuturesAccountBalanceResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof FuturesAccountBalanceResponse
     */
    status?: number;
    /**
     *
     * @type {Array<FuturesAccountBalanceV2ResponseResultInner>}
     * @memberof FuturesAccountBalanceResponse
     */
    result?: Array<FuturesAccountBalanceV2ResponseResultInner>;
    /**
     *
     * @type {Array<AccountInformationV2Response1RateLimitsInner>}
     * @memberof FuturesAccountBalanceResponse
     */
    rateLimits?: Array<AccountInformationV2Response1RateLimitsInner>;
}
