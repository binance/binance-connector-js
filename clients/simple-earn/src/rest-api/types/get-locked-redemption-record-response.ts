/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Simple Earn REST API
 *
 * OpenAPI Specification for the Binance Public Simple Earn REST API
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
import type { GetLockedRedemptionRecordResponseRowsInner } from './get-locked-redemption-record-response-rows-inner';

/**
 *
 * @export
 * @interface GetLockedRedemptionRecordResponse
 */
export interface GetLockedRedemptionRecordResponse {
    /**
     *
     * @type {Array<GetLockedRedemptionRecordResponseRowsInner>}
     * @memberof GetLockedRedemptionRecordResponse
     */
    rows?: Array<GetLockedRedemptionRecordResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetLockedRedemptionRecordResponse
     */
    total?: number;
}
