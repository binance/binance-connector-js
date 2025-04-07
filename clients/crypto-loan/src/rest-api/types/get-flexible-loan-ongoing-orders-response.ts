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
import type { GetFlexibleLoanOngoingOrdersResponseRowsInner } from './get-flexible-loan-ongoing-orders-response-rows-inner';

/**
 *
 * @export
 * @interface GetFlexibleLoanOngoingOrdersResponse
 */
export interface GetFlexibleLoanOngoingOrdersResponse {
    /**
     *
     * @type {Array<GetFlexibleLoanOngoingOrdersResponseRowsInner>}
     * @memberof GetFlexibleLoanOngoingOrdersResponse
     */
    rows?: Array<GetFlexibleLoanOngoingOrdersResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetFlexibleLoanOngoingOrdersResponse
     */
    total?: number;
}
