/* tslint:disable */

/**
 * Binance Public Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures REST API
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
 * @interface AccountInformationResponsePositionsInner
 */
export interface AccountInformationResponsePositionsInner {
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    initialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    maintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    unrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    positionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    openOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    leverage?: string;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponsePositionsInner
     */
    isolated?: boolean;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    breakEvenPrice?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    maxQty?: string;
    /**
     *
     * @type {number}
     * @memberof AccountInformationResponsePositionsInner
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponsePositionsInner
     */
    notionalValue?: string;
}
