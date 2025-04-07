/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CancelMarginAccountAllOpenOrdersOnASymbolResponseInnerOrderReportsInner } from './cancel-margin-account-all-open-orders-on-asymbol-response-inner-order-reports-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { CancelMarginAccountAllOpenOrdersOnASymbolResponseInnerOrdersInner } from './cancel-margin-account-all-open-orders-on-asymbol-response-inner-orders-inner';

/**
 *
 * @export
 * @interface CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
 */
export interface CancelMarginAccountAllOpenOrdersOnASymbolResponseInner {
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    contingencyType?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    listStatusType?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    listOrderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    listClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    transactionTime?: number;
    /**
     *
     * @type {Array<CancelMarginAccountAllOpenOrdersOnASymbolResponseInnerOrdersInner>}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    orders?: Array<CancelMarginAccountAllOpenOrdersOnASymbolResponseInnerOrdersInner>;
    /**
     *
     * @type {Array<CancelMarginAccountAllOpenOrdersOnASymbolResponseInnerOrderReportsInner>}
     * @memberof CancelMarginAccountAllOpenOrdersOnASymbolResponseInner
     */
    orderReports?: Array<CancelMarginAccountAllOpenOrdersOnASymbolResponseInnerOrderReportsInner>;
}
