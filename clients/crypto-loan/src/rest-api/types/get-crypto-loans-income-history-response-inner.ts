/* tslint:disable */

/**
 * Binance Public Crypto Loan REST API
 *
 * OpenAPI Specification for the Binance Public Crypto Loan REST API
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
 * @interface GetCryptoLoansIncomeHistoryResponseInner
 */
export interface GetCryptoLoansIncomeHistoryResponseInner {
    /**
     *
     * @type {string}
     * @memberof GetCryptoLoansIncomeHistoryResponseInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof GetCryptoLoansIncomeHistoryResponseInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof GetCryptoLoansIncomeHistoryResponseInner
     */
    amount?: string;
    /**
     *
     * @type {number}
     * @memberof GetCryptoLoansIncomeHistoryResponseInner
     */
    timestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetCryptoLoansIncomeHistoryResponseInner
     */
    tranId?: string;
}
