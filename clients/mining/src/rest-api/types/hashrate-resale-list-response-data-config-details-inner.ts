/* tslint:disable */

/**
 * Binance Mining REST API
 *
 * OpenAPI Specification for the Binance Mining REST API
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
 * @interface HashrateResaleListResponseDataConfigDetailsInner
 */
export interface HashrateResaleListResponseDataConfigDetailsInner {
    /**
     *
     * @type {number}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    configId?: number;
    /**
     *
     * @type {string}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    poolUsername?: string;
    /**
     *
     * @type {string}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    toPoolUsername?: string;
    /**
     *
     * @type {string}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    algoName?: string;
    /**
     *
     * @type {number}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    hashRate?: number;
    /**
     *
     * @type {number}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    startDay?: number;
    /**
     *
     * @type {number}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    endDay?: number;
    /**
     *
     * @type {number}
     * @memberof HashrateResaleListResponseDataConfigDetailsInner
     */
    status?: number;
}
