/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { GetOrderModifyHistoryResponseInnerAmendmentOrigQty } from './get-order-modify-history-response-inner-amendment-orig-qty';
// May contain unused imports in some cases
// @ts-ignore
import type { GetOrderModifyHistoryResponseInnerAmendmentPrice } from './get-order-modify-history-response-inner-amendment-price';

/**
 *
 * @export
 * @interface GetOrderModifyHistoryResponseInnerAmendment
 */
export interface GetOrderModifyHistoryResponseInnerAmendment {
    /**
     *
     * @type {GetOrderModifyHistoryResponseInnerAmendmentPrice}
     * @memberof GetOrderModifyHistoryResponseInnerAmendment
     */
    price?: GetOrderModifyHistoryResponseInnerAmendmentPrice;
    /**
     *
     * @type {GetOrderModifyHistoryResponseInnerAmendmentOrigQty}
     * @memberof GetOrderModifyHistoryResponseInnerAmendment
     */
    origQty?: GetOrderModifyHistoryResponseInnerAmendmentOrigQty;
    /**
     *
     * @type {number}
     * @memberof GetOrderModifyHistoryResponseInnerAmendment
     */
    count?: number;
}
