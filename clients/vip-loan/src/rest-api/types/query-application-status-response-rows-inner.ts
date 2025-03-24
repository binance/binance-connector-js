/* tslint:disable */

/**
 * Binance Public VIP Loan REST API
 *
 * OpenAPI Specification for the Binance Public VIP Loan REST API
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
 * @interface QueryApplicationStatusResponseRowsInner
 */
export interface QueryApplicationStatusResponseRowsInner {
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    loanAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    orderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    requestId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    loanCoin?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    loanAmount?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    collateralAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    collateralCoin?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    loanTerm?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryApplicationStatusResponseRowsInner
     */
    loanDate?: string;
}
