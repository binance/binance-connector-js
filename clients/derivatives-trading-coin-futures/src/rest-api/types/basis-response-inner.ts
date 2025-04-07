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
 * @interface BasisResponseInner
 */
export interface BasisResponseInner {
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    indexPrice?: string;
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    contractType?: string;
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    basisRate?: string;
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    futuresPrice?: string;
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    annualizedBasisRate?: string;
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    basis?: string;
    /**
     *
     * @type {string}
     * @memberof BasisResponseInner
     */
    pair?: string;
    /**
     *
     * @type {number}
     * @memberof BasisResponseInner
     */
    timestamp?: number;
}
