/* tslint:disable */

/**
 * Binance Simple Earn REST API
 *
 * OpenAPI Specification for the Binance Simple Earn REST API
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
 * @interface SimpleAccountResponse
 */
export interface SimpleAccountResponse {
    /**
     *
     * @type {string}
     * @memberof SimpleAccountResponse
     */
    totalAmountInBTC?: string;
    /**
     *
     * @type {string}
     * @memberof SimpleAccountResponse
     */
    totalAmountInUSDT?: string;
    /**
     *
     * @type {string}
     * @memberof SimpleAccountResponse
     */
    totalFlexibleAmountInBTC?: string;
    /**
     *
     * @type {string}
     * @memberof SimpleAccountResponse
     */
    totalFlexibleAmountInUSDT?: string;
    /**
     *
     * @type {string}
     * @memberof SimpleAccountResponse
     */
    totalLockedInBTC?: string;
    /**
     *
     * @type {string}
     * @memberof SimpleAccountResponse
     */
    totalLockedInUSDT?: string;
}
