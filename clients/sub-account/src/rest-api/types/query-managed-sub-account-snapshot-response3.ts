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
import type { QueryManagedSubAccountSnapshotResponse3SnapshotVosInner } from './query-managed-sub-account-snapshot-response3-snapshot-vos-inner';

/**
 *
 * @export
 * @interface QueryManagedSubAccountSnapshotResponse3
 */
export interface QueryManagedSubAccountSnapshotResponse3 {
    /**
     *
     * @type {number}
     * @memberof QueryManagedSubAccountSnapshotResponse3
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof QueryManagedSubAccountSnapshotResponse3
     */
    msg?: string;
    /**
     *
     * @type {Array<QueryManagedSubAccountSnapshotResponse3SnapshotVosInner>}
     * @memberof QueryManagedSubAccountSnapshotResponse3
     */
    snapshotVos?: Array<QueryManagedSubAccountSnapshotResponse3SnapshotVosInner>;
}
