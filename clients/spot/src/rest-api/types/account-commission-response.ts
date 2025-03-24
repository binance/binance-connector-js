/* tslint:disable */
/* eslint-disable */

/**
 * Binance Public Spot REST API
 *
 * OpenAPI Specifications for the Binance Public Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
 *
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
import type { AccountCommissionResponseDiscount } from './account-commission-response-discount';
// May contain unused imports in some cases
// @ts-ignore
import type { AccountCommissionResponseStandardCommission } from './account-commission-response-standard-commission';
// May contain unused imports in some cases
// @ts-ignore
import type { AccountCommissionResponseTaxCommission } from './account-commission-response-tax-commission';

/**
 *
 * @export
 * @interface AccountCommissionResponse
 */
export interface AccountCommissionResponse {
    /**
     *
     * @type {string}
     * @memberof AccountCommissionResponse
     */
    symbol?: string;
    /**
     *
     * @type {AccountCommissionResponseStandardCommission}
     * @memberof AccountCommissionResponse
     */
    standardCommission?: AccountCommissionResponseStandardCommission;
    /**
     *
     * @type {AccountCommissionResponseTaxCommission}
     * @memberof AccountCommissionResponse
     */
    taxCommission?: AccountCommissionResponseTaxCommission;
    /**
     *
     * @type {AccountCommissionResponseDiscount}
     * @memberof AccountCommissionResponse
     */
    discount?: AccountCommissionResponseDiscount;
}
