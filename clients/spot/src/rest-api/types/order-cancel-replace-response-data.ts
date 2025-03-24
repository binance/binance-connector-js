/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Spot REST API
 *
 * OpenAPI Specifications for the Binance Public Spot REST API
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

// May contain unused imports in some cases
// @ts-ignore
import type { OrderCancelReplaceResponseDataCancelResponse } from './order-cancel-replace-response-data-cancel-response';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderCancelReplaceResponseDataNewOrderResponse } from './order-cancel-replace-response-data-new-order-response';

/**
 *
 * @export
 * @interface OrderCancelReplaceResponseData
 */
export interface OrderCancelReplaceResponseData {
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseData
     */
    cancelResult?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseData
     */
    newOrderResult?: string;
    /**
     *
     * @type {OrderCancelReplaceResponseDataCancelResponse}
     * @memberof OrderCancelReplaceResponseData
     */
    cancelResponse?: OrderCancelReplaceResponseDataCancelResponse;
    /**
     *
     * @type {OrderCancelReplaceResponseDataNewOrderResponse}
     * @memberof OrderCancelReplaceResponseData
     */
    newOrderResponse?: OrderCancelReplaceResponseDataNewOrderResponse;
}
