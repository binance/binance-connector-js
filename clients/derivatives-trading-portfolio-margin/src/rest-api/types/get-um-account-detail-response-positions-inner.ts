/* tslint:disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
 * @interface GetUmAccountDetailResponsePositionsInner
 */
export interface GetUmAccountDetailResponsePositionsInner {
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    initialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    maintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    unrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    positionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    openOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    leverage?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    maxNotional?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    bidNotional?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    askNotional?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    positionAmt?: string;
    /**
     *
     * @type {number}
     * @memberof GetUmAccountDetailResponsePositionsInner
     */
    updateTime?: number;
}
