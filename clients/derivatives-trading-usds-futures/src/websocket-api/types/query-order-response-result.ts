/* tslint:disable */

/**
 * Binance Public Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures WebSocket API
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
 * @interface QueryOrderResponseResult
 */
export interface QueryOrderResponseResult {
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    cumQuote?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponseResult
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryOrderResponseResult
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    stopPrice?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryOrderResponseResult
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponseResult
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponseResult
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponseResult
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryOrderResponseResult
     */
    priceProtect?: boolean;
}
