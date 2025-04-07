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
 * @interface PositionInformationResponse2ResultInner
 */
export interface PositionInformationResponse2ResultInner {
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    breakEvenPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    unRealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    liquidationPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    leverage?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    maxNotionalValue?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    marginType?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    isolatedMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    isAutoAddMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    notional?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse2ResultInner
     */
    isolatedWallet?: string;
    /**
     *
     * @type {number}
     * @memberof PositionInformationResponse2ResultInner
     */
    updateTime?: number;
}
