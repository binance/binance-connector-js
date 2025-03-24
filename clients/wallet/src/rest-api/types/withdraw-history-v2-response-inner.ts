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
 * @interface WithdrawHistoryV2ResponseInner
 */
export interface WithdrawHistoryV2ResponseInner {
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    trId?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    transactionFee?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    coin?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    withdrawalStatus?: number;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    travelRuleStatus?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    addressTag?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    txId?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    applyTime?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    network?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    transferType?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    withdrawOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    info?: string;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    confirmNo?: number;
    /**
     *
     * @type {number}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    walletType?: number;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    txKey?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    questionnaire?: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawHistoryV2ResponseInner
     */
    completeTime?: string;
}
