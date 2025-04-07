/* tslint:disable */

/**
 * Binance Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket API
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
 * @interface AccountInformationResponse1ResultPositionsInner
 */
export interface AccountInformationResponse1ResultPositionsInner {
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    initialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    maintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    unrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    positionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    openOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    leverage?: string;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    isolated?: boolean;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    maxNotional?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    bidNotional?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    askNotional?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    positionAmt?: string;
    /**
     *
     * @type {number}
     * @memberof AccountInformationResponse1ResultPositionsInner
     */
    updateTime?: number;
}
