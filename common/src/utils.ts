import crypto from 'crypto';
import fs from 'fs';
import https from 'https';
import { JSONParse } from 'json-with-bigint';
import { platform, arch } from 'os';
import {
    AxiosResponseHeaders,
    RawAxiosResponseHeaders,
    AxiosResponse,
    AxiosError,
    RawAxiosRequestConfig,
} from 'axios';
import globalAxios from 'axios';
import {
    type ConfigurationRestAPI,
    type RestApiRateLimit,
    type RestApiResponse,
    TimeUnit,
    RequiredError,
    BadRequestError,
    ConnectorClientError,
    ForbiddenError,
    NetworkError,
    NotFoundError,
    RateLimitBanError,
    ServerError,
    TooManyRequestsError,
    UnauthorizedError,
    AxiosRequestArgs,
    SendMessageOptions,
    ObjectType,
    WebsocketSendMsgOptions,
    WebsocketSendMsgConfig,
    ConfigurationWebsocketAPI,
    Logger,
} from '.';

/**
 * A weak cache for storing RequestSigner instances based on configuration parameters.
 *
 * @remarks
 * Uses a WeakMap to cache and reuse RequestSigner instances for configurations with
 * apiSecret, privateKey, and privateKeyPassphrase, allowing efficient memory management.
 */
let signerCache = new WeakMap<
    {
        apiSecret?: string;
        privateKey?: string | Buffer;
        privateKeyPassphrase?: string;
    },
    RequestSigner
>();

/**
 * Represents a request signer for generating signatures using HMAC-SHA256 or asymmetric key signing.
 *
 * Supports two signing methods:
 * 1. HMAC-SHA256 using an API secret
 * 2. Asymmetric signing using RSA or ED25519 private keys
 *
 * @throws {Error} If neither API secret nor private key is provided, or if the private key is invalid
 */
class RequestSigner {
    private apiSecret?: string;
    private keyObject?: crypto.KeyObject;
    private keyType?: string;

    constructor(configuration: {
        apiSecret?: string;
        privateKey?: string | Buffer;
        privateKeyPassphrase?: string;
    }) {
        // HMAC-SHA256 path
        if (configuration.apiSecret && !configuration.privateKey) {
            this.apiSecret = configuration.apiSecret;
            return;
        }

        // Asymmetric path
        if (configuration.privateKey) {
            let privateKey: string | Buffer = configuration.privateKey;

            // If path, read file once
            if (typeof privateKey === 'string' && fs.existsSync(privateKey)) {
                privateKey = fs.readFileSync(privateKey, 'utf-8');
            }

            // Build KeyObject once
            const keyInput: crypto.PrivateKeyInput = { key: privateKey };
            if (
                configuration.privateKeyPassphrase &&
                typeof configuration.privateKeyPassphrase === 'string'
            ) {
                keyInput.passphrase = configuration.privateKeyPassphrase;
            }

            try {
                this.keyObject = crypto.createPrivateKey(keyInput);
                this.keyType = this.keyObject.asymmetricKeyType;
            } catch {
                throw new Error(
                    'Invalid private key. Please provide a valid RSA or ED25519 private key.'
                );
            }

            return;
        }

        throw new Error('Either \'apiSecret\' or \'privateKey\' must be provided for signed requests.');
    }

    sign(queryParams: Record<string, unknown>, bodyParams?: Record<string, unknown>): string {
        const queryParamsString = buildQueryString(queryParams);
        const bodyParamsString = bodyParams ? buildQueryString(bodyParams) : '';
        const params = queryParamsString + bodyParamsString;

        // HMAC-SHA256 signing
        if (this.apiSecret)
            return crypto.createHmac('sha256', this.apiSecret).update(params).digest('hex');

        // Asymmetric signing
        if (this.keyObject && this.keyType) {
            const data = Buffer.from(params);

            if (this.keyType === 'rsa')
                return crypto.sign('RSA-SHA256', data, this.keyObject).toString('base64');
            if (this.keyType === 'ed25519')
                return crypto.sign(null, data, this.keyObject).toString('base64');

            throw new Error('Unsupported private key type. Must be RSA or ED25519.');
        }

        throw new Error('Signer is not properly initialized.');
    }
}

