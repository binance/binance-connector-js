/* tslint:disable */

/**
 * Binance Public Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Public Spot WebSocket API
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
 * @interface TickerTradingDayResponseResultInner
 */
export interface TickerTradingDayResponseResultInner {
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    priceChange?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    priceChangePercent?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    weightedAvgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    openPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    highPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    lowPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    lastPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponseResultInner
     */
    quoteVolume?: string;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponseResultInner
     */
    openTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponseResultInner
     */
    closeTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponseResultInner
     */
    firstId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponseResultInner
     */
    lastId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponseResultInner
     */
    count?: number;
}
