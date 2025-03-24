/* tslint:disable */

/**
 * Binance Public Algo REST API
 *
 * OpenAPI Specification for the Binance Public Algo REST API
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
 * @interface QuerySubOrdersFutureAlgoResponseSubOrdersInner
 */
export interface QuerySubOrdersFutureAlgoResponseSubOrdersInner {
    /**
     *
     * @type {number}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    algoId?: number;
    /**
     *
     * @type {number}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    orderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    executedAmt?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    feeAmt?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    feeAsset?: string;
    /**
     *
     * @type {number}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    bookTime?: number;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    subId?: number;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QuerySubOrdersFutureAlgoResponseSubOrdersInner
     */
    origQty?: string;
}