/**
 * Resets the signer cache to a new empty WeakMap.
 *
 * This function clears the existing signer cache, creating a fresh WeakMap
 * to store RequestSigner instances associated with configuration objects.
 */
export const clearSignerCache = function (): void {
    signerCache = new WeakMap<
        {
            apiSecret?: string;
            privateKey?: string | Buffer;
            privateKeyPassphrase?: string;
        },
        RequestSigner
    >();
};

/**
 * Serializes a value to a string representation.
 *
 * - If the value is `null` or `undefined`, returns an empty string.
 * - If the value is an array or a non-null object, returns its JSON string representation.
 * - Otherwise, converts the value to a string using `String()`.
 *
 * @param value - The value to serialize.
 * @returns The serialized string representation of the value.
 */
function serializeValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (Array.isArray(value) || (typeof value === 'object' && value !== null))
        return JSON.stringify(value);
    return String(value);
}

/**
 * Builds a URL query string from the given parameters object.
 *
 * Iterates over the key-value pairs in the `params` object, serializes each value,
 * and encodes it for use in a URL. Only keys with non-null and non-undefined values
 * are included in the resulting query string.
 *
 * @param params - An object containing key-value pairs to be serialized into a query string.
 * @returns A URL-encoded query string representing the provided parameters.
 */
export function buildQueryString(params: Record<string, unknown>): string {
    if (!params) return '';

    const pairs: string[] = [];
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            const serializedValue = serializeValue(value);
            pairs.push(`${key}=${encodeURIComponent(serializedValue)}`);
        }
    });

    return pairs.join('&');
}

/**
 * Generates a random string of 16 hexadecimal characters.
 *
 * @returns A random string of 16 hexadecimal characters.
 */
export function randomString() {
    return crypto.randomBytes(16).toString('hex');
}

/**
 * Generates a cryptographically secure random 32-bit unsigned integer.
 *
 * Uses the Web Crypto API to generate a random value between 0 and 4,294,967,295 (2^32 - 1).
 *
 * @returns A random 32-bit unsigned integer.
 */
export function randomInteger(): number {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0];
}

/**
 * Normalizes a stream ID to ensure it is valid, generating a random ID if needed.
 *
 * For string inputs:
 * - Returns the input if it's a valid 32-character hexadecimal string (case-insensitive)
 * - Otherwise, generates a new random hexadecimal string using `randomString()`
 *
 * For number inputs:
 * - Returns the input if it's a finite, non-negative integer within the safe integer range
 * - Otherwise, generates a new random integer using `randomInteger()`
 *
 * For null or undefined inputs:
 * - Generates a new random hexadecimal string using `randomString()`
 *
 * @param id - The stream ID to normalize (string, number, null, or undefined).
 * @param streamIdIsStrictlyNumber - Boolean forcing an id to be a number or not.
 * @returns A valid stream ID as either a 32-character hexadecimal string or a safe integer.
 */
export function normalizeStreamId(
    id: string | number | null | undefined,
    streamIdIsStrictlyNumber?: boolean
): string | number {
    const isValidNumber =
        typeof id === 'number' &&
        Number.isFinite(id) &&
        Number.isInteger(id) &&
        id >= 0 &&
        id <= Number.MAX_SAFE_INTEGER;

    if (streamIdIsStrictlyNumber || typeof id === 'number')
        return isValidNumber ? id : randomInteger();

    if (typeof id === 'string') return id && /^[0-9a-f]{32}$/i.test(id) ? id : randomString();

    return randomString();
}

/**
 * Validates the provided time unit string and returns it if it is either 'MILLISECOND' or 'MICROSECOND'.
 *
 * @param timeUnit - The time unit string to be validated.
 * @returns The validated time unit string, or `undefined` if the input is falsy.
 * @throws {Error} If the time unit is not 'MILLISECOND' or 'MICROSECOND'.
 */
