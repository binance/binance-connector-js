/* tslint:disable */

/**
 * Binance Spot REST API
 *
 * OpenAPI Specifications for the Binance Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
 *
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
 * @interface OrderAmendKeepPriorityResponse1AmendedOrder
 */
export interface OrderAmendKeepPriorityResponse1AmendedOrder {
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    origClientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    qty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    preventedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    quoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    cumulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    side?: string;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    workingTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponse1AmendedOrder
     */
    selfTradePreventionMode?: string;
}
