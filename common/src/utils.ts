import crypto from 'crypto';
import fs from 'fs';
import https from 'https';
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
    WebsocketStream,
    WebsocketStreamsBase,
    AxiosRequestArgs,
    SendMessageOptions,
    ObjectType,
} from '.';

/**
 * Generates a query string from an object of parameters.
 *
 * @param params - An object containing the query parameters.
 * @returns The generated query string.
 */
export function buildQueryString(params: object): string {
    if (!params) return '';
    return Object.entries(params).map(stringifyKeyValuePair).join('&');
}

/**
 * Converts a key-value pair into a URL-encoded query parameter string.
 *
 * @param [key, value] - The key-value pair to be converted.
 * @returns The URL-encoded query parameter string.
 */
function stringifyKeyValuePair([key, value]: [string, string]) {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
    return `${key}=${encodeURIComponent(valueString)}`;
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
 * Generates a signature for a signed request based on the provided configuration.
 *
 * @param configuration - The configuration object containing the API secret or private key information.
 * @param queryParams - The object containing the query parameters to be signed.
 * @returns The generated signature as a string.
 */
export const getSignature = function (
    configuration: {
        apiSecret?: string;
        privateKey?: string | Buffer;
        privateKeyPassphrase?: string;
    },
    queryParams: object
): string {
    const params = buildQueryString(queryParams);
    let signature = '';

    if (configuration?.apiSecret && !configuration?.privateKey) {
        // Use HMAC-SHA256 if apiSecret is provided
        signature = crypto
            .createHmac('sha256', configuration.apiSecret)
            .update(params)
            .digest('hex');
    } else if (configuration?.privateKey) {
        let privateKey: string | Buffer = configuration.privateKey;

        // Check if privateKey is a path to a file
        if (typeof privateKey === 'string' && fs.existsSync(privateKey)) {
            privateKey = fs.readFileSync(privateKey, 'utf-8');
        }

        let keyObject: crypto.KeyObject;
        try {
            const privateKeyObj: crypto.PrivateKeyInput = { key: privateKey };
            if (
                configuration.privateKeyPassphrase &&
                typeof configuration.privateKeyPassphrase === 'string'
            ) {
                privateKeyObj.passphrase = configuration.privateKeyPassphrase;
            }
            // Create KeyObject
            keyObject = crypto.createPrivateKey(privateKeyObj);
        } catch {
            throw new Error(
                'Invalid private key. Please provide a valid RSA or ED25519 private key.'
            );
        }

        const keyType = keyObject.asymmetricKeyType;

        if (keyType === 'rsa') {
            signature = crypto
                .sign('RSA-SHA256', Buffer.from(params), keyObject)
                .toString('base64');
        } else if (keyType === 'ed25519') {
            signature = crypto.sign(null, Buffer.from(params), keyObject).toString('base64');
        } else {
            throw new Error('Unsupported private key type. Must be RSA or ED25519.');
        }
    } else {
        throw new Error('Either \'apiSecret\' or \'privateKey\' must be provided for signed requests.');
    }

    return signature;
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
 * Recursively flattens an object or array of objects into URL search parameters.
 *
 * This function takes a `URLSearchParams` instance and a parameter object or array, and adds the flattened key-value pairs to the search parameters.
 * If the parameter is an object, it recursively flattens the object by iterating over its keys. If the parameter is an array, it recursively flattens each item in the array.
 * If the parameter is a primitive value, it adds the key-value pair to the search parameters.
 *
 * @param urlSearchParams - The `URLSearchParams` instance to add the flattened parameters to.
 * @param parameter - The object or array to flatten into search parameters.
 * @param key - The current key prefix, used for nested objects/arrays.
 */
function setFlattenedQueryParams(
    urlSearchParams: URLSearchParams,
    parameter: unknown,
    key: string = ''
): void {
    if (parameter == null) return;
    if (typeof parameter === 'object') {
        if (Array.isArray(parameter)) {
            parameter.forEach((item) => setFlattenedQueryParams(urlSearchParams, item, key));
        } else {
            Object.keys(parameter as Record<string, unknown>).forEach((currentKey) =>
                setFlattenedQueryParams(
                    urlSearchParams,
                    (parameter as Record<string, unknown>)[currentKey],
                    `${key}${key !== '' ? '.' : ''}${currentKey}`
                )
            );
        }
    } else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, String(parameter));
        } else {
            urlSearchParams.set(key, String(parameter));
        }
    }
}

