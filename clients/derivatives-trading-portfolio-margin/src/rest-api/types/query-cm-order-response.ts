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
 * @interface QueryCmOrderResponse
 */
export interface QueryCmOrderResponse {
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCmOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryCmOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCmOrderResponse
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCmOrderResponse
     */
    type?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCmOrderResponse
     */
    updateTime?: number;
}
