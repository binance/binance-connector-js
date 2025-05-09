/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
 * @interface LongShortRatioResponseInner
 */
export interface LongShortRatioResponseInner {
    /**
     *
     * @type {string}
     * @memberof LongShortRatioResponseInner
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof LongShortRatioResponseInner
     */
    longShortRatio?: string;
    /**
     *
     * @type {string}
     * @memberof LongShortRatioResponseInner
     */
    longAccount?: string;
    /**
     *
     * @type {string}
     * @memberof LongShortRatioResponseInner
     */
    shortAccount?: string;
    /**
     *
     * @type {number}
     * @memberof LongShortRatioResponseInner
     */
    timestamp?: number;
}
