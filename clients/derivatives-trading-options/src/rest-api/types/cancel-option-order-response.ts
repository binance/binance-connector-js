/* tslint:disable */

/**
 * Binance Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Options REST API
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
 * @interface CancelOptionOrderResponse
 */
export interface CancelOptionOrderResponse {
    /**
     *
     * @type {number}
     * @memberof CancelOptionOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    quantity?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    fee?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelOptionOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CancelOptionOrderResponse
     */
    postOnly?: boolean;
    /**
     *
     * @type {number}
     * @memberof CancelOptionOrderResponse
     */
    createDate?: number;
    /**
     *
     * @type {number}
     * @memberof CancelOptionOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    source?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof CancelOptionOrderResponse
     */
    priceScale?: number;
    /**
     *
     * @type {number}
     * @memberof CancelOptionOrderResponse
     */
    quantityScale?: number;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    optionSide?: string;
    /**
     *
     * @type {string}
     * @memberof CancelOptionOrderResponse
     */
    quoteAsset?: string;
    /**
     *
     * @type {boolean}
     * @memberof CancelOptionOrderResponse
     */
    mmp?: boolean;
}
