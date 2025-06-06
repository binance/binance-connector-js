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
import type { ExtraBonusListResponseData } from './extra-bonus-list-response-data';

/**
 *
 * @export
 * @interface ExtraBonusListResponse
 */
export interface ExtraBonusListResponse {
    /**
     *
     * @type {number}
     * @memberof ExtraBonusListResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof ExtraBonusListResponse
     */
    msg?: string;
    /**
     *
     * @type {ExtraBonusListResponseData}
     * @memberof ExtraBonusListResponse
     */
    data?: ExtraBonusListResponseData;
}
