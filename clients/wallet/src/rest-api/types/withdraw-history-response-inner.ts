/* tslint:disable */

/**
 * Binance Public Wallet REST API
 *
 * OpenAPI Specification for the Binance Public Wallet REST API
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
 * @interface WithdrawHistoryResponseInner
 */
export interface WithdrawHistoryResponseInner {
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    transactionFee?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    coin?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryResponseInner
     */
    status?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    txId?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    applyTime?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    network?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryResponseInner
     */
    transferType?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    withdrawOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    info?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryResponseInner
     */
    confirmNo?: number;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryResponseInner
     */
    walletType?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    txKey?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryResponseInner
     */
    completeTime?: string;
}
