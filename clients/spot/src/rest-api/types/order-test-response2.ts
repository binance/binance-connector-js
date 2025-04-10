/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { OrderTestResponse2Discount } from './order-test-response2-discount';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderTestResponse2StandardCommissionForOrder } from './order-test-response2-standard-commission-for-order';

/**
 *
 * @export
 * @interface OrderTestResponse2
 */
export interface OrderTestResponse2 {
    /**
     *
     * @type {OrderTestResponse2StandardCommissionForOrder}
     * @memberof OrderTestResponse2
     */
    standardCommissionForOrder?: OrderTestResponse2StandardCommissionForOrder;
    /**
     *
     * @type {OrderTestResponse2StandardCommissionForOrder}
     * @memberof OrderTestResponse2
     */
    taxCommissionForOrder?: OrderTestResponse2StandardCommissionForOrder;
    /**
     *
     * @type {OrderTestResponse2Discount}
     * @memberof OrderTestResponse2
     */
    discount?: OrderTestResponse2Discount;
}
