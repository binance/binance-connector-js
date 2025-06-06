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
import type { AccountInformationV2ResponseRateLimitsInner } from './account-information-v2-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { PositionInformationV2ResponseResultInner } from './position-information-v2-response-result-inner';

/**
 *
 * @export
 * @interface PositionInformationV2Response
 */
export interface PositionInformationV2Response {
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof PositionInformationV2Response
     */
    status?: number;
    /**
     *
     * @type {Array<PositionInformationV2ResponseResultInner>}
     * @memberof PositionInformationV2Response
     */
    result?: Array<PositionInformationV2ResponseResultInner>;
    /**
     *
     * @type {Array<AccountInformationV2ResponseRateLimitsInner>}
     * @memberof PositionInformationV2Response
     */
    rateLimits?: Array<AccountInformationV2ResponseRateLimitsInner>;
}
