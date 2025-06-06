/* tslint:disable */

/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
 * @interface QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
 */
export interface QueryBorrowRepayRecordsInMarginAccountResponseRowsInner {
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    isolatedSymbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    interest?: string;
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    principal?: string;
    /**
     *
     * @type {string}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    status?: string;
    /**
     *
     * @type {number}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    timestamp?: number;
    /**
     *
     * @type {number}
     * @memberof QueryBorrowRepayRecordsInMarginAccountResponseRowsInner
     */
    txId?: number;
}
