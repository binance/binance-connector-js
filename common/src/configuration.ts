import { Agent } from 'https';
import type { TimeUnit } from './constants';

export class ConfigurationRestAPI {
    /**
     * The API key used for authentication.
     * @memberof ConfigurationRestAPI
     */
    apiKey: string;
    /**
     * The API secret used for authentication.
     * @memberof ConfigurationRestAPI
     */
    apiSecret?: string;
    /**
     * override base path
     * @type {string}
     * @memberof ConfigurationRestAPI
     */
    basePath?: string;
    /**
     * set a timeout (in milliseconds) for the request
     * @default 1000
     * @type {number}
     * @memberof ConfigurationRestAPI
     */
    timeout?: number;
    /**
     * HTTP/HTTPS proxy configuration
     * @default false
     * @type {object}
     * @property {string} host - Proxy server hostname
     * @property {number} port - Proxy server port number
     * @property {string} protocol - Proxy server protocol
     * @property {object} [auth] - Proxy authentication credentials
     * @property {string} auth.username - Proxy authentication username
     * @property {string} auth.password - Proxy authentication password
     * @memberof ConfigurationRestAPI
     */
    proxy?: {
        host: string;
        port: number;
        protocol?: string;
        auth?: { username: string; password: string };
    };
    /**
     * enables keep-alive functionality for the connection (if httpsAgent is set then we use httpsAgent.keepAlive instead)
     * @default true
     * @type {boolean}
     * @memberof ConfigurationRestAPI
     */
    keepAlive?: boolean;
    /**
     * enables response compression
     * @default true
     * @type {boolean}
     * @memberof ConfigurationRestAPI
     */
    compression?: boolean;
    /**
     * number of retry attempts for failed requests
     * @default 3
     * @type {number}
     * @memberof ConfigurationRestAPI
     */
    retries?: number;
    /**
     * delay between retry attempts in milliseconds
     * @default 1000
     * @type {number}
     * @memberof ConfigurationRestAPI
     */
    backoff?: number;
    /**
     * https agent
     * @default false
     * @type {boolean | Agent}
     * @memberof ConfigurationRestAPI
     */
    httpsAgent?: boolean | Agent;
    /**
     * private key
     * @type {Buffer}
     * @memberof ConfigurationRestAPI
     */
    privateKey?: Buffer;
    /**
     * private key passphrase
     * @type {string}
     * @memberof ConfigurationRestAPI
     */
    privateKeyPassphrase?: string;
    /**
     * timeUnit (used only on SPOT API)
     * @type {TimeUnit}
     * @memberof ConfigurationRestAPI
     */
    timeUnit?: TimeUnit;
    /**
     * base options for axios calls
     * @type {Record<string, unknown>}
     * @memberof ConfigurationRestAPI
     * @internal
     */
    baseOptions?: Record<string, unknown>;

    constructor(param: ConfigurationRestAPI = { apiKey: '' }) {
        this.apiKey = param.apiKey;
        this.apiSecret = param.apiSecret;
        this.basePath = param.basePath;
        this.keepAlive = param.keepAlive ?? true;
        this.compression = param.compression ?? true;
        this.retries = param.retries ?? 3;
        this.backoff = param.backoff ?? 1000;
        this.privateKey = param.privateKey;
        this.privateKeyPassphrase = param.privateKeyPassphrase;
        this.timeUnit = param.timeUnit;
        this.baseOptions = {
            timeout: param.timeout ?? 1000,
            proxy: param.proxy && {
                host: param.proxy.host,
                port: param.proxy.port,
                auth: param.proxy.auth,
            },
            httpsAgent: param.httpsAgent ?? false,
            headers: {
                'Content-Type': 'application/json',
                'X-MBX-APIKEY': param.apiKey,
            },
        };
    }
}

