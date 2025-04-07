/* tslint:disable */
/* eslint-disable */

/**
 * Binance Crypto Loan REST API
 *
 * OpenAPI Specification for the Binance Crypto Loan REST API
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
import type { GetFlexibleLoanLtvAdjustmentHistoryResponseRowsInner } from './get-flexible-loan-ltv-adjustment-history-response-rows-inner';

/**
 *
 * @export
 * @interface GetFlexibleLoanLtvAdjustmentHistoryResponse
 */
export interface GetFlexibleLoanLtvAdjustmentHistoryResponse {
    /**
     *
     * @type {Array<GetFlexibleLoanLtvAdjustmentHistoryResponseRowsInner>}
     * @memberof GetFlexibleLoanLtvAdjustmentHistoryResponse
     */
    rows?: Array<GetFlexibleLoanLtvAdjustmentHistoryResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetFlexibleLoanLtvAdjustmentHistoryResponse
     */
    total?: number;
}
