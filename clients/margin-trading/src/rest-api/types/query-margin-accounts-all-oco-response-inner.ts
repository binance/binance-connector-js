/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { QueryMarginAccountsAllOcoResponseInnerOrdersInner } from './query-margin-accounts-all-oco-response-inner-orders-inner';

/**
 *
 * @export
 * @interface QueryMarginAccountsAllOcoResponseInner
 */
export interface QueryMarginAccountsAllOcoResponseInner {
    /**
     *
     * @type {number}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    contingencyType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    listStatusType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    listOrderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    listClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    transactionTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    isIsolated?: boolean;
    /**
     *
     * @type {Array<QueryMarginAccountsAllOcoResponseInnerOrdersInner>}
     * @memberof QueryMarginAccountsAllOcoResponseInner
     */
    orders?: Array<QueryMarginAccountsAllOcoResponseInnerOrdersInner>;
}
