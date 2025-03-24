/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Derivatives Trading COIN Futures WebSocket Market Streams
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures WebSocket Market Streams
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
import type { MarkPriceKlineCandlestickStreamsResponseK } from './mark-price-kline-candlestick-streams-response-k';

/**
 *
 * @export
 * @interface MarkPriceKlineCandlestickStreamsResponse
 */
export interface MarkPriceKlineCandlestickStreamsResponse {
    /**
     *
     * @type {string}
     * @memberof MarkPriceKlineCandlestickStreamsResponse
     */
    e?: string;
    /**
     *
     * @type {number}
     * @memberof MarkPriceKlineCandlestickStreamsResponse
     */
    E?: number;
    /**
     *
     * @type {string}
     * @memberof MarkPriceKlineCandlestickStreamsResponse
     */
    ps?: string;
    /**
     *
     * @type {MarkPriceKlineCandlestickStreamsResponseK}
     * @memberof MarkPriceKlineCandlestickStreamsResponse
     */
    k?: MarkPriceKlineCandlestickStreamsResponseK;
}
