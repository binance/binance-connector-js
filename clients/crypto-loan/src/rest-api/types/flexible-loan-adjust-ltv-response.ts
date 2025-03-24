/* tslint:disable */

/**
 * Binance Public Crypto Loan REST API
 *
 * OpenAPI Specification for the Binance Public Crypto Loan REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface FlexibleLoanAdjustLtvResponse
 */
export interface FlexibleLoanAdjustLtvResponse {
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanAdjustLtvResponse
     */
    loanCoin?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanAdjustLtvResponse
     */
    collateralCoin?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanAdjustLtvResponse
     */
    direction?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanAdjustLtvResponse
     */
    adjustmentAmount?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanAdjustLtvResponse
     */
    currentLTV?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanAdjustLtvResponse
     */
    status?: string;
}
