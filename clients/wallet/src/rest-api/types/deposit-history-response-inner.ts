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
 * @interface DepositHistoryResponseInner
 */
export interface DepositHistoryResponseInner {
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    coin?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    network?: string;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryResponseInner
     */
    status?: number;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    addressTag?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    txId?: string;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryResponseInner
     */
    insertTime?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryResponseInner
     */
    completeTime?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryResponseInner
     */
    transferType?: number;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryResponseInner
     */
    confirmTimes?: string;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryResponseInner
     */
    unlockConfirm?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryResponseInner
     */
    walletType?: number;
}
