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
 * @interface CancelMarginAccountOrderResponse
 */
export interface CancelMarginAccountOrderResponse {
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof CancelMarginAccountOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    origClientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof CancelMarginAccountOrderResponse
     */
    side?: string;
}
