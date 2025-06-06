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
 * @interface MarginAccountNewOtocoResponseOrderReportsInner
 */
export interface MarginAccountNewOtocoResponseOrderReportsInner {
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponseOrderReportsInner
     */
    stopPrice?: string;
}
