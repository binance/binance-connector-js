/* tslint:disable */

/**
 * Binance Public Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading USDS Futures REST API
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
 * @interface FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner
 */
export interface FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner {
    /**
     *
     * @type {boolean}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner
     */
    isLocked?: boolean;
    /**
     *
     * @type {number}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner
     */
    plannedRecoverTime?: number;
    /**
     *
     * @type {string}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner
     */
    indicator?: string;
    /**
     *
     * @type {number}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner
     */
    value?: number;
    /**
     *
     * @type {number}
     * @memberof FuturesTradingQuantitativeRulesIndicatorsResponse1IndicatorsBTCUSDTInner
     */
    triggerValue?: number;
}
