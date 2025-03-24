/* tslint:disable */

/**
 * Binance Public Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures REST API
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
 * @interface NewOrderResponse
 */
export interface NewOrderResponse {
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    cumQuote?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof NewOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewOrderResponse
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof NewOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    priceMatch?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponse
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof NewOrderResponse
     */
    goodTillDate?: number;
}
