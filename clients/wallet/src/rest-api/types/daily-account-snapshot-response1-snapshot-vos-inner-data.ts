/* tslint:disable */
/* eslint-disable */

/**
 * Binance Wallet REST API
 *
 * OpenAPI Specification for the Binance Wallet REST API
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
import type { DailyAccountSnapshotResponse1SnapshotVosInnerDataBalancesInner } from './daily-account-snapshot-response1-snapshot-vos-inner-data-balances-inner';

/**
 *
 * @export
 * @interface DailyAccountSnapshotResponse1SnapshotVosInnerData
 */
export interface DailyAccountSnapshotResponse1SnapshotVosInnerData {
    /**
     *
     * @type {Array<DailyAccountSnapshotResponse1SnapshotVosInnerDataBalancesInner>}
     * @memberof DailyAccountSnapshotResponse1SnapshotVosInnerData
     */
    balances?: Array<DailyAccountSnapshotResponse1SnapshotVosInnerDataBalancesInner>;
    /**
     *
     * @type {string}
     * @memberof DailyAccountSnapshotResponse1SnapshotVosInnerData
     */
    totalAssetOfBtc?: string;
}
