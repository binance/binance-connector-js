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
 * @interface OrderAmendmentsResponseInner
 */
export interface OrderAmendmentsResponseInner {
    /**
     *
     * @type {string}
     * @memberof OrderAmendmentsResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderAmendmentsResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderAmendmentsResponseInner
     */
    executionId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderAmendmentsResponseInner
     */
    origClientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendmentsResponseInner
     */
    newClientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendmentsResponseInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendmentsResponseInner
     */
    newQty?: string;
    /**
     *
     * @type {number}
     * @memberof OrderAmendmentsResponseInner
     */
    time?: number;
}
