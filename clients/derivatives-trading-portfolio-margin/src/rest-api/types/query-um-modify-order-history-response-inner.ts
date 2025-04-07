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
import type { QueryCmModifyOrderHistoryResponseInnerAmendment } from './query-cm-modify-order-history-response-inner-amendment';

/**
 *
 * @export
 * @interface QueryUmModifyOrderHistoryResponseInner
 */
export interface QueryUmModifyOrderHistoryResponseInner {
    /**
     *
     * @type {number}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    amendmentId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    pair?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    time?: number;
    /**
     *
     * @type {QueryCmModifyOrderHistoryResponseInnerAmendment}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    amendment?: QueryCmModifyOrderHistoryResponseInnerAmendment;
    /**
     *
     * @type {string}
     * @memberof QueryUmModifyOrderHistoryResponseInner
     */
    priceMatch?: string;
}
