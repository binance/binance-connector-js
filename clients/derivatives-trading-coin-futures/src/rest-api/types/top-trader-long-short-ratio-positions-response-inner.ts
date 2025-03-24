/* tslint:disable */

/**
 * Binance Public Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures REST API
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
 * @interface TopTraderLongShortRatioPositionsResponseInner
 */
export interface TopTraderLongShortRatioPositionsResponseInner {
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioPositionsResponseInner
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioPositionsResponseInner
     */
    longShortRatio?: string;
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioPositionsResponseInner
     */
    longPosition?: string;
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioPositionsResponseInner
     */
    shortPosition?: string;
    /**
     *
     * @type {number}
     * @memberof TopTraderLongShortRatioPositionsResponseInner
     */
    timestamp?: number;
}