export function validateTimeUnit(timeUnit: string): string | undefined {
    if (!timeUnit) {
        return;
    } else if (
        timeUnit !== TimeUnit.MILLISECOND &&
        timeUnit !== TimeUnit.MICROSECOND &&
        timeUnit !== TimeUnit.millisecond &&
        timeUnit !== TimeUnit.microsecond
    ) {
        throw new Error('timeUnit must be either \'MILLISECOND\' or \'MICROSECOND\'');
    }

    return timeUnit;
}

/**
 * Delays the execution of the current function for the specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to delay the function.
 * @returns A Promise that resolves after the specified delay.
 */
export async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates the current timestamp in milliseconds.
 *
 * @returns The current timestamp in milliseconds.
 */
export function getTimestamp(): number {
    return Date.now();
}

/**
 * Generates a signature for the given configuration and query parameters using a cached request signer.
 *
 * @param configuration - Configuration object containing API secret, private key, and optional passphrase.
 * @param queryParams - The query parameters to be signed.
 * @returns A string representing the generated signature.
 */
export const getSignature = function (
    configuration: {
        apiSecret?: string;
        privateKey?: string | Buffer;
        privateKeyPassphrase?: string;
    },
    queryParams: Record<string, unknown>,
    bodyParams?: Record<string, unknown>
): string {
    let signer = signerCache.get(configuration);
    if (!signer) {
        signer = new RequestSigner(configuration);
        signerCache.set(configuration, signer);
    }
    return signer.sign(queryParams, bodyParams);
};

/**
 * Asserts that a function parameter exists and is not null or undefined.
 *
 * @param functionName - The name of the function that the parameter belongs to.
 * @param paramName - The name of the parameter to check.
 * @param paramValue - The value of the parameter to check.
 * @throws {RequiredError} If the parameter is null or undefined.
 */
export const assertParamExists = function (
    functionName: string,
    paramName: string,
    paramValue: unknown
) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(
            paramName,
            `Required parameter ${paramName} was null or undefined when calling ${functionName}.`
        );
    }
};

/**
 * Sets the search parameters of a given URL object based on the provided key-value pairs.
 * Only parameters with non-null and non-undefined values are included.
 * Values are serialized using the `serializeValue` function before being set.
 *
 * @param url - The URL object whose search parameters will be updated.
 * @param params - An object containing key-value pairs to be set as search parameters.
 */
export function setSearchParams(url: URL, params: Record<string, unknown>): void {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            const serializedValue = serializeValue(value);
            searchParams.set(key, serializedValue);
        }
    });

    url.search = searchParams.toString();
}

/**
 * Converts a URL object to a full path string, including pathname, search parameters, and hash.
 *
 * @param url The URL object to convert to a path string.
 * @returns A complete path string representation of the URL.
 */
export const toPathString = function (url: URL) {
    return url.pathname + url.search + url.hash;
};

/**
 * A type utility that transforms numbers in a type to their string representation when in scientific notation,
 * while preserving the structure of arrays and objects.
 *
 * @template T The input type to be transformed
 * @returns A type where numbers potentially become strings, maintaining the original type's structure
 */
type ScientificToString<T> = T extends number
    ? string | number
    : T extends Array<infer U>
      ? Array<ScientificToString<U>>
      : T extends object
        ? { [K in keyof T]: ScientificToString<T[K]> }
        : T;

/**
 * Normalizes scientific notation numbers in an object or array to a fixed number of decimal places.
 *
 * This function recursively processes objects, arrays, and numbers, converting scientific notation
 * to a fixed decimal representation. Non-numeric values are left unchanged.
 *
 * @template T The type of the input object or value
 * @param obj The object, array, or value to normalize
 * @returns A new object or value with scientific notation numbers normalized
 */
