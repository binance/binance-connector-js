import crypto from 'crypto';
import axios, { AxiosError } from 'axios';
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
    SPOT_REST_API_PROD_URL,
} from '../src';
import { fail } from 'assert';

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

        it('should return a query string for given params', () => {
            const params = { a: 1, b: 2, c: 'test' };
            expect(buildQueryString(params)).toBe('a=1&b=2&c=test');
        });

        it('should handle special characters in values', () => {
            const params = { a: 'hello world', b: 'foo@bar.com' };
            expect(buildQueryString(params)).toBe('a=hello%20world&b=foo%40bar.com');
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
});
