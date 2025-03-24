/* tslint:disable */

/**
 * Binance Public Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading Options REST API
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
 * @interface GetOptionTransactionHistoryDownloadLinkByIdResponse1
 */
export interface GetOptionTransactionHistoryDownloadLinkByIdResponse1 {
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse1
     */
    downloadId?: string;
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse1
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse1
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse1
     */
    notified?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse1
     */
    expirationTimestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse1
     */
    isExpired?: string;
}