export function normalizeScientificNumbers<T>(obj: T): ScientificToString<T> {
    if (Array.isArray(obj)) {
        return obj.map((item) => normalizeScientificNumbers(item)) as ScientificToString<T>;
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {} as Record<string, unknown>;
        for (const key of Object.keys(obj)) {
            result[key] = normalizeScientificNumbers((obj as Record<string, unknown>)[key]);
        }
        return result as ScientificToString<T>;
    } else if (typeof obj === 'number') {
        if (!Number.isFinite(obj)) return obj as ScientificToString<T>;

        const abs = Math.abs(obj);
        if (abs === 0 || (abs >= 1e-6 && abs < 1e21)) return String(obj) as ScientificToString<T>;

        const isNegative = obj < 0;
        const [rawMantissa, rawExponent] = abs.toExponential().split('e');
        const exponent = +rawExponent;
        const digits = rawMantissa.replace('.', '');

        if (exponent < 0) {
            const zeros = '0'.repeat(Math.abs(exponent) - 1);
            return ((isNegative ? '-' : '') + '0.' + zeros + digits) as ScientificToString<T>;
        } else {
            const pad = exponent - (digits.length - 1);

            if (pad >= 0) {
                return ((isNegative ? '-' : '') +
                    digits +
                    '0'.repeat(pad)) as ScientificToString<T>;
            } else {
                const point = digits.length + pad;
                return ((isNegative ? '-' : '') +
                    digits.slice(0, point) +
                    '.' +
                    digits.slice(point)) as ScientificToString<T>;
            }
        }
    } else {
        return obj as ScientificToString<T>;
    }
}

/**
 * Determines whether a request should be retried based on the provided error.
 *
 * This function checks the HTTP method, response status, and number of retries left to determine if a request should be retried.
 *
 * @param error The error object to check.
 * @param method The HTTP method of the request (optional).
 * @param retriesLeft The number of retries left (optional).
 * @returns `true` if the request should be retried, `false` otherwise.
 */
export const shouldRetryRequest = function (
    error: AxiosError | object,
    method?: string,
    retriesLeft?: number
): boolean {
    const isRetriableMethod = ['GET', 'DELETE'].includes(method ?? '');
    const isRetriableStatus = [500, 502, 503, 504].includes(
        (error as AxiosError)?.response?.status ?? 0
    );
    return (
        (retriesLeft ?? 0) > 0 &&
        isRetriableMethod &&
        (isRetriableStatus || !(error as AxiosError)?.response)
    );
};

/**
 * Performs an HTTP request using the provided Axios instance and configuration.
 *
 * This function handles retries, rate limit handling, and error handling for the HTTP request.
 *
 * @param axiosArgs The request arguments to be passed to Axios.
 * @param configuration The configuration options for the request.
 * @returns A Promise that resolves to the API response, including the data and rate limit headers.
 */
