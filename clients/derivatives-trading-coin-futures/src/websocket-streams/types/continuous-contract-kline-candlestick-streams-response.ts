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
import type { ContinuousContractKlineCandlestickStreamsResponseK } from './continuous-contract-kline-candlestick-streams-response-k';

/**
 *
 * @export
 * @interface ContinuousContractKlineCandlestickStreamsResponse
 */
export interface ContinuousContractKlineCandlestickStreamsResponse {
    /**
     *
     * @type {string}
     * @memberof ContinuousContractKlineCandlestickStreamsResponse
     */
    e?: string;
    /**
     *
     * @type {number}
     * @memberof ContinuousContractKlineCandlestickStreamsResponse
     */
    E?: number;
    /**
     *
     * @type {string}
     * @memberof ContinuousContractKlineCandlestickStreamsResponse
     */
    ps?: string;
    /**
     *
     * @type {string}
     * @memberof ContinuousContractKlineCandlestickStreamsResponse
     */
    ct?: string;
    /**
     *
     * @type {ContinuousContractKlineCandlestickStreamsResponseK}
     * @memberof ContinuousContractKlineCandlestickStreamsResponse
     */
    k?: ContinuousContractKlineCandlestickStreamsResponseK;
}
