/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading COIN Futures WebSocket Market Streams
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures WebSocket Market Streams
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { IndexKlineCandlestickStreamsResponseK } from './index-kline-candlestick-streams-response-k';

/**
 *
 * @export
 * @interface IndexKlineCandlestickStreamsResponse
 */
export interface IndexKlineCandlestickStreamsResponse {
    /**
     *
     * @type {string}
     * @memberof IndexKlineCandlestickStreamsResponse
     */
    e?: string;
    /**
     *
     * @type {number}
     * @memberof IndexKlineCandlestickStreamsResponse
     */
    E?: number;
    /**
     *
     * @type {string}
     * @memberof IndexKlineCandlestickStreamsResponse
     */
    ps?: string;
    /**
     *
     * @type {IndexKlineCandlestickStreamsResponseK}
     * @memberof IndexKlineCandlestickStreamsResponse
     */
    k?: IndexKlineCandlestickStreamsResponseK;
}
