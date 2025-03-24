/* tslint:disable */

/**
 * Binance Public Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures WebSocket API
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
 * @interface SymbolOrderBookTickerResponse1Result
 */
export interface SymbolOrderBookTickerResponse1Result {
    /**
     *
     * @type {number}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    lastUpdateId?: number;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    bidPrice?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    bidQty?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    askPrice?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    askQty?: string;
    /**
     *
     * @type {number}
     * @memberof SymbolOrderBookTickerResponse1Result
     */
    time?: number;
}
