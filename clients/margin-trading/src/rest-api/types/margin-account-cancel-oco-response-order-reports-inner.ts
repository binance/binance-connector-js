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
 * @interface MarginAccountCancelOcoResponseOrderReportsInner
 */
export interface MarginAccountCancelOcoResponseOrderReportsInner {
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountCancelOcoResponseOrderReportsInner
     */
    selfTradePreventionMode?: string;
}
