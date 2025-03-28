/* tslint:disable */
/* eslint-disable */

/**
 * Binance Sub Account REST API
 *
 * OpenAPI Specification for the Binance Sub Account REST API
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
import type { GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountRespAssetsInner } from './get-detail-on-sub-accounts-futures-account-v2-response1-future-account-resp-assets-inner';

/**
 *
 * @export
 * @interface GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
 */
export interface GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp {
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    email?: string;
    /**
     *
     * @type {Array<GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountRespAssetsInner>}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    assets?: Array<GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountRespAssetsInner>;
    /**
     *
     * @type {boolean}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    canDeposit?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    canTrade?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    canWithdraw?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    feeTier?: number;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    maxWithdrawAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalMaintenanceMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalMarginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalOpenOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalPositionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalUnrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    totalWalletBalance?: string;
    /**
     *
     * @type {number}
     * @memberof GetDetailOnSubAccountsFuturesAccountV2Response1FutureAccountResp
     */
    updateTime?: number;
}
