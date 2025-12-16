import { RawAxiosRequestConfig } from 'axios';
import type { TimeUnit } from './constants';

/**
 * Represents the rate limit information for a REST API response.
 * @property {string} rateLimitType - The type of rate limit, either 'REQUEST_WEIGHT' or 'ORDERS'.
 * @property {string} interval - The time interval for the rate limit, one of 'SECOND', 'MINUTE', 'HOUR', or 'DAY'.
 * @property {number} intervalNum - The number of intervals for the rate limit.
 * @property {number} count - The current count of requests or orders for the rate limit.
 * @property {number} [retryAfter] - The number of seconds to wait before retrying the request.
 */
export interface RestApiRateLimit {
    rateLimitType: 'REQUEST_WEIGHT' | 'ORDERS';
    interval: 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY';
    intervalNum: number;
    count: number;
    retryAfter?: number;
}

/**
 * Represents the response from a REST API request.
 * @template T - The type of the data returned in the response.
 * @property {() => Promise<T>} data - A function that returns a Promise resolving to the data from the API response.
 * @property {number} status - The HTTP status code of the response.
 * @property {Record<string, string>} headers - The headers of the response.
 * @property {RestApiRateLimit[]} [rateLimits] - An optional array of rate limit information for the response.
 */
export type RestApiResponse<T> = {
    data: () => Promise<T>;
    status: number;
    headers: Record<string, string>;
    rateLimits?: RestApiRateLimit[];
};

/**
 * Represents the rate limit information for a WebSocket API response.
 * @property {string} rateLimitType - The type of rate limit, either 'REQUEST_WEIGHT' or 'ORDERS'.
 * @property {string} interval - The time interval for the rate limit, one of 'SECOND', 'MINUTE', 'HOUR', or 'DAY'.
 * @property {number} intervalNum - The number of intervals for the rate limit.
 * @property {number} limit - The maximum number of requests or orders allowed within the specified interval.
 * @property {number} count - The current count of requests or orders for the rate limit.
 */
export interface WebsocketApiRateLimit {
    rateLimitType: 'REQUEST_WEIGHT' | 'ORDERS';
    interval: 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY';
    intervalNum: number;
    limit: number;
    count: number;
}

/**
 * Extracts the result or response from a WebSocket API response type.
 * @template T - The type of the WebSocket API response.
 * @returns {T['result'] | T['response'] | never} The extracted result or response, or never if neither exists.
 * @description Checks if the type T has a 'result' or 'response' key and returns its value, otherwise returns never.
 */
type ExtractWebsocketApiResponse<T> = 'result' extends keyof T
    ? T['result']
    : 'response' extends keyof T
      ? T['response']
      : unknown;

/**
 * Represents the response from a WebSocket API.
 * @template T - The type of the WebSocket API response.
 * @property {NonNullable<ExtractWebsocketApiResponse<T>>} data - The extracted, non-null data from the WebSocket API response.
 * @property {WebsocketApiRateLimit[]} [rateLimits] - An optional array of rate limit information for the response.
 */
export type WebsocketApiResponse<T> = {
    data: NonNullable<ExtractWebsocketApiResponse<T>>;
    rateLimits?: WebsocketApiRateLimit[];
};

/**
 * Represents the options for sending a message.
 * The object can have any number of properties, where the keys are strings and the values can be strings, numbers, booleans, objects, or undefined.
 */
export interface SendMessageOptions {
    [key: string]: string | number | boolean | object | undefined;
}

/**
 * Represents an object type where the keys are strings and the values can be strings, numbers, booleans, or objects.
 */
export interface ObjectType {
    [key: string]: string | number | boolean | object;
}

/**
 * Represents the arguments for an Axios request.
 * @property {string} url - The URL for the request.
 * @property {RawAxiosRequestConfig} options - The options for the Axios request.
 */
export interface AxiosRequestArgs {
    url: string;
    options: RawAxiosRequestConfig;
}

/**
 * Represents the arguments for a request.
 * @property {string} endpoint - The endpoint for the request.
 * @property {'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'} method - The HTTP method for the request.
 * @property {Record<string, unknown>} queryParams - The query parameters for the request.
 * @property {Record<string, unknown>} bodyParams - The body parameters for the request.
 * @property {TimeUnit} [timeUnit] - The optional time unit for the request.
 */
export interface RequestArgs {
    endpoint: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    queryParams: Record<string, unknown>;
    bodyParams: Record<string, unknown>;
    timeUnit?: TimeUnit;
}
