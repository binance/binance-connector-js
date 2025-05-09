/* tslint:disable */

/**
 * Binance Fiat REST API
 *
 * OpenAPI Specification for the Binance Fiat REST API
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
 * @interface GetFiatPaymentsHistoryResponseDataInner
 */
export interface GetFiatPaymentsHistoryResponseDataInner {
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    orderNo?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    sourceAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    fiatCurrency?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    obtainAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    cryptoCurrency?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    totalFee?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    paymentMethod?: string;
    /**
     *
     * @type {number}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    createTime?: number;
    /**
     *
     * @type {number}
     * @memberof GetFiatPaymentsHistoryResponseDataInner
     */
    updateTime?: number;
}
