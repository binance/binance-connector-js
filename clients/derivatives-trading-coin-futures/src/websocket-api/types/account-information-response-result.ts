/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading COIN Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures WebSocket API
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
import type { AccountInformationResponseResultAssetsInner } from './account-information-response-result-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AccountInformationResponseResultPositionsInner } from './account-information-response-result-positions-inner';

/**
 *
 * @export
 * @interface AccountInformationResponseResult
 */
export interface AccountInformationResponseResult {
    /**
     *
     * @type {number}
     * @memberof AccountInformationResponseResult
     */
    feeTier?: number;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponseResult
     */
    canTrade?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponseResult
     */
    canDeposit?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponseResult
     */
    canWithdraw?: boolean;
    /**
     *
     * @type {number}
     * @memberof AccountInformationResponseResult
     */
    updateTime?: number;
    /**
     *
     * @type {Array<AccountInformationResponseResultAssetsInner>}
     * @memberof AccountInformationResponseResult
     */
    assets?: Array<AccountInformationResponseResultAssetsInner>;
    /**
     *
     * @type {Array<AccountInformationResponseResultPositionsInner>}
     * @memberof AccountInformationResponseResult
     */
    positions?: Array<AccountInformationResponseResultPositionsInner>;
}
