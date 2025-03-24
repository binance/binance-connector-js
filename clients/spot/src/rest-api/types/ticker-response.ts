/* tslint:disable */

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

/**
 *
 * @export
 * @interface TickerResponse
 */
export interface TickerResponse {
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    openPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    highPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    lowPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    lastPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof TickerResponse
     */
    quoteVolume?: string;
    /**
     *
     * @type {number}
     * @memberof TickerResponse
     */
    openTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse
     */
    closeTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse
     */
    firstId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse
     */
    lastId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerResponse
     */
    count?: number;
}
