/**
 * Binance Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebsocketAPIBase, WebsocketApiResponse, WebsocketSendMsgOptions } from '@binance/common';
import type {
    CloseUserDataStreamResponse,
    KeepaliveUserDataStreamResponse,
    StartUserDataStreamResponse,
} from '../types';

/**
 * UserDataStreamsApi - interface
 *
 * @interface UserDataStreamsApi
 */
export interface UserDataStreamsApiInterface {
    /**
     * Close out a user data stream.
     *
     * Weight: 1
     *
     * @summary Close User Data Stream (USER_STREAM)
     * @param {CloseUserDataStreamRequest} requestParameters Request parameters.
     *
     * @returns {Promise<CloseUserDataStreamResponse>}
     * @memberof UserDataStreamsApiInterface
     */
    closeUserDataStream(
        requestParameters?: CloseUserDataStreamRequest
    ): Promise<WebsocketApiResponse<CloseUserDataStreamResponse>>;

    /**
     * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 60 minutes.
     *
     * Weight: 1
     *
     * @summary Keepalive User Data Stream (USER_STREAM)
     * @param {KeepaliveUserDataStreamRequest} requestParameters Request parameters.
     *
     * @returns {Promise<KeepaliveUserDataStreamResponse>}
     * @memberof UserDataStreamsApiInterface
     */
    keepaliveUserDataStream(
        requestParameters?: KeepaliveUserDataStreamRequest
    ): Promise<WebsocketApiResponse<KeepaliveUserDataStreamResponse>>;

    /**
     * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.
     *
     * Weight: 1
     *
     * @summary Start User Data Stream (USER_STREAM)
     * @param {StartUserDataStreamRequest} requestParameters Request parameters.
     *
     * @returns {Promise<StartUserDataStreamResponse>}
     * @memberof UserDataStreamsApiInterface
     */
    startUserDataStream(
        requestParameters?: StartUserDataStreamRequest
    ): Promise<WebsocketApiResponse<StartUserDataStreamResponse>>;
}

/**
 * Request parameters for closeUserDataStream operation in UserDataStreamsApi.
 * @interface CloseUserDataStreamRequest
 */
export interface CloseUserDataStreamRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamsApiCloseUserDataStream
     */
    readonly id?: string;
}

/**
 * Request parameters for keepaliveUserDataStream operation in UserDataStreamsApi.
 * @interface KeepaliveUserDataStreamRequest
 */
export interface KeepaliveUserDataStreamRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamsApiKeepaliveUserDataStream
     */
    readonly id?: string;
}

/**
 * Request parameters for startUserDataStream operation in UserDataStreamsApi.
 * @interface StartUserDataStreamRequest
 */
export interface StartUserDataStreamRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamsApiStartUserDataStream
     */
    readonly id?: string;
}

/**
 * UserDataStreamsApi - object-oriented interface
 * @class UserDataStreamsApi
 * @extends {WebsocketAPIBase}
 */
export class UserDataStreamsApi implements UserDataStreamsApiInterface {
    private readonly websocketBase: WebsocketAPIBase;

    constructor(websocketBase: WebsocketAPIBase) {
        this.websocketBase = websocketBase;
    }

    /**
     * Close out a user data stream.
     *
     * Weight: 1
     *
     * @summary Close User Data Stream (USER_STREAM)
     * @param {CloseUserDataStreamRequest} requestParameters Request parameters.
     * @returns {Promise<CloseUserDataStreamResponse>}
     * @memberof UserDataStreamsApi
     * @see {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Close-User-Data-Stream-Wsp Binance API Documentation}
     */
    public closeUserDataStream(
        requestParameters: CloseUserDataStreamRequest = {}
    ): Promise<WebsocketApiResponse<CloseUserDataStreamResponse>> {
        return this.websocketBase.sendMessage<CloseUserDataStreamResponse>(
            '/userDataStream.stop'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }

    /**
     * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 60 minutes.
     *
     * Weight: 1
     *
     * @summary Keepalive User Data Stream (USER_STREAM)
     * @param {KeepaliveUserDataStreamRequest} requestParameters Request parameters.
     * @returns {Promise<KeepaliveUserDataStreamResponse>}
     * @memberof UserDataStreamsApi
     * @see {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Keepalive-User-Data-Stream-Wsp Binance API Documentation}
     */
    public keepaliveUserDataStream(
        requestParameters: KeepaliveUserDataStreamRequest = {}
    ): Promise<WebsocketApiResponse<KeepaliveUserDataStreamResponse>> {
        return this.websocketBase.sendMessage<KeepaliveUserDataStreamResponse>(
            '/userDataStream.ping'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }

    /**
     * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.
     *
     * Weight: 1
     *
     * @summary Start User Data Stream (USER_STREAM)
     * @param {StartUserDataStreamRequest} requestParameters Request parameters.
     * @returns {Promise<StartUserDataStreamResponse>}
     * @memberof UserDataStreamsApi
     * @see {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Start-User-Data-Stream-Wsp Binance API Documentation}
     */
    public startUserDataStream(
        requestParameters: StartUserDataStreamRequest = {}
    ): Promise<WebsocketApiResponse<StartUserDataStreamResponse>> {
        return this.websocketBase.sendMessage<StartUserDataStreamResponse>(
            '/userDataStream.start'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }
}
