/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading Portfolio Margin WebSocket Market Streams
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin WebSocket Market Streams
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
import type { OpenorderlossOInner } from './openorderloss-oinner';

/**
 *
 * @export
 * @interface Openorderloss
 */
export interface Openorderloss {
    /**
     *
     * @type {number}
     * @memberof Openorderloss
     */
    E?: number;
    /**
     *
     * @type {Array<OpenorderlossOInner>}
     * @memberof Openorderloss
     */
    O?: Array<OpenorderlossOInner>;
}
