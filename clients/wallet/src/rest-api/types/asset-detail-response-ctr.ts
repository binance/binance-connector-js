/* tslint:disable */

/**
 * Binance Public Wallet REST API
 *
 * OpenAPI Specification for the Binance Public Wallet REST API
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
 * @interface AssetDetailResponseCTR
 */
export interface AssetDetailResponseCTR {
    /**
     *
     * @type {string}
     * @memberof AssetDetailResponseCTR
     */
    minWithdrawAmount?: string;
    /**
     *
     * @type {boolean}
     * @memberof AssetDetailResponseCTR
     */
    depositStatus?: boolean;
    /**
     *
     * @type {number}
     * @memberof AssetDetailResponseCTR
     */
    withdrawFee?: number;
    /**
     *
     * @type {boolean}
     * @memberof AssetDetailResponseCTR
     */
    withdrawStatus?: boolean;
    /**
     *
     * @type {string}
     * @memberof AssetDetailResponseCTR
     */
    depositTip?: string;
}
