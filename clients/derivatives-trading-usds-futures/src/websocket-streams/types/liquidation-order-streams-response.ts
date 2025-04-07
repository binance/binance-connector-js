/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading USDS Futures WebSocket Market Streams
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket Market Streams
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
import type { AllMarketLiquidationOrderStreamsResponseO } from './all-market-liquidation-order-streams-response-o';

/**
 *
 * @export
 * @interface LiquidationOrderStreamsResponse
 */
export interface LiquidationOrderStreamsResponse {
    /**
     *
     * @type {string}
     * @memberof LiquidationOrderStreamsResponse
     */
    e?: string;
    /**
     *
     * @type {number}
     * @memberof LiquidationOrderStreamsResponse
     */
    E?: number;
    /**
     *
     * @type {AllMarketLiquidationOrderStreamsResponseO}
     * @memberof LiquidationOrderStreamsResponse
     */
    o?: AllMarketLiquidationOrderStreamsResponseO;
}
