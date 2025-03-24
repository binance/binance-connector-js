/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Auto Invest REST API
 *
 * OpenAPI Specification for the Binance Public Auto Invest REST API
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
import type { GetTargetAssetListResponseAutoInvestAssetListInner } from './get-target-asset-list-response-auto-invest-asset-list-inner';

/**
 *
 * @export
 * @interface GetTargetAssetListResponse
 */
export interface GetTargetAssetListResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof GetTargetAssetListResponse
     */
    targetAssets?: Array<string>;
    /**
     *
     * @type {Array<GetTargetAssetListResponseAutoInvestAssetListInner>}
     * @memberof GetTargetAssetListResponse
     */
    autoInvestAssetList?: Array<GetTargetAssetListResponseAutoInvestAssetListInner>;
}
