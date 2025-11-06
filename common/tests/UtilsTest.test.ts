import crypto from 'crypto';
import axios, { AxiosError } from 'axios';
import { JSONParse } from 'json-with-bigint';
import * as utils from '../src/utils';
import { expect, beforeEach, afterEach, describe, it, jest } from '@jest/globals';
import {
    ConfigurationRestAPI,
    TimeUnit,
    buildQueryString,
    randomString,
    validateTimeUnit,
    delay,
    getTimestamp,
    getSignature,
    shouldRetryRequest,
    httpRequestFunction,
    parseRateLimitHeaders,
    sendRequest,
    replaceWebsocketStreamsPlaceholders,
    normalizeScientificNumbers,
    SPOT_REST_API_PROD_URL,
    ConfigurationWebsocketAPI,
    WebsocketSendMsgOptions,
    Logger,
} from '../src';
import { fail } from 'assert';

jest.mock('../src/logger');
jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

const restConfiguration = new ConfigurationRestAPI({
    apiKey: 'test-api-key',
    apiSecret: 'test-api-secret',
    basePath: SPOT_REST_API_PROD_URL,
});

describe('Utility Functions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('buildQueryString()', () => {
        it('should return an empty string if params is null or undefined', () => {
            expect(buildQueryString(null as never)).toBe('');
            expect(buildQueryString(undefined as never)).toBe('');
        });

        it('should return an empty string for empty object', () => {
            expect(buildQueryString({})).toBe('');
        });

        it('should return a query string for given params', () => {
            const params = { a: 1, b: 2, c: 'test' };
            expect(buildQueryString(params)).toBe('a=1&b=2&c=test');
        });

        it('should handle special characters in values', () => {
            const params = { a: 'hello world', b: 'foo@bar.com' };
            expect(buildQueryString(params)).toBe('a=hello%20world&b=foo%40bar.com');
        });

        it('should handle array values with JSON.stringify format', () => {
            const params = { symbols: ['BTCUSDT', 'ETHUSDT', 'ADAUSDT'] };
            const expected = 'symbols=%5B%22BTCUSDT%22%2C%22ETHUSDT%22%2C%22ADAUSDT%22%5D';
            expect(buildQueryString(params)).toBe(expected);
        });

        it('should handle empty arrays', () => {
            const params = { emptyArray: [] };
            expect(buildQueryString(params)).toBe('emptyArray=%5B%5D');
        });

        it('should handle array of objects', () => {
            const params = {
                orders: [
                    { symbol: 'BTCUSDT', side: 'BUY', quantity: '0.1' },
                    { symbol: 'ETHUSDT', side: 'SELL', quantity: '1.0' },
                ],
            };
            const result = buildQueryString(params);
            const decoded = decodeURIComponent(result);
            expect(decoded).toContain(
                'orders=[{"symbol":"BTCUSDT","side":"BUY","quantity":"0.1"},{"symbol":"ETHUSDT","side":"SELL","quantity":"1.0"}]'
            );
        });

        it('should handle nested objects', () => {
            const params = {
                user: { name: 'John', age: 30 },
                timestamp: 1234567890,
            };
            const result = buildQueryString(params);
            const decoded = decodeURIComponent(result);
            expect(decoded).toContain('user={"name":"John","age":30}');
            expect(decoded).toContain('timestamp=1234567890');
        });

        it('should handle boolean values', () => {
            const params = { active: true, verified: false };
            expect(buildQueryString(params)).toBe('active=true&verified=false');
        });

        it('should handle numeric values including zero', () => {
            const params = { count: 0, price: 123.45, negative: -10 };
            expect(buildQueryString(params)).toBe('count=0&price=123.45&negative=-10');
        });

        it('should handle null and undefined values in object', () => {
            const params = { a: 'test', b: null, c: undefined, d: 'valid' };
            const result = buildQueryString(params);
            expect(result).toMatch(/a=test/);
            expect(result).toMatch(/d=valid/);
        });

        it('should handle mixed data types', () => {
            const params = {
                string: 'hello',
                number: 42,
                boolean: true,
                array: ['a', 'b'],
                object: { nested: 'value' },
            };
            const result = buildQueryString(params);
            expect(result).toContain('string=hello');
            expect(result).toContain('number=42');
            expect(result).toContain('boolean=true');

            const decoded = decodeURIComponent(result);
            expect(decoded).toContain('array=["a","b"]');
            expect(decoded).toContain('object={"nested":"value"}');
        });

        it('should handle URL-unsafe characters', () => {
            const params = {
                special: '!@#$%^&*()+={}[]|\\:";\'<>?,./`~',
                unicode: 'café résumé 中文',
            };
            const result = buildQueryString(params);
            expect(result).not.toContain('!@#$%^&*()+={}[]|\\:";\'<>?,./`~');
            expect(result).not.toContain('café résumé 中文');
            expect(result).toMatch(/special=/);
            expect(result).toMatch(/unicode=/);
        });
    });

    describe('setSearchParams()', () => {
        let url: URL;

        beforeEach(() => {
            url = new URL('https://api.example.com/endpoint');
        });

        it('should set search parameters from a single object', () => {
            const params = { a: 1, b: 'test', c: true };
            utils.setSearchParams(url, params);

            expect(url.searchParams.get('a')).toBe('1');
            expect(url.searchParams.get('b')).toBe('test');
            expect(url.searchParams.get('c')).toBe('true');
        });

        it('should handle multiple parameter objects', () => {
            const params1 = { a: 1, b: 2 };
            const params2 = { c: 3, d: 4 };
            utils.setSearchParams(url, { ...params1, ...params2 });

            expect(url.searchParams.get('a')).toBe('1');
            expect(url.searchParams.get('b')).toBe('2');
            expect(url.searchParams.get('c')).toBe('3');
            expect(url.searchParams.get('d')).toBe('4');
        });

        it('should handle array parameters consistently with buildQueryString', () => {
            const params = { symbols: ['BTCUSDT', 'ETHUSDT'] };
            utils.setSearchParams(url, params);

            const fromUrl = url.searchParams.get('symbols');
            const fromQueryString = buildQueryString(params).split('=')[1];

            expect(fromUrl).toBe(decodeURIComponent(fromQueryString));
        });

        it('should handle array of objects', () => {
            const params = {
                orders: [
                    { symbol: 'BTCUSDT', side: 'BUY', quantity: '0.1' },
                    { symbol: 'ETHUSDT', side: 'SELL', quantity: '1.0' },
                ],
            };
            utils.setSearchParams(url, params);

            const urlParam = url.searchParams.get('orders');
            const queryStringParam = decodeURIComponent(buildQueryString(params).split('=')[1]);

            expect(urlParam).toBe(queryStringParam);
            expect(JSONParse(urlParam!)).toEqual(params.orders);
        });

        it('should handle nested objects consistently', () => {
            const params = {
                user: { name: 'John', preferences: { theme: 'dark', lang: 'en' } },
                timestamp: 1234567890,
            };
            utils.setSearchParams(url, params);

            const userParam = url.searchParams.get('user');
            expect(JSONParse(userParam!)).toEqual(params.user);
        });

        it('should preserve existing URL pathname and hash', () => {
            url = new URL('https://api.example.com/v1/orders?existing=param#section');
            const params = { new: 'value' };
            utils.setSearchParams(url, params);

            expect(url.pathname).toBe('/v1/orders');
            expect(url.hash).toBe('#section');
            expect(url.searchParams.get('new')).toBe('value');
        });

        it('should handle empty objects', () => {
            utils.setSearchParams(url, {});
            expect(url.search).toBe('');
        });

        it('should handle null and undefined values', () => {
            const params = { a: 'test', b: null, c: undefined, d: 'valid' };
            utils.setSearchParams(url, params);

            expect(url.searchParams.get('a')).toBe('test');
            expect(url.searchParams.get('d')).toBe('valid');
        });

        it('should handle special characters', () => {
            const params = {
                special: 'hello world & more',
                email: 'test@example.com',
                unicode: 'café',
            };
            utils.setSearchParams(url, params);

            expect(url.searchParams.get('special')).toBe('hello world & more');
            expect(url.searchParams.get('email')).toBe('test@example.com');
            expect(url.searchParams.get('unicode')).toBe('café');
        });

        it('should produce URLs that generate same query string as buildQueryString', () => {
            const params = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.5,
                orders: [{ symbol: 'ETHUSDT', side: 'SELL' }],
                timestamp: 1234567890,
            };

            utils.setSearchParams(url, params);
            const fromUrl = url.search.substring(1);
            const fromBuildQuery = buildQueryString(params);

            expect(fromUrl).toBe(fromBuildQuery);
        });
    });

    describe('randomString()', () => {
        it('should generate a random string of 32 characters', () => {
            const result = randomString();
            expect(result).toHaveLength(32);
            expect(typeof result).toBe('string');
        });

        it('should generate unique values on successive calls', () => {
            const result1 = randomString();
            const result2 = randomString();
            expect(result1).not.toBe(result2);
        });
    });

    describe('validateTimeUnit()', () => {
        it('should return undefined if no timeUnit is provided', () => {
            expect(validateTimeUnit(undefined as never)).toBeUndefined();
        });

        it('should return the timeUnit if valid', () => {
            expect(validateTimeUnit('MILLISECOND')).toBe('MILLISECOND');
            expect(validateTimeUnit('MICROSECOND')).toBe('MICROSECOND');
        });

        it('should throw an error for invalid timeUnit values', () => {
            expect(() => validateTimeUnit('INVALID')).toThrowError(
                'timeUnit must be either \'MILLISECOND\' or \'MICROSECOND\''
            );
        });
    });

    describe('delay()', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it('should resolve after the specified delay', async () => {
            const delayPromise = delay(1000);
            jest.advanceTimersByTime(1000);
            await expect(delayPromise).resolves.toBeUndefined();
        });
    });

    describe('getTimestamp()', () => {
        it('should return the current timestamp as a number', () => {
            const timestamp = getTimestamp();
            expect(typeof timestamp).toBe('number');
            expect(timestamp).toBeCloseTo(Date.now(), -2); // Allow for minor time differences
        });
    });

    describe('getSignature()', () => {
        const mockParams = { a: 1, b: 2 };

        it('should generate a HMAC-SHA256 signature if apiSecret is provided', () => {
            const config = { apiSecret: 'test-secret' };
            const signature = getSignature(config, mockParams);

            const expectedSignature = crypto
                .createHmac('sha256', config.apiSecret)
                .update('a=1&b=2')
                .digest('hex');

            expect(signature).toBe(expectedSignature);
        });

        it('should generate an RSA signature', () => {
            const { privateKey } = crypto.generateKeyPairSync('rsa', {
                modulusLength: 2048,
            });

            const config = {
                privateKey: privateKey.export({ type: 'pkcs1', format: 'pem' }),
            };
            const signature = getSignature(config, mockParams);

            const expectedSignature = crypto
                .sign('RSA-SHA256', Buffer.from('a=1&b=2'), privateKey)
                .toString('base64');

            expect(signature).toBe(expectedSignature);
        });

        it('should generate an ED25519 signature', () => {
            const privateKey = crypto.generateKeyPairSync('ed25519').privateKey;

            const config = {
                privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }),
            };
            const signature = getSignature(config, mockParams);

            const expectedSignature = crypto
                .sign(null, Buffer.from('a=1&b=2'), privateKey)
                .toString('base64');

            expect(signature).toBe(expectedSignature);
        });

        it('should throw an error if private key algorithm is neither RSA nor ED25519', () => {
            const privateKey = crypto.generateKeyPairSync('ed448').privateKey;
            const config = { privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }) };
            expect(() => getSignature(config, mockParams)).toThrowError(
                'Unsupported private key type. Must be RSA or ED25519.'
            );
        });

        it('should throw an error if private key is invalid', () => {
            const config = { privateKey: 'dummy' };
            expect(() => getSignature(config, mockParams)).toThrowError(
                'Invalid private key. Please provide a valid RSA or ED25519 private key.'
            );
        });

        it('should throw an error if neither apiSecret nor privateKey is provided', () => {
            const config = {};
            expect(() => getSignature(config, mockParams)).toThrowError(
                'Either \'apiSecret\' or \'privateKey\' must be provided for signed requests.'
            );
        });

        it('should call createHmac every time for repeated HMAC signatures', () => {
            const config = { apiSecret: 'test-secret' };
            const expected = crypto
                .createHmac('sha256', config.apiSecret)
                .update('a=1&b=2')
                .digest('hex');

            const hmacSpy = jest.spyOn(crypto, 'createHmac');

            const sig1 = getSignature(config, mockParams);
            const sig2 = getSignature(config, mockParams);

            expect(sig1).toBe(expected);
            expect(sig2).toBe(expected);

            expect(hmacSpy).toHaveBeenCalledTimes(2);
        });

        it('should only call createPrivateKey once for repeated RSA signatures', () => {
            const { privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
            const pem = privateKey.export({ type: 'pkcs1', format: 'pem' }) as string;
            const config = { privateKey: pem };

            const createKeySpy = jest.spyOn(crypto, 'createPrivateKey');

            const sig1 = getSignature(config, mockParams);
            const sig2 = getSignature(config, mockParams);

            const expectedSig = crypto
                .sign('RSA-SHA256', Buffer.from('a=1&b=2'), privateKey)
                .toString('base64');
            expect(sig1).toBe(expectedSig);
            expect(sig2).toBe(expectedSig);

            expect(createKeySpy).toHaveBeenCalledTimes(1);
        });

        it('should only call createPrivateKey once for repeated ED25519 signatures', () => {
            const { privateKey } = crypto.generateKeyPairSync('ed25519');
            const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }) as string;
            const config = { privateKey: pem };

            const createKeySpy = jest.spyOn(crypto, 'createPrivateKey');

            const sig1 = getSignature(config, mockParams);
            const sig2 = getSignature(config, mockParams);

            const expectedSig = crypto
                .sign(null, Buffer.from('a=1&b=2'), privateKey)
                .toString('base64');
            expect(sig1).toBe(expectedSig);
            expect(sig2).toBe(expectedSig);

            expect(createKeySpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('shouldRetryRequest()', () => {
        it('should return true for a 5xx response error with a retriable method', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Internal Server Error',
                toJSON: () => ({}),
                response: {
                    status: 500,
                    data: undefined,
                    statusText: 'Internal Server Error',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'GET', 3)).toBe(true);
        });

        it('should return false for a 5xx response error with a non-retriable method', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Internal Server Error',
                toJSON: () => ({}),
                response: {
                    status: 500,
                    data: undefined,
                    statusText: 'Internal Server Error',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'POST', 3)).toBe(false);
        });

        it('should return true for a 502 Bad Gateway response with a retriable method', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Bad Gateway',
                toJSON: () => ({}),
                response: {
                    status: 502,
                    data: undefined,
                    statusText: 'Bad Gateway',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'DELETE', 2)).toBe(true);
        });

        it('should return true for a network error (ECONNABORTED)', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Network Error',
                toJSON: () => ({}),
                code: 'ECONNABORTED',
            };
            expect(shouldRetryRequest(error, 'GET', 2)).toBe(true);
        });

        it('should return false for a non-retryable status code (404)', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Not Found',
                toJSON: () => ({}),
                response: {
                    status: 404,
                    data: undefined,
                    statusText: 'Not Found',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'GET', 2)).toBe(false);
        });

        it('should return false when retriesLeft is 0', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Service Unavailable',
                toJSON: () => ({}),
                response: {
                    status: 503,
                    data: undefined,
                    statusText: 'Service Unavailable',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'GET', 0)).toBe(false);
        });

        it('should return false when retriesLeft is undefined', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Gateway Timeout',
                toJSON: () => ({}),
                response: {
                    status: 504,
                    data: undefined,
                    statusText: 'Gateway Timeout',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'GET', undefined)).toBe(false);
        });

        it('should return false for an unknown status code', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Unknown Error',
                toJSON: () => ({}),
                response: {
                    status: 418,
                    data: undefined,
                    statusText: '',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, 'GET', 3)).toBe(false);
        });

        it('should return false if the method is missing', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Internal Server Error',
                toJSON: () => ({}),
                response: {
                    status: 500,
                    data: undefined,
                    statusText: 'Internal Server Error',
                    headers: {},
                    config: {
                        headers: new axios.AxiosHeaders(),
                    },
                },
            };
            expect(shouldRetryRequest(error, undefined, 3)).toBe(false);
        });

        it('should return true for an error with no response object (network failure)', () => {
            const error: AxiosError = {
                isAxiosError: true,
                name: 'AxiosError',
                message: 'Request failed',
                toJSON: () => ({}),
            };
            expect(shouldRetryRequest(error, 'GET', 3)).toBe(true);
        });

        it('should return true for an empty error object', () => {
            const error = {};
            expect(shouldRetryRequest(error, 'GET', 3)).toBe(true);
        });
    });

    describe('httpRequestFunction()', () => {
        it('should make a request and return data', async () => {
            const mockResponse = {
                data: JSON.stringify({ result: 'success' }),
                headers: {},
            };

            mockAxios.request.mockResolvedValueOnce(mockResponse);

            const requestArgs = {
                url: '/test',
                options: {},
            };
            const result = await httpRequestFunction(requestArgs, restConfiguration);

            await expect(result.data()).resolves.toEqual({ result: 'success' });
        });

        it('should retry the request on failure and eventually succeed', async () => {
            restConfiguration.retries = 3;
            restConfiguration.backoff = 100;

            const mockResponse = { data: JSON.stringify({ result: 'success' }), headers: {} };
            const mockError = { response: { status: 500 } };

            mockAxios.request.mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockResponse);

            const requestArgs = {
                url: '/test',
                options: { method: 'GET' },
            };
            const result = await httpRequestFunction(requestArgs, restConfiguration);

            await expect(result.data()).resolves.toEqual({ result: 'success' });
            expect(mockAxios.request).toHaveBeenCalledTimes(2);
        });

        it('should throw an error after retries are exhausted', async () => {
            restConfiguration.retries = 3;
            restConfiguration.backoff = 100;

            mockAxios.request
                .mockRejectedValueOnce({
                    response: {
                        status: 500,
                        data: JSON.stringify({}),
                    },
                })
                .mockRejectedValueOnce({
                    response: {
                        status: 500,
                        data: JSON.stringify({}),
                    },
                })
                .mockRejectedValueOnce({
                    response: {},
                });

            const requestArgs = {
                url: '/test',
                options: { method: 'GET' },
            };

            await expect(httpRequestFunction(requestArgs, restConfiguration)).rejects.toThrowError(
                'Request failed after 3 retries'
            );

            expect(mockAxios.request).toHaveBeenCalledTimes(3);
        });

        it('should throw BadRequestError for HTTP 400', async () => {
            const mockError = {
                response: {
                    status: 400,
                    data: JSON.stringify({}),
                },
            };
            mockAxios.request.mockRejectedValueOnce(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs, restConfiguration)).rejects.toThrowError(
                'The request was invalid or cannot be otherwise served.'
            );
        });

        it('should throw UnauthorizedError for HTTP 401', async () => {
            const mockError = {
                response: {
                    status: 401,
                },
            };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrowError(
                'Unauthorized access. Authentication required.'
            );
        });

        it('should throw ForbiddenError for HTTP 403', async () => {
            const mockError = { response: { status: 403 } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrowError(
                'Access to the requested resource is forbidden.'
            );
        });

        it('should throw NotFoundError for HTTP 404', async () => {
            const mockError = { response: { status: 404 } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrowError(
                'The requested resource was not found.'
            );
        });

        it('should throw RateLimitBanError for HTTP 418', async () => {
            const mockError = { response: { status: 418 } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrowError(
                'The IP address has been banned for exceeding rate limits.'
            );
        });

        it('should throw TooManyRequestsError for HTTP 429', async () => {
            const mockError = { response: { status: 429 } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrowError(
                'Too many requests. You are being rate-limited.'
            );
        });

        it('should throw ServerError for generic 5xx errors', async () => {
            const mockError = { response: { status: 503 } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrow('Server error: 503');
        });

        it('should throw ConnectorClientError for generic unknown errors', async () => {
            const mockError = { response: { status: 600 } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrow(
                'An unexpected error occurred.'
            );
        });

        it('should throw NetworkError for network errors', async () => {
            const mockError = { response: {} };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrow(
                'Network error or request timeout.'
            );
        });

        it('should not attempt to parse error data if it is not a string (undefined)', async () => {
            const mockError = { response: { status: 400, data: undefined } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrow(
                'The request was invalid or cannot be otherwise served.'
            );
        });

        it('should not attempt to parse error data if it is not a string (object)', async () => {
            const mockError = { response: { status: 400, data: { foo: 'bar' } } };
            mockAxios.request.mockRejectedValue(mockError);

            const requestArgs = { url: '/test', options: {} };

            await expect(httpRequestFunction(requestArgs)).rejects.toThrow(
                'The request was invalid or cannot be otherwise served.'
            );
        });

        it('should throw a parse error when response data is invalid JSON on success', async () => {
            const mockResponse = {
                data: 'this is not valid JSON',
                headers: {},
            };
            mockAxios.request.mockResolvedValueOnce(mockResponse);

            const requestArgs = {
                url: '/test',
                options: {},
            };
            const result = await httpRequestFunction(requestArgs, restConfiguration);

            await expect(result.data()).rejects.toThrowError(/Failed to parse JSON response/);
        });

        it('should throw BadRequestError if error response data is invalid JSON (string)', async () => {
            const mockError = {
                response: {
                    status: 400,
                    data: 'not valid json',
                },
            };
            mockAxios.request.mockRejectedValueOnce(mockError);

            const requestArgs = {
                url: '/test',
                options: {},
            };

            await expect(httpRequestFunction(requestArgs, restConfiguration)).rejects.toThrowError(
                'The request was invalid or cannot be otherwise served.'
            );
        });

        it('should throw BadRequestError if error response data is an empty string', async () => {
            const mockError = {
                response: {
                    status: 400,
                    data: '',
                },
            };
            mockAxios.request.mockRejectedValueOnce(mockError);

            const requestArgs = {
                url: '/test',
                options: {},
            };

            await expect(httpRequestFunction(requestArgs, restConfiguration)).rejects.toThrowError(
                'The request was invalid or cannot be otherwise served.'
            );
        });

        it('should throw UnauthorizedError if error response data is invalid JSON and status is 401', async () => {
            const mockError = {
                response: {
                    status: 401,
                    data: 'garbage text',
                },
            };
            mockAxios.request.mockRejectedValueOnce(mockError);

            const requestArgs = {
                url: '/test',
                options: {},
            };

            await expect(httpRequestFunction(requestArgs, restConfiguration)).rejects.toThrowError(
                'Unauthorized access. Authentication required.'
            );
        });
    });

    describe('parseRateLimitHeaders()', () => {
        it('should parse rate limit headers correctly', () => {
            const headers = {
                'x-mbx-used-weight-1m': '1200',
                'x-mbx-order-count-1h': '300',
                'retry-after': '60',
            };

            const rateLimits = parseRateLimitHeaders(headers);
            expect(rateLimits).toEqual([
                {
                    rateLimitType: 'REQUEST_WEIGHT',
                    interval: 'MINUTE',
                    intervalNum: 1,
                    count: 1200,
                    retryAfter: 60,
                },
                {
                    rateLimitType: 'ORDERS',
                    interval: 'HOUR',
                    intervalNum: 1,
                    count: 300,
                    retryAfter: 60,
                },
            ]);
        });

        it('should handle empty headers gracefully', () => {
            const headers = {};
            const rateLimits = parseRateLimitHeaders(headers);
            expect(rateLimits).toEqual([]);
        });
    });

    describe('sendRequest()', () => {
        beforeEach(() => {
            utils.clearSignerCache();
            jest.spyOn(utils, 'getSignature').mockImplementation(() => 'mock-signature');
            jest.spyOn(utils, 'setSearchParams').mockImplementation((url, params) => {
                Object.keys(params).forEach((key) =>
                    url.searchParams.append(key, String(params[key]))
                );
            });
            jest.spyOn(utils, 'toPathString').mockImplementation((url) => url.toString());
            jest.spyOn(utils, 'httpRequestFunction').mockImplementation((args) =>
                mockAxios.request(args)
            );
        });

        it('should send a basic GET request with the correct parameters', async () => {
            mockAxios.request.mockResolvedValue({ data: { success: true } });

            const response = await sendRequest(
                restConfiguration,
                '/api/v3/test',
                'GET',
                {},
                undefined,
                {}
            );

            expect(mockAxios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: 'https://api.binance.com/api/v3/test',
                    options: expect.objectContaining({
                        method: 'GET',
                    }),
                })
            );

            expect(response.data).toEqual({ success: true });
        });

        it('should send a signed request with the correct parameters', async () => {
            mockAxios.request.mockResolvedValue({ data: { success: true } });

            await sendRequest(
                restConfiguration,
                '/api/v3/test',
                'POST',
                { param1: 'value1' },
                undefined,
                { isSigned: true }
            );

            expect(mockAxios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: expect.stringContaining('signature=mock-signature'),
                    options: expect.objectContaining({
                        method: 'POST',
                    }),
                })
            );
        });

        it('should handle the timeUnit header correctly', async () => {
            mockAxios.request.mockResolvedValue({ data: { success: true } });

            await sendRequest(restConfiguration, '/api/v3/test', 'GET', {}, 'MILLISECOND', {});

            expect(mockAxios.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: 'https://api.binance.com/api/v3/test',
                    options: expect.objectContaining({
                        method: 'GET',
                        headers: expect.objectContaining({
                            'X-MBX-TIME-UNIT': 'MILLISECOND',
                        }),
                    }),
                })
            );
        });

        it('should throw an error if provided timeUnit is not valid', async () => {
            try {
                await sendRequest(
                    restConfiguration,
                    '/api/v3/test',
                    'GET',
                    {},
                    'INVALID_TIME_UNIT' as unknown as TimeUnit, // Invalid timeUnit
                    {}
                );
                fail('Expected function to throw, but it did not.');
            } catch (error) {
                if (error instanceof Error) {
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBe(
                        'timeUnit must be either \'MILLISECOND\' or \'MICROSECOND\''
                    );
                } else {
                    fail('Expected error to be an instance of Error');
                }
            }
        });
    });

    describe('replaceWebsocketStreamsPlaceholders', () => {
        it('should replace <symbol> with a lowercased symbol value', () => {
            const result = replaceWebsocketStreamsPlaceholders('/<symbol>', { symbol: 'BTCUSDT' });
            expect(result).toBe('/btcusdt');
        });

        it('should normalize keys by removing dashes/underscores and lowercasing', () => {
            const result = replaceWebsocketStreamsPlaceholders('/<window_size>', {
                'window-size': '15m',
            });
            expect(result).toBe('/15m');
        });

        it('should replace @<updateSpeed> with an "@" prefix when updateSpeed is provided', () => {
            const result = replaceWebsocketStreamsPlaceholders('/stream@<updateSpeed>', {
                updateSpeed: '200',
            });
            expect(result).toBe('/stream@200');
        });

        it('should remove the "@" preceding <updateSpeed> when updateSpeed is missing', () => {
            const result = replaceWebsocketStreamsPlaceholders('/stream@<updateSpeed>', {});
            expect(result).toBe('/stream');
        });

        it('should handle multiple placeholders correctly', () => {
            const input = '/<symbol>@depth<levels>@<updateSpeed>';
            const variables = {
                symbol: 'BTCUSDT',
                levels: '10',
                updateSpeed: '100',
            };
            const result = replaceWebsocketStreamsPlaceholders(input, variables);
            expect(result).toBe('/btcusdt@depth10@100');
        });

        it('should return an empty string for missing variable placeholders', () => {
            const result = replaceWebsocketStreamsPlaceholders('/<symbol>', {});
            expect(result).toBe('/');
        });

        it('should return an empty string when the variable is null', () => {
            const result = replaceWebsocketStreamsPlaceholders('/<symbol>', { symbol: null });
            expect(result).toBe('/');
        });

        it('should preserve a preceding "@" for non-updateSpeed placeholders', () => {
            const result = replaceWebsocketStreamsPlaceholders('/prefix@<data>', { data: 'value' });
            expect(result).toBe('/prefix@value');
        });
    });

    describe('buildWebsocketAPIMessage', () => {
        const config: ConfigurationWebsocketAPI = {
            wsURL: 'wss://test',
            apiKey: 'AK123',
            apiSecret: 'SK456',
            timeout: 5000,
        };

        beforeEach(() => {
            jest.spyOn(utils, 'getTimestamp').mockReturnValue(111222333);
            jest.spyOn(utils, 'getSignature').mockReturnValue('SIGNATURE');
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('uses provided valid 32-hex id instead of randomString', () => {
            const payload: WebsocketSendMsgOptions = { id: 'a'.repeat(32), foo: 'bar' };
            const msg = utils.buildWebsocketAPIMessage(config, 'm', payload, {}, false);

            expect(msg.id).toBe('a'.repeat(32));
        });

        it('generates a random id when none provided', () => {
            const payload: WebsocketSendMsgOptions = { foo: 'bar' };
            const msg = utils.buildWebsocketAPIMessage(config, 'm', payload, {}, false);

            expect(msg.id).toBeDefined();
        });

        it('strips empty values from payload before building params', () => {
            const payload: WebsocketSendMsgOptions = { a: 1, b: undefined, c: '' };
            const msg = utils.buildWebsocketAPIMessage(config, 'm', payload, {}, false);

            expect(msg.params).toStrictEqual({ a: '1' });
        });

        it('includes apiKey when withApiKey and not skipAuth', () => {
            const payload: WebsocketSendMsgOptions = { foo: 'bar' };
            const msg = utils.buildWebsocketAPIMessage(
                config,
                'methodName',
                payload,
                { withApiKey: true },
                false
            );

            expect(msg.params.apiKey).toBe(config.apiKey);
        });

        it('does not include apiKey when skipAuth is true, even if withApiKey', () => {
            const payload: WebsocketSendMsgOptions = { foo: 'bar' };
            const msg = utils.buildWebsocketAPIMessage(
                config,
                'methodName',
                payload,
                { withApiKey: true },
                true
            );

            expect(msg.params.apiKey).toBeUndefined();
        });

        it('appends timestamp, sorts, and signature when isSigned and not skipAuth', () => {
            const payload: WebsocketSendMsgOptions = { x: 5 };
            const msg = utils.buildWebsocketAPIMessage(
                config,
                'signMe',
                payload,
                { isSigned: true },
                false
            );
            expect(msg.params.signature).toBe('SIGNATURE');
        });

        it('does not sign or add apiKey when skipAuth=true even if isSigned', () => {
            const payload: WebsocketSendMsgOptions = { y: 10 };
            const msg = utils.buildWebsocketAPIMessage(
                config,
                'noAuthSign',
                payload,
                { isSigned: true, withApiKey: true },
                true
            );

            expect(msg.params.timestamp).toBeDefined();
            expect(msg.params.signature).toBeUndefined();
            expect(msg.params.apiKey).toBeUndefined();
        });

        it('always returns an object with id, method, and params', () => {
            const payload: WebsocketSendMsgOptions = { foo: 'bar' };
            const msg = utils.buildWebsocketAPIMessage(config, 'test', payload, {}, false);

            expect(msg).toEqual({
                id: expect.any(String),
                method: 'test',
                params: { foo: 'bar' },
            });
        });
    });

    describe('sanitizeHeaderValue()', () => {
        it('returns a simple string unchanged', () => {
            expect(utils.sanitizeHeaderValue('foo-bar')).toBe('foo-bar');
        });

        it('throws on a string containing CR', () => {
            expect(() => utils.sanitizeHeaderValue('bad\rvalue')).toThrowError(
                /Invalid header value \(contains CR\/LF\): "bad\rvalue"/
            );
        });

        it('throws on a string containing LF', () => {
            expect(() => utils.sanitizeHeaderValue('bad\nvalue')).toThrowError(
                /Invalid header value \(contains CR\/LF\): "bad\nvalue"/
            );
        });

        it('returns an array of strings when all entries are clean', () => {
            const arr = ['one', 'two', 'three'];
            expect(utils.sanitizeHeaderValue(arr)).toEqual(arr);
        });

        it('throws if any element in the array contains CRLF', () => {
            expect(() =>
                utils.sanitizeHeaderValue(['good', 'bad\nvalue', 'also-good'])
            ).toThrowError(/Invalid header value \(contains CR\/LF\): "bad\nvalue"/);
        });
    });

    describe('parseCustomHeaders()', () => {
        beforeEach(() => {
            (Logger.getInstance as jest.MockedFunction<typeof Logger.getInstance>).mockReturnValue({
                info: jest.fn(),
                error: jest.fn(),
                warn: jest.fn(),
                debug: jest.fn(),
                getInstance: jest.fn().mockReturnThis(),
            } as unknown as jest.Mocked<Logger>);
        });

        it('returns an empty object when input is empty or falsy', () => {
            expect(utils.parseCustomHeaders({})).toEqual({});
            // @ts-expect-error testing falsy
            expect(utils.parseCustomHeaders(null)).toEqual({});
            // @ts-expect-error testing falsy
            expect(utils.parseCustomHeaders(undefined)).toEqual({});
        });

        it('keeps a single safe header', () => {
            const input = { 'X-Test': 'ok' };
            expect(utils.parseCustomHeaders(input)).toEqual({ 'X-Test': 'ok' });
        });

        it('trims whitespace around header names', () => {
            const input = { '  X-Trim  ': 'value' };
            expect(utils.parseCustomHeaders(input)).toEqual({ 'X-Trim': 'value' });
        });

        it('filters out forbidden header names (case-insensitive)', () => {
            const input = {
                Host: 'example.com',
                authorization: 'token',
                CoOkIe: 'id=123',
                ':METHOD': 'DELETE',
                Good: 'yes',
            };
            expect(utils.parseCustomHeaders(input)).toEqual({ Good: 'yes' });
        });

        it('drops headers whose values contain CRLF', () => {
            const input = {
                'X-Bad': 'evil\r\ninject',
                'X-Good': 'safe',
            };
            expect(utils.parseCustomHeaders(input)).toEqual({ 'X-Good': 'safe' });
        });

        it('drops entire header when array value has any bad entry', () => {
            const input = {
                'X-Mixed': ['clean', 'bad\nentry'],
                'X-Also-Good': ['ok1', 'ok2'],
            };
            expect(utils.parseCustomHeaders(input)).toEqual({ 'X-Also-Good': ['ok1', 'ok2'] });
        });

        it('allows array values when all entries are clean', () => {
            const input = {
                'X-Array': ['one', 'two', 'three'],
            };
            expect(utils.parseCustomHeaders(input)).toEqual({ 'X-Array': ['one', 'two', 'three'] });
        });
    });

    describe('normalizeScientificNumbers()', () => {
        it('leaves normal numbers unchanged', () => {
            expect(normalizeScientificNumbers(12345)).toBe('12345');
            expect(normalizeScientificNumbers(0.1234)).toBe('0.1234');
            expect(normalizeScientificNumbers(-999999)).toBe('-999999');
        });

        it('converts small scientific notation to correct decimal strings', () => {
            expect(normalizeScientificNumbers(1.5e-8)).toBe('0.000000015');
            expect(normalizeScientificNumbers(-2.3e-7)).toBe('-0.00000023');
        });

        it('converts large scientific notation to correct decimal string', () => {
            expect(normalizeScientificNumbers(1e21)).toBe('1000000000000000000000');
            expect(normalizeScientificNumbers(2.1e22)).toBe('21000000000000000000000');
            expect(normalizeScientificNumbers(-5.2e24)).toBe('-5200000000000000000000000');
        });

        it('handles positive and negative zero correctly', () => {
            expect(normalizeScientificNumbers(0)).toBe('0');
            expect(normalizeScientificNumbers(-0)).toBe('0');
        });

        it('handles numbers at the thresholds', () => {
            expect(normalizeScientificNumbers(1e-7)).toBe('0.0000001');
            expect(normalizeScientificNumbers(1e21)).toBe('1000000000000000000000');
        });

        it('handles nested objects', () => {
            const input = {
                price: 1.2e-7,
                quantity: 100,
                metadata: {
                    fee: 4.44e-8,
                    level: 5,
                    tag: 'limit',
                },
            };
            const expected = {
                price: '0.00000012',
                quantity: '100',
                metadata: {
                    fee: '0.0000000444',
                    level: '5',
                    tag: 'limit',
                },
            };
            expect(normalizeScientificNumbers(input)).toEqual(expected);
        });

        it('handles arrays', () => {
            const input = [1e-8, 2, 3.5e22, 'ok'];
            const expected = ['0.00000001', '2', '35000000000000000000000', 'ok'];
            expect(normalizeScientificNumbers(input)).toEqual(expected);
        });

        it('handles deep nesting (objects in arrays in objects)', () => {
            const input = {
                orders: [
                    { price: 2e-8, qty: 5 },
                    { price: 5.5e21, qty: 7 },
                ],
                status: 'active',
            };
            const expected = {
                orders: [
                    { price: '0.00000002', qty: '5' },
                    { price: '5500000000000000000000', qty: '7' },
                ],
                status: 'active',
            };
            expect(normalizeScientificNumbers(input)).toEqual(expected);
        });

        it('leaves strings, booleans, null, and undefined untouched', () => {
            expect(normalizeScientificNumbers('0.00001')).toBe('0.00001');
            expect(normalizeScientificNumbers(true)).toBe(true);
            expect(normalizeScientificNumbers(false)).toBe(false);
            expect(normalizeScientificNumbers(null)).toBeNull();
            expect(normalizeScientificNumbers(undefined)).toBeUndefined();
        });

        it('handles empty arrays and objects', () => {
            expect(normalizeScientificNumbers([])).toEqual([]);
            expect(normalizeScientificNumbers({})).toEqual({});
        });

        it('handles mixed types in arrays and objects', () => {
            const input = [0.000000015, 2.2e22, 'string', null, { value: 7.89e-8, status: true }];
            const expected = [
                '0.000000015',
                '22000000000000000000000',
                'string',
                null,
                { value: '0.0000000789', status: true },
            ];
            expect(normalizeScientificNumbers(input)).toEqual(expected);
        });

        it('leaves NaN and Infinity unchanged', () => {
            expect(normalizeScientificNumbers(NaN)).toBe(NaN);
            expect(normalizeScientificNumbers(Infinity)).toBe(Infinity);
            expect(normalizeScientificNumbers(-Infinity)).toBe(-Infinity);
        });
    });
});
