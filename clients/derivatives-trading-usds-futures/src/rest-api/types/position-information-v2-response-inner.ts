/* tslint:disable */

/**
 * Binance Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures REST API
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
 * @interface PositionInformationV2ResponseInner
 */
export interface PositionInformationV2ResponseInner {
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    breakEvenPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    marginType?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    isAutoAddMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    isolatedMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    leverage?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    liquidationPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    maxNotionalValue?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    notional?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    isolatedWallet?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    unRealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2ResponseInner
     */
    positionSide?: string;
    /**
     *
     * @type {number}
     * @memberof PositionInformationV2ResponseInner
     */
    updateTime?: number;
}
