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
 * @interface OrderCancelReplaceResponseResultNewOrderResponse
 */
export interface OrderCancelReplaceResponseResultNewOrderResponse {
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseResultNewOrderResponse
     */
    selfTradePreventionMode?: string;
}
