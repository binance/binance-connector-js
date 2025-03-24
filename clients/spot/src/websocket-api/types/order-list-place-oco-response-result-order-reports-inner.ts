/* tslint:disable */

/**
 * Binance Public Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Public Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
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
 * @interface OrderListPlaceOcoResponseResultOrderReportsInner
 */
export interface OrderListPlaceOcoResponseResultOrderReportsInner {
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    stopPrice?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    workingTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOcoResponseResultOrderReportsInner
     */
    selfTradePreventionMode?: string;
}
