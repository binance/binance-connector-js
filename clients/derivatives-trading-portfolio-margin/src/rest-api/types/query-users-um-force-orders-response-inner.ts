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
 * @interface QueryUsersUmForceOrdersResponseInner
 */
export interface QueryUsersUmForceOrdersResponseInner {
    /**
     *
     * @type {number}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    cumQuote?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    origType?: string;
    /**
     *
     * @type {number}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    time?: number;
    /**
     *
     * @type {number}
     * @memberof QueryUsersUmForceOrdersResponseInner
     */
    updateTime?: number;
}
