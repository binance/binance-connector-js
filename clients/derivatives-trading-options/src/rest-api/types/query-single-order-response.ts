/* tslint:disable */

/**
 * Binance Public Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading Options REST API
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
 * @interface QuerySingleOrderResponse
 */
export interface QuerySingleOrderResponse {
    /**
     *
     * @type {number}
     * @memberof QuerySingleOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    quantity?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    fee?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {boolean}
     * @memberof QuerySingleOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof QuerySingleOrderResponse
     */
    postOnly?: boolean;
    /**
     *
     * @type {number}
     * @memberof QuerySingleOrderResponse
     */
    createTime?: number;
    /**
     *
     * @type {number}
     * @memberof QuerySingleOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    source?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof QuerySingleOrderResponse
     */
    priceScale?: number;
    /**
     *
     * @type {number}
     * @memberof QuerySingleOrderResponse
     */
    quantityScale?: number;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    optionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySingleOrderResponse
     */
    quoteAsset?: string;
    /**
     *
     * @type {boolean}
     * @memberof QuerySingleOrderResponse
     */
    mmp?: boolean;
}
