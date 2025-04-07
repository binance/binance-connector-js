/* tslint:disable */

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

/**
 *
 * @export
 * @interface AccountInformationV2Response1RateLimitsInner
 */
export interface AccountInformationV2Response1RateLimitsInner {
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1RateLimitsInner
     */
    rateLimitType?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1RateLimitsInner
     */
    interval?: string;
    /**
     *
     * @type {number}
     * @memberof AccountInformationV2Response1RateLimitsInner
     */
    intervalNum?: number;
    /**
     *
     * @type {number}
     * @memberof AccountInformationV2Response1RateLimitsInner
     */
    limit?: number;
    /**
     *
     * @type {number}
     * @memberof AccountInformationV2Response1RateLimitsInner
     */
    count?: number;
}
