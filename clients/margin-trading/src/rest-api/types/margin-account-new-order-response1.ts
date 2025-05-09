/* tslint:disable */

/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
 * @interface MarginAccountNewOrderResponse1
 */
export interface MarginAccountNewOrderResponse1 {
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOrderResponse1
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOrderResponse1
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOrderResponse1
     */
    clientOrderId?: string;
    /**
     *
     * @type {boolean}
     * @memberof MarginAccountNewOrderResponse1
     */
    isIsolated?: boolean;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOrderResponse1
     */
    transactTime?: number;
}
