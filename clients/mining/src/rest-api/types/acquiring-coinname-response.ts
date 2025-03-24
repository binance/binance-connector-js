/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Mining REST API
 *
 * OpenAPI Specification for the Binance Public Mining REST API
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
import type { AcquiringCoinnameResponseDataInner } from './acquiring-coinname-response-data-inner';

/**
 *
 * @export
 * @interface AcquiringCoinnameResponse
 */
export interface AcquiringCoinnameResponse {
    /**
     *
     * @type {number}
     * @memberof AcquiringCoinnameResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof AcquiringCoinnameResponse
     */
    msg?: string;
    /**
     *
     * @type {Array<AcquiringCoinnameResponseDataInner>}
     * @memberof AcquiringCoinnameResponse
     */
    data?: Array<AcquiringCoinnameResponseDataInner>;
}
