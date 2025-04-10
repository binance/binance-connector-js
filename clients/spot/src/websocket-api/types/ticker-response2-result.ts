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
 * @interface TickerResponse2Result
 */
export interface TickerResponse2Result {
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    openPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    highPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    lowPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    lastPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse2Result
     */
    quoteVolume?: string;
    /**
     *
     * @type {number}
     * @memberof TickerResponse2Result
     */
    openTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse2Result
     */
    closeTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse2Result
     */
    firstId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse2Result
     */
    lastId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse2Result
     */
    count?: number;
}
