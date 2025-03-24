/* tslint:disable */

/**
 * Binance Public Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading Portfolio Margin REST API
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
 * @interface QueryUmOrderResponse
 */
export interface QueryUmOrderResponse {
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    cumQuote?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUmOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryUmOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUmOrderResponse
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    type?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUmOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUmOrderResponse
     */
    goodTillDate?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUmOrderResponse
     */
    priceMatch?: string;
}
