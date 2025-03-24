/* tslint:disable */

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

/**
 *
 * @export
 * @interface OrderListPlaceOtocoResponseRateLimitsInner
 */
export interface OrderListPlaceOtocoResponseRateLimitsInner {
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseRateLimitsInner
     */
    rateLimitType?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseRateLimitsInner
     */
    interval?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseRateLimitsInner
     */
    intervalNum?: number;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseRateLimitsInner
     */
    limit?: number;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseRateLimitsInner
     */
    count?: number;
}
