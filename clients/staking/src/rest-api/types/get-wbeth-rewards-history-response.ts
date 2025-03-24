/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Staking REST API
 *
 * OpenAPI Specification for the Binance Public Staking REST API
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
import type { GetWbethRewardsHistoryResponseRowsInner } from './get-wbeth-rewards-history-response-rows-inner';

/**
 *
 * @export
 * @interface GetWbethRewardsHistoryResponse
 */
export interface GetWbethRewardsHistoryResponse {
    /**
     *
     * @type {string}
     * @memberof GetWbethRewardsHistoryResponse
     */
    estRewardsInETH?: string;
    /**
     *
     * @type {Array<GetWbethRewardsHistoryResponseRowsInner>}
     * @memberof GetWbethRewardsHistoryResponse
     */
    rows?: Array<GetWbethRewardsHistoryResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetWbethRewardsHistoryResponse
     */
    total?: number;
}
