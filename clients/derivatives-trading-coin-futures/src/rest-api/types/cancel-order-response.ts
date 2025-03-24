/* tslint:disable */

/**
 * Binance Public Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures REST API
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
 * @interface CancelOrderResponse
 */
export interface CancelOrderResponse {
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof CancelOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelOrderResponse
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof CancelOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    priceMatch?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    selfTradePreventionMode?: string;
}
