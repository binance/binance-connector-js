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
import type { GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryRespSubAccountListInner } from './get-summary-of-sub-accounts-futures-account-v2-response2-delivery-account-summary-resp-sub-account-list-inner';

/**
 *
 * @export
 * @interface GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp
 */
export interface GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp {
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp
     */
    totalMarginBalanceOfBTC?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp
     */
    totalUnrealizedProfitOfBTC?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp
     */
    totalWalletBalanceOfBTC?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp
     */
    asset?: string;
    /**
     *
     * @type {Array<GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryRespSubAccountListInner>}
     * @memberof GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryResp
     */
    subAccountList?: Array<GetSummaryOfSubAccountsFuturesAccountV2Response2DeliveryAccountSummaryRespSubAccountListInner>;
}
