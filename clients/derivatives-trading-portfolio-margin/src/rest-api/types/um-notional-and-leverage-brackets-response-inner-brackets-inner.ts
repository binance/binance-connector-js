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
 * @interface UmNotionalAndLeverageBracketsResponseInnerBracketsInner
 */
export interface UmNotionalAndLeverageBracketsResponseInnerBracketsInner {
    /**
     *
     * @type {number}
     * @memberof UmNotionalAndLeverageBracketsResponseInnerBracketsInner
     */
    bracket?: number;
    /**
     *
     * @type {number}
     * @memberof UmNotionalAndLeverageBracketsResponseInnerBracketsInner
     */
    initialLeverage?: number;
    /**
     *
     * @type {number}
     * @memberof UmNotionalAndLeverageBracketsResponseInnerBracketsInner
     */
    notionalCap?: number;
    /**
     *
     * @type {number}
     * @memberof UmNotionalAndLeverageBracketsResponseInnerBracketsInner
     */
    notionalFloor?: number;
    /**
     *
     * @type {number}
     * @memberof UmNotionalAndLeverageBracketsResponseInnerBracketsInner
     */
    maintMarginRatio?: number;
    /**
     *
     * @type {number}
     * @memberof UmNotionalAndLeverageBracketsResponseInnerBracketsInner
     */
    cum?: number;
}
