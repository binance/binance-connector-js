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
 * @interface DepositHistoryTravelRuleResponseInner
 */
export interface DepositHistoryTravelRuleResponseInner {
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    trId?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    tranId?: number;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    coin?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    network?: string;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    depositStatus?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    travelRuleStatus?: number;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    addressTag?: string;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    txId?: string;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    insertTime?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    transferType?: number;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    confirmTimes?: string;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    unlockConfirm?: number;
    /**
     *
     * @type {number}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    walletType?: number;
    /**
     *
     * @type {boolean}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    requireQuestionnaire?: boolean;
    /**
     *
     * @type {string}
     * @memberof DepositHistoryTravelRuleResponseInner
     */
    questionnaire?: string;
}
