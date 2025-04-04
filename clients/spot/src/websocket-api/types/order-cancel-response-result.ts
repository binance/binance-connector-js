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
 * @interface OrderCancelResponseResult
 */
export interface OrderCancelResponseResult {
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponseResult
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponseResult
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponseResult
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    stopPrice?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponseResult
     */
    trailingDelta?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    icebergQty?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponseResult
     */
    strategyId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponseResult
     */
    strategyType?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponseResult
     */
    selfTradePreventionMode?: string;
}
