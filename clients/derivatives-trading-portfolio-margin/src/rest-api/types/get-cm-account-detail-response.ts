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
import type { GetCmAccountDetailResponseAssetsInner } from './get-cm-account-detail-response-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { GetCmAccountDetailResponsePositionsInner } from './get-cm-account-detail-response-positions-inner';

/**
 *
 * @export
 * @interface GetCmAccountDetailResponse
 */
export interface GetCmAccountDetailResponse {
    /**
     *
     * @type {Array<GetCmAccountDetailResponseAssetsInner>}
     * @memberof GetCmAccountDetailResponse
     */
    assets?: Array<GetCmAccountDetailResponseAssetsInner>;
    /**
     *
     * @type {Array<GetCmAccountDetailResponsePositionsInner>}
     * @memberof GetCmAccountDetailResponse
     */
    positions?: Array<GetCmAccountDetailResponsePositionsInner>;
}
