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
import type { QueryManagedSubAccountTransferLogMasterAccountInvestorResponseManagerSubTransferHistoryVosInner } from './query-managed-sub-account-transfer-log-master-account-investor-response-manager-sub-transfer-history-vos-inner';

/**
 *
 * @export
 * @interface QueryManagedSubAccountTransferLogMasterAccountInvestorResponse
 */
export interface QueryManagedSubAccountTransferLogMasterAccountInvestorResponse {
    /**
     *
     * @type {Array<QueryManagedSubAccountTransferLogMasterAccountInvestorResponseManagerSubTransferHistoryVosInner>}
     * @memberof QueryManagedSubAccountTransferLogMasterAccountInvestorResponse
     */
    managerSubTransferHistoryVos?: Array<QueryManagedSubAccountTransferLogMasterAccountInvestorResponseManagerSubTransferHistoryVosInner>;
    /**
     *
     * @type {number}
     * @memberof QueryManagedSubAccountTransferLogMasterAccountInvestorResponse
     */
    count?: number;
}