export const httpRequestFunction = async function <T>(
    axiosArgs: AxiosRequestArgs,
    configuration?: ConfigurationRestAPI
): Promise<RestApiResponse<T>> {
    const axiosRequestArgs = {
        ...axiosArgs.options,
        url: (globalAxios.defaults?.baseURL ? '' : (configuration?.basePath ?? '')) + axiosArgs.url,
    };

    if (configuration?.keepAlive && !configuration?.baseOptions?.httpsAgent)
        axiosRequestArgs.httpsAgent = new https.Agent({ keepAlive: true });

    if (configuration?.compression)
        axiosRequestArgs.headers = {
            ...axiosRequestArgs.headers,
            'Accept-Encoding': 'gzip, deflate, br',
        };

    const retries = configuration?.retries ?? 0;
    const backoff = configuration?.backoff ?? 0;
    let attempt = 0;
    let lastError;

    while (attempt <= retries) {
        try {
            const response: AxiosResponse = await globalAxios.request({
                ...axiosRequestArgs,
                responseType: 'text',
            });
            const rateLimits: RestApiRateLimit[] = parseRateLimitHeaders(response.headers);
            return {
                data: async (): Promise<T> => {
                    try {
                        return JSONParse(response.data) as T;
                    } catch (err) {
                        throw new Error(`Failed to parse JSON response: ${err}`);
                    }
                },
                status: response.status,
                headers: response.headers as Record<string, string>,
                rateLimits,
            };
        } catch (error) {
            attempt++;
            const axiosError = error as AxiosError;

            if (
                shouldRetryRequest(
                    axiosError,
                    axiosRequestArgs?.method?.toUpperCase(),
                    retries - attempt
                )
            ) {
                await delay(backoff * attempt);
            } else {
                if (axiosError.response && axiosError.response.status) {
                    const status = axiosError.response?.status;
                    const responseData = axiosError.response.data;

                    let data: Record<string, unknown> = {};
                    if (responseData && responseData !== null) {
                        if (typeof responseData === 'string' && responseData !== '')
                            try {
                                data = JSONParse(responseData);
                            } catch {
                                data = {};
                            }
                        else if (typeof responseData === 'object')
                            data = responseData as Record<string, unknown>;
                    }

                    const errorMsg = (data as { msg?: string }).msg;
                    const errorCode =
                        typeof (data as { code?: unknown }).code === 'number'
                            ? (data as { code: number }).code
                            : undefined;

                    switch (status) {
                    case 400:
                        throw new BadRequestError(errorMsg, errorCode);
                    case 401:
                        throw new UnauthorizedError(errorMsg, errorCode);
                    case 403:
                        throw new ForbiddenError(errorMsg, errorCode);
                    case 404:
                        throw new NotFoundError(errorMsg, errorCode);
                    case 418:
                        throw new RateLimitBanError(errorMsg, errorCode);
                    case 429:
                        throw new TooManyRequestsError(errorMsg, errorCode);
                    default:
                        if (status >= 500 && status < 600)
                            throw new ServerError(`Server error: ${status}`, status);
                        throw new ConnectorClientError(errorMsg, errorCode);
                    }
                } else {
                    if (retries > 0 && attempt >= retries)
                        lastError = new Error(`Request failed after ${retries} retries`);
                    else lastError = new NetworkError('Network error or request timeout.');

                    break;
                }
            }
        }
    }

    throw lastError;
};

/**
 * Parses the rate limit headers from the Axios response headers and returns an array of `RestApiRateLimit` objects.
 *
 * @param headers - The Axios response headers.
 * @returns An array of `RestApiRateLimit` objects containing the parsed rate limit information.
 */
export const parseRateLimitHeaders = function (
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders
): RestApiRateLimit[] {
    const rateLimits: RestApiRateLimit[] = [];

    const parseIntervalDetails = (
        key: string
    ): { interval: 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY'; intervalNum: number } | null => {
        const match = key.match(/x-mbx-used-weight-(\d+)([smhd])|x-mbx-order-count-(\d+)([smhd])/i);
        if (!match) return null;

        const intervalNum = parseInt(match[1] || match[3], 10);
        const intervalLetter = (match[2] || match[4])?.toUpperCase();

        let interval: 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY';
        switch (intervalLetter) {
        case 'S':
            interval = 'SECOND';
            break;
        case 'M':
            interval = 'MINUTE';
            break;
        case 'H':
            interval = 'HOUR';
            break;
        case 'D':
            interval = 'DAY';
            break;
        default:
            return null;
        }

        return { interval, intervalNum };
    };

    for (const [key, value] of Object.entries(headers)) {
        const normalizedKey = key.toLowerCase();
        if (value === undefined) continue;

        if (normalizedKey.startsWith('x-mbx-used-weight-')) {
            const details = parseIntervalDetails(normalizedKey);
            if (details) {
                rateLimits.push({
                    rateLimitType: 'REQUEST_WEIGHT',
                    interval: details.interval,
                    intervalNum: details.intervalNum,
                    count: parseInt(value, 10),
                });
            }
        } else if (normalizedKey.startsWith('x-mbx-order-count-')) {
            const details = parseIntervalDetails(normalizedKey);
            if (details) {
                rateLimits.push({
                    rateLimitType: 'ORDERS',
                    interval: details.interval,
                    intervalNum: details.intervalNum,
                    count: parseInt(value, 10),
                });
            }
        }
    }

    if (headers['retry-after']) {
        const retryAfter = parseInt(headers['retry-after'], 10);
        for (const limit of rateLimits) {
            limit.retryAfter = retryAfter;
        }
    }

    return rateLimits;
};

