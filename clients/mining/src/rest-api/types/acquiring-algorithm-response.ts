/* tslint:disable */
/* eslint-disable */

/**
 * Binance Mining REST API
 *
 * OpenAPI Specification for the Binance Mining REST API
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
import type { AcquiringAlgorithmResponseDataInner } from './acquiring-algorithm-response-data-inner';

/**
 *
 * @export
 * @interface AcquiringAlgorithmResponse
 */
export interface AcquiringAlgorithmResponse {
    /**
     *
     * @type {number}
     * @memberof AcquiringAlgorithmResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof AcquiringAlgorithmResponse
     */
    msg?: string;
    /**
     *
     * @type {Array<AcquiringAlgorithmResponseDataInner>}
     * @memberof AcquiringAlgorithmResponse
     */
    data?: Array<AcquiringAlgorithmResponseDataInner>;
}
