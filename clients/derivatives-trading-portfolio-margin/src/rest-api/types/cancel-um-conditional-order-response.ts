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
 * @interface CancelUmConditionalOrderResponse
 */
export interface CancelUmConditionalOrderResponse {
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    newClientStrategyId?: string;
    /**
     *
     * @type {number}
     * @memberof CancelUmConditionalOrderResponse
     */
    strategyId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    strategyStatus?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    strategyType?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelUmConditionalOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof CancelUmConditionalOrderResponse
     */
    bookTime?: number;
    /**
     *
     * @type {number}
     * @memberof CancelUmConditionalOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelUmConditionalOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof CancelUmConditionalOrderResponse
     */
    goodTillDate?: number;
    /**
     *
     * @type {string}
     * @memberof CancelUmConditionalOrderResponse
     */
    priceMatch?: string;
}
