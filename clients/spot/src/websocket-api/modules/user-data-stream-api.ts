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
import type {
    UserDataStreamPingResponse,
    UserDataStreamStartResponse,
    UserDataStreamStopResponse,
    UserDataStreamSubscribeResponse,
    UserDataStreamUnsubscribeResponse,
} from '../types';

/**
 * UserDataStreamApi - interface
 *
 * @interface UserDataStreamApi
 */
export interface UserDataStreamApiInterface {
    /**
     * Ping a user data stream to keep it alive.
     *
     * User data streams close automatically after 60 minutes,
     * even if you're listening to them on WebSocket Streams.
     * In order to keep the stream open, you have to regularly send pings using the `userDataStream.ping` request.
     *
     * It is recommended to send a ping once every 30 minutes.
     * Weight: 2
     *
     * @summary WebSocket Ping user data stream
     * @param {UserDataStreamPingRequest} requestParameters Request parameters.
     *
     * @returns {Promise<UserDataStreamPingResponse>}
     * @memberof UserDataStreamApiInterface
     */
    userDataStreamPing(
        requestParameters: UserDataStreamPingRequest
    ): Promise<WebsocketApiResponse<UserDataStreamPingResponse>>;

    /**
     * Start a new user data stream.
     * Weight: 2
     *
     * @summary WebSocket Start user data stream
     * @param {UserDataStreamStartRequest} requestParameters Request parameters.
     *
     * @returns {Promise<UserDataStreamStartResponse>}
     * @memberof UserDataStreamApiInterface
     */
    userDataStreamStart(
        requestParameters?: UserDataStreamStartRequest
    ): Promise<WebsocketApiResponse<UserDataStreamStartResponse>>;

    /**
     * Explicitly stop and close the user data stream.
     * Weight: 2
     *
     * @summary WebSocket Stop user data stream
     * @param {UserDataStreamStopRequest} requestParameters Request parameters.
     *
     * @returns {Promise<UserDataStreamStopResponse>}
     * @memberof UserDataStreamApiInterface
     */
    userDataStreamStop(
        requestParameters: UserDataStreamStopRequest
    ): Promise<WebsocketApiResponse<UserDataStreamStopResponse>>;

    /**
     * Subscribe to the User Data Stream in the current WebSocket connection.
     * Weight: 2
     *
     * @summary WebSocket Subscribe to User Data Stream
     * @param {UserDataStreamSubscribeRequest} requestParameters Request parameters.
     *
     * @returns {Promise<UserDataStreamSubscribeResponse>}
     * @memberof UserDataStreamApiInterface
     */
    userDataStreamSubscribe(
        requestParameters?: UserDataStreamSubscribeRequest
    ): Promise<WebsocketApiResponse<UserDataStreamSubscribeResponse>>;

    /**
     * Stop listening to the User Data Stream in the current WebSocket connection.
     * Weight: 2
     *
     * @summary WebSocket Unsubscribe from User Data Stream
     * @param {UserDataStreamUnsubscribeRequest} requestParameters Request parameters.
     *
     * @returns {Promise<UserDataStreamUnsubscribeResponse>}
     * @memberof UserDataStreamApiInterface
     */
    userDataStreamUnsubscribe(
        requestParameters?: UserDataStreamUnsubscribeRequest
    ): Promise<WebsocketApiResponse<UserDataStreamUnsubscribeResponse>>;
}

/**
 * Request parameters for userDataStreamPing operation in UserDataStreamApi.
 * @interface UserDataStreamPingRequest
 */
export interface UserDataStreamPingRequest {
    /**
     *
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamPing
     */
    readonly listenKey: string;

    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamPing
     */
    readonly id?: string;
}

/**
 * Request parameters for userDataStreamStart operation in UserDataStreamApi.
 * @interface UserDataStreamStartRequest
 */
export interface UserDataStreamStartRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamStart
     */
    readonly id?: string;
}

/**
 * Request parameters for userDataStreamStop operation in UserDataStreamApi.
 * @interface UserDataStreamStopRequest
 */
export interface UserDataStreamStopRequest {
    /**
     *
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamStop
     */
    readonly listenKey: string;

    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamStop
     */
    readonly id?: string;
}

/**
 * Request parameters for userDataStreamSubscribe operation in UserDataStreamApi.
 * @interface UserDataStreamSubscribeRequest
 */
export interface UserDataStreamSubscribeRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamSubscribe
     */
    readonly id?: string;
}

/**
 * Request parameters for userDataStreamUnsubscribe operation in UserDataStreamApi.
 * @interface UserDataStreamUnsubscribeRequest
 */
