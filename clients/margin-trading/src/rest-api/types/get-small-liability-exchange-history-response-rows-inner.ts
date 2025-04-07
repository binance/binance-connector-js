/* tslint:disable */

/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
 * @interface GetSmallLiabilityExchangeHistoryResponseRowsInner
 */
export interface GetSmallLiabilityExchangeHistoryResponseRowsInner {
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeHistoryResponseRowsInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeHistoryResponseRowsInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeHistoryResponseRowsInner
     */
    targetAsset?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeHistoryResponseRowsInner
     */
    targetAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeHistoryResponseRowsInner
     */
    bizType?: string;
    /**
     *
     * @type {number}
     * @memberof GetSmallLiabilityExchangeHistoryResponseRowsInner
     */
    timestamp?: number;
}
