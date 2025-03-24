/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Public Margin Trading REST API
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
import type { MarginAccountNewOcoResponseOrderReportsInner } from './margin-account-new-oco-response-order-reports-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { MarginAccountNewOcoResponseOrdersInner } from './margin-account-new-oco-response-orders-inner';

/**
 *
 * @export
 * @interface MarginAccountNewOcoResponse
 */
export interface MarginAccountNewOcoResponse {
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOcoResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    contingencyType?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    listStatusType?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    listOrderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    listClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOcoResponse
     */
    transactionTime?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    marginBuyBorrowAmount?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOcoResponse
     */
    marginBuyBorrowAsset?: string;
    /**
     *
     * @type {boolean}
     * @memberof MarginAccountNewOcoResponse
     */
    isIsolated?: boolean;
    /**
     *
     * @type {Array<MarginAccountNewOcoResponseOrdersInner>}
     * @memberof MarginAccountNewOcoResponse
     */
    orders?: Array<MarginAccountNewOcoResponseOrdersInner>;
    /**
     *
     * @type {Array<MarginAccountNewOcoResponseOrderReportsInner>}
     * @memberof MarginAccountNewOcoResponse
     */
    orderReports?: Array<MarginAccountNewOcoResponseOrderReportsInner>;
}