/**
 * Generic function to send a request with optional API key and signature.
 * @param endpoint - The API endpoint to call.
 * @param method - HTTP method to use (GET, POST, DELETE, etc.).
 * @param params - Query parameters for the request.
 * @param timeUnit - The time unit for the request.
 * @param options - Additional request options (isSigned).
 * @returns A promise resolving to the response data object.
 */
export const sendRequest = function <T>(
    configuration: ConfigurationRestAPI,
    endpoint: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH',
    queryParams: Record<string, unknown> = {},
    bodyParams: Record<string, unknown> = {},
    timeUnit?: TimeUnit,
    options: { isSigned?: boolean } = {}
): Promise<RestApiResponse<T>> {
    const localVarUrlObj = new URL(endpoint, configuration?.basePath);
    const localVarRequestOptions: RawAxiosRequestConfig = {
        method,
        ...configuration?.baseOptions,
    };
    const localVarQueryParameter = { ...normalizeScientificNumbers(queryParams) };
    const localVarBodyParameter = { ...normalizeScientificNumbers(bodyParams) };

    if (options.isSigned) {
        const timestamp = getTimestamp();
        localVarQueryParameter['timestamp'] = timestamp;
        const signature = getSignature(
            configuration!,
            localVarQueryParameter,
            localVarBodyParameter
        );
        if (signature) {
            localVarQueryParameter['signature'] = signature;
        }
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);

    if (Object.keys(localVarBodyParameter).length > 0) {
        const searchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(localVarBodyParameter)) {
            if (value === null || value === undefined) continue;
            const serializedValue = serializeValue(value);
            searchParams.append(key, serializedValue);
        }

        localVarRequestOptions.data = searchParams.toString();
        localVarRequestOptions.headers = {
            ...(localVarRequestOptions.headers || {}),
            'Content-Type': 'application/x-www-form-urlencoded',
        };
    }

    if (timeUnit && localVarRequestOptions.headers) {
        const _timeUnit = validateTimeUnit(timeUnit);
        localVarRequestOptions.headers = {
            ...localVarRequestOptions.headers,
            'X-MBX-TIME-UNIT': _timeUnit,
        };
    }

    return httpRequestFunction<T>(
        {
            url: toPathString(localVarUrlObj),
            options: localVarRequestOptions,
        },
        configuration
    );
};

/**
 * Removes any null, undefined, or empty string values from the provided object.
 *
 * @param obj - The object to remove empty values from.
 * @returns A new object with empty values removed.
 */
export function removeEmptyValue(obj: object): SendMessageOptions {
    if (!(obj instanceof Object)) return {};
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([, value]) => value !== null && value !== undefined && value !== ''
        )
    );
}

/**
 * Sorts the properties of the provided object in alphabetical order and returns a new object with the sorted properties.
 *
 * @param obj - The object to be sorted.
 * @returns A new object with the properties sorted in alphabetical order.
 */
export function sortObject(obj: ObjectType) {
    return Object.keys(obj)
        .sort()
        .reduce((res: ObjectType, key: string) => {
            res[key] = obj[key] as string | number | boolean | object;
            return res;
        }, {});
}

/**
 * Replaces placeholders in the format <field> with corresponding values from the provided variables object.
 *
 * @param {string} str - The input string containing placeholders.
 * @param {Object} variables - An object where keys correspond to placeholder names and values are the replacements.
 * @returns {string} - The resulting string with placeholders replaced by their corresponding values.
 */
export function replaceWebsocketStreamsPlaceholders(
    str: string,
    variables: Record<string, unknown>
): string {
    const normalizedVariables = Object.keys(variables).reduce(
        (acc, key) => {
            const normalizedKey = key.toLowerCase().replace(/[-_]/g, '');
            acc[normalizedKey] = variables[key];
            return acc;
        },
        {} as Record<string, unknown>
    );

    return str.replace(/(@)?<([^>]+)>/g, (match, precedingAt, fieldName) => {
        const normalizedFieldName = fieldName.toLowerCase().replace(/[-_]/g, '');

        if (
            Object.prototype.hasOwnProperty.call(normalizedVariables, normalizedFieldName) &&
            normalizedVariables[normalizedFieldName] != null
        ) {
            const value = normalizedVariables[normalizedFieldName];

            switch (normalizedFieldName) {
            case 'symbol':
            case 'windowsize':
                return (value as string).toLowerCase();
            case 'updatespeed':
                return `@${value}`;
            default:
                return (precedingAt || '') + (value as string);
            }
        }

        return '';
    });
}

