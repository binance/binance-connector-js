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
import type { GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryRespSubAccountListInner } from './get-summary-of-sub-accounts-futures-account-v2-response1-future-account-summary-resp-sub-account-list-inner';

/**
 *
 * @export
 * @interface GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
 */
export interface GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp {
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalMaintenanceMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalMarginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalOpenOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalPositionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalUnrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    totalWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    asset?: string;
    /**
     *
     * @type {Array<GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryRespSubAccountListInner>}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryResp
     */
    subAccountList?: Array<GetSummaryOfSubAccountsFuturesAccountV2Response1FutureAccountSummaryRespSubAccountListInner>;
}
