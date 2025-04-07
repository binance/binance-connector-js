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
 * @interface FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner
 */
export interface FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner {
    /**
     *
     * @type {string}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner
     */
    indicator?: string;
    /**
     *
     * @type {number}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner
     */
    value?: number;
    /**
     *
     * @type {number}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner
     */
    triggerValue?: number;
    /**
     *
     * @type {number}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner
     */
    plannedRecoverTime?: number;
    /**
     *
     * @type {boolean}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse2IndicatorsACCOUNTInner
     */
    isLocked?: boolean;
}
