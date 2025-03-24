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
 * @interface GetUmFuturesOrderDownloadLinkByIdResponse2
 */
export interface GetUmFuturesOrderDownloadLinkByIdResponse2 {
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    downloadId?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    url?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    s3Link?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    notified?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    expirationTimestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetUmFuturesOrderDownloadLinkByIdResponse2
     */
    isExpired?: string;
}
