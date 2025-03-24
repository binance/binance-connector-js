/* tslint:disable */

/**
 * Binance Public Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures REST API
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
 * @interface GetFuturesTradeDownloadLinkByIdResponse2
 */
export interface GetFuturesTradeDownloadLinkByIdResponse2 {
    /**
     *
     * @type {string}
     * @memberof GetFuturesTradeDownloadLinkByIdResponse2
     */
    downloadId?: string;
    /**
     *
     * @type {string}
     * @memberof GetFuturesTradeDownloadLinkByIdResponse2
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetFuturesTradeDownloadLinkByIdResponse2
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetFuturesTradeDownloadLinkByIdResponse2
     */
    notified?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetFuturesTradeDownloadLinkByIdResponse2
     */
    expirationTimestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetFuturesTradeDownloadLinkByIdResponse2
     */
    isExpired?: string;
}