/**
 * Generates a standardized user agent string for the application.
 *
 * @param {string} packageName - The name of the package/application.
 * @param {string} packageVersion - The version of the package/application.
 * @returns {string} A formatted user agent string including package details, Node.js version, platform, and architecture.
 */
export function buildUserAgent(packageName: string, packageVersion: string): string {
    return `${packageName}/${packageVersion} (Node.js/${process.version}; ${platform()}; ${arch()})`;
}

/**
 * Builds a WebSocket API message with optional authentication and signature.
 *
 * @param {ConfigurationWebsocketAPI} configuration - The WebSocket API configuration.
 * @param {string} method - The method name for the WebSocket message.
 * @param {WebsocketSendMsgOptions} payload - The payload data to be sent.
 * @param {WebsocketSendMsgConfig} options - Configuration options for message sending.
 * @param {boolean} [skipAuth=false] - Flag to skip authentication if needed.
 * @returns {Object} A structured WebSocket message with id, method, and params.
 */
export function buildWebsocketAPIMessage(
    configuration: ConfigurationWebsocketAPI,
    method: string,
    payload: WebsocketSendMsgOptions,
    options: WebsocketSendMsgConfig,
    skipAuth: boolean = false
): { id: string; method: string; params: Record<string, unknown> } {
    const id = payload.id && /^[0-9a-f]{32}$/.test(payload.id) ? payload.id : randomString();
    delete payload.id;

    let params = normalizeScientificNumbers(removeEmptyValue(payload));
    if ((options.withApiKey || options.isSigned) && !skipAuth) params.apiKey = configuration.apiKey;

    if (options.isSigned) {
        params.timestamp = getTimestamp();
        params = sortObject(params as ObjectType);
        if (!skipAuth) params.signature = getSignature(configuration!, params);
    }

    return { id, method, params };
}

/**
 * Sanitizes a header value by checking for and preventing carriage return and line feed characters.
 *
 * @param {string | string[]} value - The header value or array of header values to sanitize.
 * @returns {string | string[]} The sanitized header value(s).
 * @throws {Error} If the header value contains CR/LF characters.
 */
export function sanitizeHeaderValue(value: string | string[]): string | string[] {
    const sanitizeOne = (v: string) => {
        if (/\r|\n/.test(v)) throw new Error(`Invalid header value (contains CR/LF): "${v}"`);
        return v;
    };

    return Array.isArray(value) ? value.map(sanitizeOne) : sanitizeOne(value);
}

/**
 * Parses and sanitizes custom headers, filtering out forbidden headers.
 *
 * @param {Record<string, string | string[]>} headers - The input headers to be parsed.
 * @returns {Record<string, string | string[]>} A new object with sanitized and allowed headers.
 * @description Removes forbidden headers like 'host', 'authorization', and 'cookie',
 * and sanitizes remaining header values to prevent injection of carriage return or line feed characters.
 */
export function parseCustomHeaders(
    headers: Record<string, string | string[]>
): Record<string, string | string[]> {
    if (!headers || Object.keys(headers).length === 0) return {};

    const forbidden = new Set(['host', 'authorization', 'cookie', ':method', ':path']);
    const parsedHeaders: Record<string, string | string[]> = {};

    for (const [rawName, rawValue] of Object.entries(headers || {})) {
        const name = rawName.trim();
        if (forbidden.has(name.toLowerCase())) {
            Logger.getInstance().warn(`Dropping forbidden header: ${name}`);
            continue;
        }

        try {
            parsedHeaders[name] = sanitizeHeaderValue(rawValue);
        } catch {
            continue;
        }
    }

    return parsedHeaders;
}
