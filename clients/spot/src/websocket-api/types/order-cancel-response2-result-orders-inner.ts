/* tslint:disable */

/**
 * Binance Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
 *
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
 * @interface OrderCancelResponse2ResultOrdersInner
 */
export interface OrderCancelResponse2ResultOrdersInner {
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrdersInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponse2ResultOrdersInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrdersInner
     */
    clientOrderId?: string;
}
