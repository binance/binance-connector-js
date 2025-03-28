/* tslint:disable */

/**
 * Binance Wallet REST API
 *
 * OpenAPI Specification for the Binance Wallet REST API
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
 * @interface QueryUserDelegationHistoryResponseRowsInner
 */
export interface QueryUserDelegationHistoryResponseRowsInner {
    /**
     *
     * @type {string}
     * @memberof QueryUserDelegationHistoryResponseRowsInner
     */
    clientTranId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUserDelegationHistoryResponseRowsInner
     */
    transferType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUserDelegationHistoryResponseRowsInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUserDelegationHistoryResponseRowsInner
     */
    amount?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUserDelegationHistoryResponseRowsInner
     */
    time?: number;
}
