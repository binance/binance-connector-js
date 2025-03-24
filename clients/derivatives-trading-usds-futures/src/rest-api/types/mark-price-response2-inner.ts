/* tslint:disable */

/**
 * Binance Public Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures REST API
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
 * @interface MarkPriceResponse2Inner
 */
export interface MarkPriceResponse2Inner {
    /**
     *
     * @type {string}
     * @memberof MarkPriceResponse2Inner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof MarkPriceResponse2Inner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof MarkPriceResponse2Inner
     */
    indexPrice?: string;
    /**
     *
     * @type {string}
     * @memberof MarkPriceResponse2Inner
     */
    estimatedSettlePrice?: string;
    /**
     *
     * @type {string}
     * @memberof MarkPriceResponse2Inner
     */
    lastFundingRate?: string;
    /**
     *
     * @type {string}
     * @memberof MarkPriceResponse2Inner
     */
    interestRate?: string;
    /**
     *
     * @type {number}
     * @memberof MarkPriceResponse2Inner
     */
    nextFundingTime?: number;
    /**
     *
     * @type {number}
     * @memberof MarkPriceResponse2Inner
     */
    time?: number;
}
