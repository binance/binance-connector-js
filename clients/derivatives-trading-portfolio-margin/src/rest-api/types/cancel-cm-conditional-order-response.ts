/* tslint:disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
 * @interface CancelCmConditionalOrderResponse
 */
export interface CancelCmConditionalOrderResponse {
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    newClientStrategyId?: string;
    /**
     *
     * @type {number}
     * @memberof CancelCmConditionalOrderResponse
     */
    strategyId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    strategyStatus?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    strategyType?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelCmConditionalOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof CancelCmConditionalOrderResponse
     */
    bookTime?: number;
    /**
     *
     * @type {number}
     * @memberof CancelCmConditionalOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof CancelCmConditionalOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelCmConditionalOrderResponse
     */
    priceProtect?: boolean;
}