export class ConfigurationWebsocketAPI {
    /**
     * The API key used for authentication.
     * @memberof ConfigurationWebsocketAPI
     */
    apiKey: string;
    /**
     * The API secret used for authentication.
     * @memberof ConfigurationWebsocketAPI
     */
    apiSecret?: string;
    /**
     * override websocket url
     * @type {string}
     * @memberof ConfigurationWebsocketAPI
     */
    wsURL?: string;
    /**
     * set a timeout (in milliseconds) for the request
     * @default 5000
     * @type {number}
     * @memberof ConfigurationWebsocketAPI
     */
    timeout?: number;
    /**
     * reconnction delay
     * @default 5000
     * @type {number}
     * @memberof ConfigurationWebsocketAPI
     */
    reconnectDelay?: number;
    /**
     * use compression for websocket messages
     * @default true
     * @type {boolean}
     * @memberof ConfigurationWebsocketAPI
     */
    compression?: boolean;
    /**
     * websocket agent
     * @default false
     * @type {boolean | Agent}
     * @memberof ConfigurationWebsocketAPI
     */
    agent?: boolean | Agent;
    /**
     * the mode of the connection, either 'single' or 'pool'.
     * @default 'single'
     * @type {'single' | 'pool'}
     * @memberof ConfigurationWebsocketAPI
     */
    mode?: 'single' | 'pool';
    /**
     * the size of the connection pool, if the mode is set to 'pool'.
     * @default 1
     * @type {number}
     * @memberof ConfigurationWebsocketAPI
     */
    poolSize?: number;
    /**
     * private key
     * @type {Buffer}
     * @memberof ConfigurationWebsocketAPI
     */
    privateKey?: Buffer;
    /**
     * private key passphrase
     * @type {string}
     * @memberof ConfigurationWebsocketAPI
     */
    privateKeyPassphrase?: string;
    /**
     * timeUnit (used only on SPOT API)
     * @type {TimeUnit}
     * @memberof ConfigurationWebsocketAPI
     */
    timeUnit?: TimeUnit;
    /**
     * Optional user agent string for identifying the client
     * @type {string}
     * @memberof ConfigurationWebsocketStreams
     * @internal
     */
    userAgent?: string;

    constructor(param: ConfigurationWebsocketAPI = { apiKey: '' }) {
        this.apiKey = param.apiKey;
        this.apiSecret = param.apiSecret;
        this.wsURL = param.wsURL;
        this.timeout = param.timeout ?? 5000;
        this.reconnectDelay = param.reconnectDelay ?? 5000;
        this.compression = param.compression ?? true;
        this.agent = param.agent ?? false;
        this.mode = param.mode ?? 'single';
        this.poolSize = param.poolSize ?? 1;
        this.privateKey = param.privateKey;
        this.privateKeyPassphrase = param.privateKeyPassphrase;
        this.timeUnit = param.timeUnit;
    }
}

export class ConfigurationWebsocketStreams {
    /**
     * override websocket url
     * @type {string}
     * @memberof ConfigurationWebsocketStreams
     */
    wsURL?: string;
    /**
     * reconnction delay
     * @default 5000
     * @type {number}
     * @memberof ConfigurationWebsocketStreams
     */
    reconnectDelay?: number;
    /**
     * use compression for websocket messages
     * @default true
     * @type {boolean}
     * @memberof ConfigurationWebsocketAPI
     */
    compression?: boolean;
    /**
     * websocket agent
     * @default false
     * @type {boolean | Agent}
     * @memberof ConfigurationWebsocketStreams
     */
    agent?: boolean | Agent;
    /**
     * the mode of the connection, either 'single' or 'pool'.
     * @default single
     * @type {'single' | 'pool'}
     * @memberof ConfigurationWebsocketStreams
     */
    mode?: 'single' | 'pool';
    /**
     * the size of the connection pool, if the mode is set to 'pool'.
     * @default 1
     * @type {number}
     * @memberof ConfigurationWebsocketStreams
     */
    poolSize?: number;
    /**
     * timeUnit (used only on SPOT API)
     * @type {TimeUnit}
     * @memberof ConfigurationWebsocketStreams
     */
    timeUnit?: TimeUnit;
    /**
     * Optional user agent string for identifying the client
     * @type {string}
     * @memberof ConfigurationWebsocketStreams
     * @internal
     */
    userAgent?: string;

    constructor(param: ConfigurationWebsocketStreams = {}) {
        this.wsURL = param.wsURL;
        this.reconnectDelay = param.reconnectDelay ?? 5000;
        this.compression = param.compression ?? true;
        this.agent = param.agent ?? false;
        this.mode = param.mode ?? 'single';
        this.poolSize = param.poolSize ?? 1;
        this.timeUnit = param.timeUnit;
    }
}
