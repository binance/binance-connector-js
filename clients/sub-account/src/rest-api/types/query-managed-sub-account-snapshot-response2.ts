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
import type { QueryManagedSubAccountSnapshotResponse2SnapshotVosInner } from './query-managed-sub-account-snapshot-response2-snapshot-vos-inner';

/**
 *
 * @export
 * @interface QueryManagedSubAccountSnapshotResponse2
 */
export interface QueryManagedSubAccountSnapshotResponse2 {
    /**
     *
     * @type {number}
     * @memberof QueryManagedSubAccountSnapshotResponse2
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof QueryManagedSubAccountSnapshotResponse2
     */
    msg?: string;
    /**
     *
     * @type {Array<QueryManagedSubAccountSnapshotResponse2SnapshotVosInner>}
     * @memberof QueryManagedSubAccountSnapshotResponse2
     */
    snapshotVos?: Array<QueryManagedSubAccountSnapshotResponse2SnapshotVosInner>;
}
