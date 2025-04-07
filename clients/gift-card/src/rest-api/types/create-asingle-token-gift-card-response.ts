/* tslint:disable */
/* eslint-disable */

/**
 * Binance Gift Card REST API
 *
 * OpenAPI Specification for the Binance Gift Card REST API
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
import type { CreateADualTokenGiftCardResponseData } from './create-adual-token-gift-card-response-data';

/**
 *
 * @export
 * @interface CreateASingleTokenGiftCardResponse
 */
export interface CreateASingleTokenGiftCardResponse {
    /**
     *
     * @type {string}
     * @memberof CreateASingleTokenGiftCardResponse
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof CreateASingleTokenGiftCardResponse
     */
    message?: string;
    /**
     *
     * @type {CreateADualTokenGiftCardResponseData}
     * @memberof CreateASingleTokenGiftCardResponse
     */
    data?: CreateADualTokenGiftCardResponseData;
    /**
     *
     * @type {boolean}
     * @memberof CreateASingleTokenGiftCardResponse
     */
    success?: boolean;
}
