/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
 * @interface QueryCurrentOpenOrderResponse
 */
export interface QueryCurrentOpenOrderResponse {
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCurrentOpenOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryCurrentOpenOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryCurrentOpenOrderResponse
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCurrentOpenOrderResponse
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCurrentOpenOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryCurrentOpenOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    priceMatch?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentOpenOrderResponse
     */
    selfTradePreventionMode?: string;
}
