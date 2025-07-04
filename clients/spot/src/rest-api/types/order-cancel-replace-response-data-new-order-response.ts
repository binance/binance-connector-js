/* tslint:disable */

/**
 * Binance Spot REST API
 *
 * OpenAPI Specifications for the Binance Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
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
 * @interface OrderCancelReplaceResponseDataNewOrderResponse
 */
export interface OrderCancelReplaceResponseDataNewOrderResponse {
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    msg?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataNewOrderResponse
     */
    transactTime?: number;
}
