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
 * @interface PositionInformationResponseInner
 */
export interface PositionInformationResponseInner {
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    breakEvenPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    unRealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    liquidationPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    leverage?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    maxQty?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    marginType?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    isolatedMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    isAutoAddMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponseInner
     */
    positionSide?: string;
    /**
     *
     * @type {number}
     * @memberof PositionInformationResponseInner
     */
    updateTime?: number;
}
