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
 * @interface GetFundingRateHistoryOfPerpetualFuturesResponseInner
 */
export interface GetFundingRateHistoryOfPerpetualFuturesResponseInner {
    /**
     *
     * @type {string}
     * @memberof GetFundingRateHistoryOfPerpetualFuturesResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof GetFundingRateHistoryOfPerpetualFuturesResponseInner
     */
    fundingTime?: number;
    /**
     *
     * @type {string}
     * @memberof GetFundingRateHistoryOfPerpetualFuturesResponseInner
     */
    fundingRate?: string;
}
