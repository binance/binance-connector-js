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
 * @interface NewUmConditionalOrderResponse
 */
export interface NewUmConditionalOrderResponse {
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    newClientStrategyId?: string;
    /**
     *
     * @type {number}
     * @memberof NewUmConditionalOrderResponse
     */
    strategyId?: number;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    strategyStatus?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    strategyType?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewUmConditionalOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof NewUmConditionalOrderResponse
     */
    bookTime?: number;
    /**
     *
     * @type {number}
     * @memberof NewUmConditionalOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewUmConditionalOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof NewUmConditionalOrderResponse
     */
    goodTillDate?: number;
    /**
     *
     * @type {string}
     * @memberof NewUmConditionalOrderResponse
     */
    priceMatch?: string;
}
