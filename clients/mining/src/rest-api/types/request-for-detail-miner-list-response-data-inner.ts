/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { RequestForDetailMinerListResponseDataInnerHashrateDatasInner } from './request-for-detail-miner-list-response-data-inner-hashrate-datas-inner';

/**
 *
 * @export
 * @interface RequestForDetailMinerListResponseDataInner
 */
export interface RequestForDetailMinerListResponseDataInner {
    /**
     *
     * @type {string}
     * @memberof RequestForDetailMinerListResponseDataInner
     */
    workerName?: string;
    /**
     *
     * @type {string}
     * @memberof RequestForDetailMinerListResponseDataInner
     */
    type?: string;
    /**
     *
     * @type {Array<RequestForDetailMinerListResponseDataInnerHashrateDatasInner>}
     * @memberof RequestForDetailMinerListResponseDataInner
     */
    hashrateDatas?: Array<RequestForDetailMinerListResponseDataInnerHashrateDatasInner>;
}
