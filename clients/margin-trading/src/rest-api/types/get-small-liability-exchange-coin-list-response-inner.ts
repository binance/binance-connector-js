/* tslint:disable */

/**
 * Binance Public Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Public Margin Trading REST API
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
 * @interface GetSmallLiabilityExchangeCoinListResponseInner
 */
export interface GetSmallLiabilityExchangeCoinListResponseInner {
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeCoinListResponseInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeCoinListResponseInner
     */
    interest?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeCoinListResponseInner
     */
    principal?: string;
    /**
     *
     * @type {string}
     * @memberof GetSmallLiabilityExchangeCoinListResponseInner
     */
    liabilityAsset?: string;
    /**
     *
     * @type {number}
     * @memberof GetSmallLiabilityExchangeCoinListResponseInner
     */
    liabilityQty?: number;
}
