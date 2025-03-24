/**
 * Binance Public Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Public Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
 *
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebsocketAPIBase, WebsocketApiResponse, WebsocketSendMsgOptions } from '@binance/common';
import type { SessionLogonResponse, SessionLogoutResponse, SessionStatusResponse } from '../types';

/**
 * AuthApi - interface
 *
 * @interface AuthApi
 */
export interface AuthApiInterface {
    /**
     * Authenticate WebSocket connection using the provided API key.
     *
     * After calling `session.logon`, you can omit `apiKey` and `signature` parameters for future requests that require them.
     *
     * Note that only one API key can be authenticated.
     * Calling `session.logon` multiple times changes the current authenticated API key.
     * Weight: 2
     *
     * @summary WebSocket Log in with API key
     * @param {SessionLogonRequest} requestParameters Request parameters.
     *
     * @returns {Promise<SessionLogonResponse>}
     * @memberof AuthApiInterface
     */
    sessionLogon(
        requestParameters?: SessionLogonRequest
    ): Promise<WebsocketApiResponse<SessionLogonResponse>>;

    /**
     * Forget the API key previously authenticated.
     * If the connection is not authenticated, this request does nothing.
     *
     * Note that the WebSocket connection stays open after `session.logout` request.
     * You can continue using the connection,
     * but now you will have to explicitly provide the `apiKey` and `signature` parameters where needed.
     * Weight: 2
     *
     * @summary WebSocket Log out of the session
     * @param {SessionLogoutRequest} requestParameters Request parameters.
     *
     * @returns {Promise<SessionLogoutResponse>}
     * @memberof AuthApiInterface
     */
    sessionLogout(
        requestParameters?: SessionLogoutRequest
    ): Promise<WebsocketApiResponse<SessionLogoutResponse>>;

    /**
     * Query the status of the WebSocket connection,
     * inspecting which API key (if any) is used to authorize requests.
     * Weight: 2
     *
     * @summary WebSocket Query session status
     * @param {SessionStatusRequest} requestParameters Request parameters.
     *
     * @returns {Promise<SessionStatusResponse>}
     * @memberof AuthApiInterface
     */
    sessionStatus(
        requestParameters?: SessionStatusRequest
    ): Promise<WebsocketApiResponse<SessionStatusResponse>>;
}

/**
 * Request parameters for sessionLogon operation in AuthApi.
 * @interface SessionLogonRequest
 */
export interface SessionLogonRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof AuthApiSessionLogon
     */
    readonly id?: string;

    /**
     * The value cannot be greater than `60000`
     * @type {number}
     * @memberof AuthApiSessionLogon
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for sessionLogout operation in AuthApi.
 * @interface SessionLogoutRequest
 */
export interface SessionLogoutRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof AuthApiSessionLogout
     */
    readonly id?: string;
}

/**
 * Request parameters for sessionStatus operation in AuthApi.
 * @interface SessionStatusRequest
 */
export interface SessionStatusRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof AuthApiSessionStatus
     */
    readonly id?: string;
}

/**
 * AuthApi - object-oriented interface
 * @class AuthApi
 * @extends {WebsocketAPIBase}
 */
export class AuthApi implements AuthApiInterface {
    private readonly websocketBase: WebsocketAPIBase;

    constructor(websocketBase: WebsocketAPIBase) {
        this.websocketBase = websocketBase;
    }

    /**
     * Authenticate WebSocket connection using the provided API key.
     *
     * After calling `session.logon`, you can omit `apiKey` and `signature` parameters for future requests that require them.
     *
     * Note that only one API key can be authenticated.
     * Calling `session.logon` multiple times changes the current authenticated API key.
     * Weight: 2
     *
     * @summary WebSocket Log in with API key
     * @param {SessionLogonRequest} requestParameters Request parameters.
     * @returns {Promise<SessionLogonResponse>}
     * @memberof AuthApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/authentication-requests#log-in-with-api-key-signed Binance API Documentation}
     */
    public sessionLogon(
        requestParameters: SessionLogonRequest = {}
    ): Promise<WebsocketApiResponse<SessionLogonResponse>> {
        return this.websocketBase.sendMessage<SessionLogonResponse>(
            '/session.logon'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: true, withApiKey: false }
        );
    }

    /**
     * Forget the API key previously authenticated.
     * If the connection is not authenticated, this request does nothing.
     *
     * Note that the WebSocket connection stays open after `session.logout` request.
     * You can continue using the connection,
     * but now you will have to explicitly provide the `apiKey` and `signature` parameters where needed.
     * Weight: 2
     *
     * @summary WebSocket Log out of the session
     * @param {SessionLogoutRequest} requestParameters Request parameters.
     * @returns {Promise<SessionLogoutResponse>}
     * @memberof AuthApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/authentication-requests#log-out-of-the-session Binance API Documentation}
     */
    public sessionLogout(
        requestParameters: SessionLogoutRequest = {}
    ): Promise<WebsocketApiResponse<SessionLogoutResponse>> {
        return this.websocketBase.sendMessage<SessionLogoutResponse>(
            '/session.logout'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: false }
        );
    }

    /**
     * Query the status of the WebSocket connection,
     * inspecting which API key (if any) is used to authorize requests.
     * Weight: 2
     *
     * @summary WebSocket Query session status
     * @param {SessionStatusRequest} requestParameters Request parameters.
     * @returns {Promise<SessionStatusResponse>}
     * @memberof AuthApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/authentication-requests#query-session-status Binance API Documentation}
     */
    public sessionStatus(
        requestParameters: SessionStatusRequest = {}
    ): Promise<WebsocketApiResponse<SessionStatusResponse>> {
        return this.websocketBase.sendMessage<SessionStatusResponse>(
            '/session.status'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: false }
        );
    }
}
