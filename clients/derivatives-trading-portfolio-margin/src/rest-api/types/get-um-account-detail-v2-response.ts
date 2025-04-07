/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
import type { GetUmAccountDetailV2ResponseAssetsInner } from './get-um-account-detail-v2-response-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { GetUmAccountDetailV2ResponsePositionsInner } from './get-um-account-detail-v2-response-positions-inner';

/**
 *
 * @export
 * @interface GetUmAccountDetailV2Response
 */
export interface GetUmAccountDetailV2Response {
    /**
     *
     * @type {Array<GetUmAccountDetailV2ResponseAssetsInner>}
     * @memberof GetUmAccountDetailV2Response
     */
    assets?: Array<GetUmAccountDetailV2ResponseAssetsInner>;
    /**
     *
     * @type {Array<GetUmAccountDetailV2ResponsePositionsInner>}
     * @memberof GetUmAccountDetailV2Response
     */
    positions?: Array<GetUmAccountDetailV2ResponsePositionsInner>;
}
