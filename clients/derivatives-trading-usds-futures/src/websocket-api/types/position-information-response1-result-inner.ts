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
 * @interface PositionInformationResponse1ResultInner
 */
export interface PositionInformationResponse1ResultInner {
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    breakEvenPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    marginType?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    isAutoAddMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    isolatedMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    leverage?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    liquidationPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    maxNotionalValue?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    notional?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    isolatedWallet?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    unRealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationResponse1ResultInner
     */
    positionSide?: string;
    /**
     *
     * @type {number}
     * @memberof PositionInformationResponse1ResultInner
     */
    updateTime?: number;
}
