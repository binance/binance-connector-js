/* tslint:disable */

/**
 * Binance Public Dual Investment REST API
 *
 * OpenAPI Specification for the Binance Public Dual Investment REST API
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
 * @interface GetDualInvestmentPositionsResponseListInner
 */
export interface GetDualInvestmentPositionsResponseListInner {
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    investCoin?: string;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    exercisedCoin?: string;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    subscriptionAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    strikePrice?: string;
    /**
     *
     * @type {number}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    duration?: number;
    /**
     *
     * @type {number}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    settleDate?: number;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    purchaseStatus?: string;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    apr?: string;
    /**
     *
     * @type {number}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    purchaseEndTime?: number;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    optionType?: string;
    /**
     *
     * @type {string}
     * @memberof GetDualInvestmentPositionsResponseListInner
     */
    autoCompoundPlan?: string;
}