/**
 * Sets the search parameters of the provided URL by flattening the given objects into the URL's search parameters.
 *
 * This function takes a URL and one or more objects, and updates the URL's search parameters by flattening the objects into key-value pairs. It uses the `setFlattenedQueryParams` function to recursively flatten the objects.
 *
 * @param url - The URL to update the search parameters for.
 * @param objects - One or more objects to flatten into the URL's search parameters.
 */
export const setSearchParams = function (url: URL, ...objects: Record<string, unknown>[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
};

export const toPathString = function (url: URL) {
    return url.pathname + url.search + url.hash;
};

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
 * @param axios The Axios instance to use for the request.
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

    if (configuration?.keepAlive) {
        axiosRequestArgs.httpsAgent = new https.Agent({
            ...(configuration?.httpsAgent instanceof https.Agent
                ? configuration.httpsAgent.options
                : {}),
            keepAlive: true,
        });
    }

    if (configuration?.compression) {
        axiosRequestArgs.headers = {
            ...axiosRequestArgs.headers,
            'Accept-Encoding': 'gzip, deflate, br',
        };
    }

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
                data: async () => JSON.parse(response.data) as T,
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
                            data = JSON.parse(responseData);
                        else if (typeof responseData === 'object')
                            data = responseData as Record<string, unknown>;
                    }

                    const errorMsg = (data as { msg?: string }).msg;

                    switch (status) {
                    case 400:
                        throw new BadRequestError(errorMsg);
                    case 401:
                        throw new UnauthorizedError(errorMsg);
                    case 403:
                        throw new ForbiddenError(errorMsg);
                    case 404:
                        throw new NotFoundError(errorMsg);
                    case 418:
                        throw new RateLimitBanError(errorMsg);
                    case 429:
                        throw new TooManyRequestsError(errorMsg);
                    default:
                        if (status >= 500 && status < 600)
                            throw new ServerError(`Server error: ${status}`, status);
                        throw new ConnectorClientError(errorMsg);
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
    params: Record<string, unknown> = {},
    timeUnit?: TimeUnit,
    options: { isSigned?: boolean } = {}
): Promise<RestApiResponse<T>> {
    const localVarUrlObj = new URL(endpoint, configuration?.basePath);
    const localVarRequestOptions: RawAxiosRequestConfig = {
        method,
        ...configuration?.baseOptions,
    };
    const localVarQueryParameter = { ...params };

    if (options.isSigned) {
        const timestamp = getTimestamp();
        localVarQueryParameter['timestamp'] = timestamp;
        const signature = getSignature(configuration!, localVarQueryParameter);
        if (signature) {
            localVarQueryParameter['signature'] = signature;
        }
    }

    setSearchParams(localVarUrlObj, localVarQueryParameter);

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
 * Creates a WebsocketStream instance that subscribes to the specified stream and provides a callback for handling incoming messages.
 *
 * @param websocketBase - The WebsocketStreamsBase instance to use for subscribing and unsubscribing from the stream.
 * @param stream - The name of the stream to subscribe to.
 * @param id - An optional identifier for the stream.
 * @returns A WebsocketStream instance that can be used to handle incoming messages and unsubscribe from the stream.
 */
export function createStreamHandler<T>(
    websocketBase: WebsocketStreamsBase,
    stream: string,
    id?: string
): WebsocketStream<T> {
    websocketBase.subscribe(stream, id);

    let registeredCallback: (data: unknown) => void;
    return {
        on: (event: 'message', callback: (data: T) => void) => {
            if (event === 'message') {
                registeredCallback = (data: unknown) => callback(data as T);
                const callbackSet = websocketBase.streamCallbackMap.get(stream) ?? new Set();
                callbackSet.add(registeredCallback);
                websocketBase.streamCallbackMap.set(stream, callbackSet);
            }
        },
        unsubscribe: () => {
            if (registeredCallback)
                websocketBase.streamCallbackMap.get(stream)?.delete(registeredCallback);
            websocketBase.unsubscribe(stream, id);
        },
    };
}
