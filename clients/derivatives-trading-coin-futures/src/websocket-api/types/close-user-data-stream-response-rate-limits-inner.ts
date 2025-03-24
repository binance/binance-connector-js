/* tslint:disable */

/**
 * Binance Public Derivatives Trading COIN Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures WebSocket API
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
 * @interface CloseUserDataStreamResponseRateLimitsInner
 */
export interface CloseUserDataStreamResponseRateLimitsInner {
    /**
     *
     * @type {string}
     * @memberof CloseUserDataStreamResponseRateLimitsInner
     */
    rateLimitType?: string;
    /**
     *
     * @type {string}
     * @memberof CloseUserDataStreamResponseRateLimitsInner
     */
    interval?: string;
    /**
     *
     * @type {number}
     * @memberof CloseUserDataStreamResponseRateLimitsInner
     */
    intervalNum?: number;
    /**
     *
     * @type {number}
     * @memberof CloseUserDataStreamResponseRateLimitsInner
     */
    limit?: number;
    /**
     *
     * @type {number}
     * @memberof CloseUserDataStreamResponseRateLimitsInner
     */
    count?: number;
}
