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
 * @interface CancelCmOrderResponse
 */
export interface CancelCmOrderResponse {
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof CancelCmOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelCmOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmOrderResponse
     */
    type?: string;
    /**
     *
     * @type {number}
     * @memberof CancelCmOrderResponse
     */
    updateTime?: number;
}
