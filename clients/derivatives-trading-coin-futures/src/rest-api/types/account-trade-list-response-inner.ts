/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
 * @interface AccountTradeListResponseInner
 */
export interface AccountTradeListResponseInner {
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof AccountTradeListResponseInner
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof AccountTradeListResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    qty?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    realizedPnl?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    marginAsset?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    baseQty?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    commission?: string;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    commissionAsset?: string;
    /**
     *
     * @type {number}
     * @memberof AccountTradeListResponseInner
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof AccountTradeListResponseInner
     */
    positionSide?: string;
    /**
     *
     * @type {boolean}
     * @memberof AccountTradeListResponseInner
     */
    buyer?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AccountTradeListResponseInner
     */
    maker?: boolean;
}
