/* tslint:disable */

/**
 * Binance Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Options REST API
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
 * @interface UserExerciseRecordResponseInner
 */
export interface UserExerciseRecordResponseInner {
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    currency?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    exercisePrice?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    markPrice?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    quantity?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    fee?: string;
    /**
     *
     * @type {number}
     * @memberof UserExerciseRecordResponseInner
     */
    createDate?: number;
    /**
     *
     * @type {number}
     * @memberof UserExerciseRecordResponseInner
     */
    priceScale?: number;
    /**
     *
     * @type {number}
     * @memberof UserExerciseRecordResponseInner
     */
    quantityScale?: number;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    optionSide?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof UserExerciseRecordResponseInner
     */
    quoteAsset?: string;
}
