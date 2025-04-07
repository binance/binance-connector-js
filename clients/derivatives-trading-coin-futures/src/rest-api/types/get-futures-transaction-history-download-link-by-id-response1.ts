/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
 * @interface GetFuturesTransactionHistoryDownloadLinkByIdResponse1
 */
export interface GetFuturesTransactionHistoryDownloadLinkByIdResponse1 {
    /**
     *
     * @type {string}
     * @memberof GetFuturesTransactionHistoryDownloadLinkByIdResponse1
     */
    downloadId?: string;
    /**
     *
     * @type {string}
     * @memberof GetFuturesTransactionHistoryDownloadLinkByIdResponse1
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetFuturesTransactionHistoryDownloadLinkByIdResponse1
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetFuturesTransactionHistoryDownloadLinkByIdResponse1
     */
    notified?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetFuturesTransactionHistoryDownloadLinkByIdResponse1
     */
    expirationTimestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetFuturesTransactionHistoryDownloadLinkByIdResponse1
     */
    isExpired?: string;
}
