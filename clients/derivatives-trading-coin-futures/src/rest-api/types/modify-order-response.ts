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
 * @interface ModifyOrderResponse
 */
export interface ModifyOrderResponse {
    /**
     *
     * @type {number}
     * @memberof ModifyOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof ModifyOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ModifyOrderResponse
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof ModifyOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    priceMatch?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof ModifyOrderResponse
     */
    updateTime?: number;
}
