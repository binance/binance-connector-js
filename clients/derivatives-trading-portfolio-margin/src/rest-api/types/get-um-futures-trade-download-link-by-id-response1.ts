/* tslint:disable */

/**
 * Binance Public Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading Portfolio Margin REST API
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
 * @interface GetUmFuturesTradeDownloadLinkByIdResponse1
 */
export interface GetUmFuturesTradeDownloadLinkByIdResponse1 {
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    downloadId?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    s3Link?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    notified?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    expirationTimestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesTradeDownloadLinkByIdResponse1
     */
    isExpired?: string;
}
