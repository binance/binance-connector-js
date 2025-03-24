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
 * @interface GetFundingRateInfoResponseInner
 */
export interface GetFundingRateInfoResponseInner {
    /**
     *
     * @type {string}
     * @memberof GetFundingRateInfoResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof GetFundingRateInfoResponseInner
     */
    adjustedFundingRateCap?: string;
    /**
     *
     * @type {string}
     * @memberof GetFundingRateInfoResponseInner
     */
    adjustedFundingRateFloor?: string;
    /**
     *
     * @type {number}
     * @memberof GetFundingRateInfoResponseInner
     */
    fundingIntervalHours?: number;
    /**
     *
     * @type {boolean}
     * @memberof GetFundingRateInfoResponseInner
     */
    disclaimer?: boolean;
}
