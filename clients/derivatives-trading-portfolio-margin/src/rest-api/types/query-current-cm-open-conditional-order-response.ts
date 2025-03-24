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
 * @interface QueryCurrentCmOpenConditionalOrderResponse
 */
export interface QueryCurrentCmOpenConditionalOrderResponse {
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    newClientStrategyId?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    strategyId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    strategyStatus?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    strategyType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    bookTime?: number;
    /**
     *
     * @type {number}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryCurrentCmOpenConditionalOrderResponse
     */
    priceRate?: string;
}
