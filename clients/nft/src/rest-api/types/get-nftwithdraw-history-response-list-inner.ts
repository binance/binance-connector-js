/* tslint:disable */

/**
 * Binance NFT REST API
 *
 * OpenAPI Specification for the Binance NFT REST API
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
 * @interface GetNFTWithdrawHistoryResponseListInner
 */
export interface GetNFTWithdrawHistoryResponseListInner {
    /**
     *
     * @type {string}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    network?: string;
    /**
     *
     * @type {string}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    txID?: string;
    /**
     *
     * @type {string}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    contractAdrress?: string;
    /**
     *
     * @type {string}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    tokenId?: string;
    /**
     *
     * @type {number}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    timestamp?: number;
    /**
     *
     * @type {number}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    fee?: number;
    /**
     *
     * @type {string}
     * @memberof GetNFTWithdrawHistoryResponseListInner
     */
    feeAsset?: string;
}
