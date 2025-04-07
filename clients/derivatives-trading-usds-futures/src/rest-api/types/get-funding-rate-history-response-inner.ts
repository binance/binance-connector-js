/* tslint:disable */

/**
 * Binance Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures REST API
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
 * @interface GetFundingRateHistoryResponseInner
 */
export interface GetFundingRateHistoryResponseInner {
    /**
     *
     * @type {string}
     * @memberof GetFundingRateHistoryResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof GetFundingRateHistoryResponseInner
     */
    fundingRate?: string;
    /**
     *
     * @type {number}
     * @memberof GetFundingRateHistoryResponseInner
     */
    fundingTime?: number;
    /**
     *
     * @type {string}
     * @memberof GetFundingRateHistoryResponseInner
     */
    markPrice?: string;
}
