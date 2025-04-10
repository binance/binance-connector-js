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
 * @interface Ticker24hrResponse3ResultInner
 */
export interface Ticker24hrResponse3ResultInner {
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    priceChange?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    priceChangePercent?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    weightedAvgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    prevClosePrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    lastPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    lastQty?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    bidPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    bidQty?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    askPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    askQty?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    openPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    highPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    lowPrice?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof Ticker24hrResponse3ResultInner
     */
    quoteVolume?: string;
    /**
     *
     * @type {number}
     * @memberof Ticker24hrResponse3ResultInner
     */
    openTime?: number;
    /**
     *
     * @type {number}
     * @memberof Ticker24hrResponse3ResultInner
     */
    closeTime?: number;
    /**
     *
     * @type {number}
     * @memberof Ticker24hrResponse3ResultInner
     */
    firstId?: number;
    /**
     *
     * @type {number}
     * @memberof Ticker24hrResponse3ResultInner
     */
    lastId?: number;
    /**
     *
     * @type {number}
     * @memberof Ticker24hrResponse3ResultInner
     */
    count?: number;
}
