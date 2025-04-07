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
 * @interface QueryMarginAccountsOpenOrdersResponseInner
 */
export interface QueryMarginAccountsOpenOrdersResponseInner {
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    icebergQty?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    isWorking?: boolean;
    /**
     *
     * @type {number}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    isIsolated?: boolean;
    /**
     *
     * @type {number}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof QueryMarginAccountsOpenOrdersResponseInner
     */
    updateTime?: number;
}
