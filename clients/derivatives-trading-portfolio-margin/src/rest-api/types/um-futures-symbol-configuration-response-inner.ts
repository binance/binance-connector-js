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
 * @interface UmFuturesSymbolConfigurationResponseInner
 */
export interface UmFuturesSymbolConfigurationResponseInner {
    /**
     *
     * @type {string}
     * @memberof UmFuturesSymbolConfigurationResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof UmFuturesSymbolConfigurationResponseInner
     */
    marginType?: string;
    /**
     *
     * @type {string}
     * @memberof UmFuturesSymbolConfigurationResponseInner
     */
    isAutoAddMargin?: string;
    /**
     *
     * @type {number}
     * @memberof UmFuturesSymbolConfigurationResponseInner
     */
    leverage?: number;
    /**
     *
     * @type {string}
     * @memberof UmFuturesSymbolConfigurationResponseInner
     */
    maxNotionalValue?: string;
}
