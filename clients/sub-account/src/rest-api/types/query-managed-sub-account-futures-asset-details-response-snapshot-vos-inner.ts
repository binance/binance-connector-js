/* tslint:disable */
/* eslint-disable */

/**
 * Binance Sub Account REST API
 *
 * OpenAPI Specification for the Binance Sub Account REST API
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
import type { QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInnerData } from './query-managed-sub-account-futures-asset-details-response-snapshot-vos-inner-data';

/**
 *
 * @export
 * @interface QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInner
 */
export interface QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInner {
    /**
     *
     * @type {string}
     * @memberof QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInner
     */
    type?: string;
    /**
     *
     * @type {number}
     * @memberof QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInner
     */
    updateTime?: number;
    /**
     *
     * @type {QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInnerData}
     * @memberof QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInner
     */
    data?: QueryManagedSubAccountFuturesAssetDetailsResponseSnapshotVosInnerData;
}
