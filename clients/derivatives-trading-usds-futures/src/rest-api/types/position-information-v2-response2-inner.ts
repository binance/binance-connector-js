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
 * @interface PositionInformationV2Response2Inner
 */
export interface PositionInformationV2Response2Inner {
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    breakEvenPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    unRealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    liquidationPrice?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    leverage?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    maxNotionalValue?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    marginType?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    isolatedMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    isAutoAddMargin?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    notional?: string;
    /**
     *
     * @type {string}
     * @memberof PositionInformationV2Response2Inner
     */
    isolatedWallet?: string;
    /**
     *
     * @type {number}
     * @memberof PositionInformationV2Response2Inner
     */
    updateTime?: number;
}