export interface UserDataStreamUnsubscribeRequest {
    /**
     * Unique WebSocket request ID.
     * @type {string}
     * @memberof UserDataStreamApiUserDataStreamUnsubscribe
     */
    readonly id?: string;
}

/**
 * UserDataStreamApi - object-oriented interface
 * @class UserDataStreamApi
 * @extends {WebsocketAPIBase}
 */
export class UserDataStreamApi implements UserDataStreamApiInterface {
    private readonly websocketBase: WebsocketAPIBase;

    constructor(websocketBase: WebsocketAPIBase) {
        this.websocketBase = websocketBase;
    }

    /**
     * Ping a user data stream to keep it alive.
     *
     * User data streams close automatically after 60 minutes,
     * even if you're listening to them on WebSocket Streams.
     * In order to keep the stream open, you have to regularly send pings using the `userDataStream.ping` request.
     *
     * It is recommended to send a ping once every 30 minutes.
     * Weight: 2
     *
     * @summary WebSocket Ping user data stream
     * @param {UserDataStreamPingRequest} requestParameters Request parameters.
     * @returns {Promise<UserDataStreamPingResponse>}
     * @memberof UserDataStreamApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-Data-Stream-requests#ping-user-data-stream-user_stream Binance API Documentation}
     */
    public userDataStreamPing(
        requestParameters: UserDataStreamPingRequest
    ): Promise<WebsocketApiResponse<UserDataStreamPingResponse>> {
        return this.websocketBase.sendMessage<UserDataStreamPingResponse>(
            '/userDataStream.ping'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }

    /**
     * Start a new user data stream.
     * Weight: 2
     *
     * @summary WebSocket Start user data stream
     * @param {UserDataStreamStartRequest} requestParameters Request parameters.
     * @returns {Promise<UserDataStreamStartResponse>}
     * @memberof UserDataStreamApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-Data-Stream-requests#start-user-data-stream-user_stream Binance API Documentation}
     */
    public userDataStreamStart(
        requestParameters: UserDataStreamStartRequest = {}
    ): Promise<WebsocketApiResponse<UserDataStreamStartResponse>> {
        return this.websocketBase.sendMessage<UserDataStreamStartResponse>(
            '/userDataStream.start'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }

    /**
     * Explicitly stop and close the user data stream.
     * Weight: 2
     *
     * @summary WebSocket Stop user data stream
     * @param {UserDataStreamStopRequest} requestParameters Request parameters.
     * @returns {Promise<UserDataStreamStopResponse>}
     * @memberof UserDataStreamApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-Data-Stream-requests#stop-user-data-stream-user_stream Binance API Documentation}
     */
    public userDataStreamStop(
        requestParameters: UserDataStreamStopRequest
    ): Promise<WebsocketApiResponse<UserDataStreamStopResponse>> {
        return this.websocketBase.sendMessage<UserDataStreamStopResponse>(
            '/userDataStream.stop'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }

    /**
     * Subscribe to the User Data Stream in the current WebSocket connection.
     * Weight: 2
     *
     * @summary WebSocket Subscribe to User Data Stream
     * @param {UserDataStreamSubscribeRequest} requestParameters Request parameters.
     * @returns {Promise<UserDataStreamSubscribeResponse>}
     * @memberof UserDataStreamApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-Data-Stream-requests#subscribe-to-user-data-stream-user_stream Binance API Documentation}
     */
    public userDataStreamSubscribe(
        requestParameters: UserDataStreamSubscribeRequest = {}
    ): Promise<WebsocketApiResponse<UserDataStreamSubscribeResponse>> {
        return this.websocketBase.sendMessage<UserDataStreamSubscribeResponse>(
            '/userDataStream.subscribe'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }

    /**
     * Stop listening to the User Data Stream in the current WebSocket connection.
     * Weight: 2
     *
     * @summary WebSocket Unsubscribe from User Data Stream
     * @param {UserDataStreamUnsubscribeRequest} requestParameters Request parameters.
     * @returns {Promise<UserDataStreamUnsubscribeResponse>}
     * @memberof UserDataStreamApi
     * @see {@link https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/user-Data-Stream-requests#unsubscribe-from-user-data-stream-user_stream Binance API Documentation}
     */
    public userDataStreamUnsubscribe(
        requestParameters: UserDataStreamUnsubscribeRequest = {}
    ): Promise<WebsocketApiResponse<UserDataStreamUnsubscribeResponse>> {
        return this.websocketBase.sendMessage<UserDataStreamUnsubscribeResponse>(
            '/userDataStream.unsubscribe'.slice(1),
            requestParameters as unknown as WebsocketSendMsgOptions,
            { isSigned: false, withApiKey: true }
        );
    }
}
