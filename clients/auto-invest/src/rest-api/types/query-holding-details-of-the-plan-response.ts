/* tslint:disable */
/* eslint-disable */

/**
 * Binance Auto Invest REST API
 *
 * OpenAPI Specification for the Binance Auto Invest REST API
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
import type { QueryHoldingDetailsOfThePlanResponseDetailsInner } from './query-holding-details-of-the-plan-response-details-inner';

/**
 *
 * @export
 * @interface QueryHoldingDetailsOfThePlanResponse
 */
export interface QueryHoldingDetailsOfThePlanResponse {
    /**
     *
     * @type {number}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    planId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    planType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    editAllowed?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    flexibleAllowedToUse?: string;
    /**
     *
     * @type {number}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    creationDateTime?: number;
    /**
     *
     * @type {number}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    firstExecutionDateTime?: number;
    /**
     *
     * @type {number}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    nextExecutionDateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    targetAsset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    sourceAsset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    planValueInUSD?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    pnlInUSD?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    roi?: string;
    /**
     *
     * @type {string}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    totalInvestedInUSD?: string;
    /**
     *
     * @type {Array<QueryHoldingDetailsOfThePlanResponseDetailsInner>}
     * @memberof QueryHoldingDetailsOfThePlanResponse
     */
    details?: Array<QueryHoldingDetailsOfThePlanResponseDetailsInner>;
}
