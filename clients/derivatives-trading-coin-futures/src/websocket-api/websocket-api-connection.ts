/**
 * Binance Public Derivatives Trading COIN Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Public Derivatives Trading COIN Futures WebSocket API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebsocketAPIBase, WebsocketSendMsgOptions, WebsocketApiResponse } from '@binance/common';
import { AccountApi } from './modules/account-api';
import { TradeApi } from './modules/trade-api';
import { UserDataStreamsApi } from './modules/user-data-streams-api';

import type {
    AccountInformationRequest,
    FuturesAccountBalanceRequest,
} from './modules/account-api';
import type {
    CancelOrderRequest,
    ModifyOrderRequest,
    NewOrderRequest,
    PositionInformationRequest,
    QueryOrderRequest,
} from './modules/trade-api';
import type {
    CloseUserDataStreamRequest,
    KeepaliveUserDataStreamRequest,
    StartUserDataStreamRequest,
} from './modules/user-data-streams-api';

import type { AccountInformationResponse, FuturesAccountBalanceResponse } from './types';
import type {
    CancelOrderResponse,
    ModifyOrderResponse,
    NewOrderResponse,
    PositionInformationResponse,
    QueryOrderResponse,
} from './types';
import type {
    CloseUserDataStreamResponse,
    KeepaliveUserDataStreamResponse,
    StartUserDataStreamResponse,
} from './types';

export class WebsocketAPIConnection {
    private websocketBase: WebsocketAPIBase;
    private accountApi: AccountApi;
    private tradeApi: TradeApi;
    private userDataStreamsApi: UserDataStreamsApi;

    constructor(websocketBase: WebsocketAPIBase) {
        this.websocketBase = websocketBase;
        this.accountApi = new AccountApi(websocketBase);
        this.tradeApi = new TradeApi(websocketBase);
        this.userDataStreamsApi = new UserDataStreamsApi(websocketBase);
    }

    on(
        event: 'open' | 'message' | 'error' | 'close' | 'ping' | 'pong',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        listener: (...args: any[]) => void
    ) {
        this.websocketBase.on(event, listener);
    }

    off(
        event: 'open' | 'message' | 'error' | 'close' | 'ping' | 'pong',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        listener: (...args: any[]) => void
    ) {
        this.websocketBase.off(event, listener);
    }

    /**
     * Disconnects from the WebSocket server.
     * If there is no active connection, a warning is logged.
     * Otherwise, all connections in the connection pool are closed gracefully,
     * and a message is logged indicating that the connection has been disconnected.
     * @returns A Promise that resolves when all connections have been closed.
     * @throws Error if the WebSocket client is not set.
     */
    disconnect() {
        return this.websocketBase.disconnect();
    }

    /**
     * Checks if the WebSocket connection is currently open.
     * @returns `true` if the connection is open, `false` otherwise.
     */
    isConnected() {
        return this.websocketBase.isConnected();
    }

    /**
     * Sends a ping message to all connected Websocket servers in the pool.
     * If no connections are ready, a warning is logged.
     * For each active connection, the ping message is sent, and debug logs provide details.
     * @throws Error if a Websocket client is not set for a connection.
     */
    pingServer() {
        this.websocketBase.pingServer();
    }

    /**
     * Sends an unsigned message to the WebSocket server
     * @param method The API method to call
     * @param payload Message parameters and options
     * @returns Promise that resolves with the server response
     * @throws Error if not connected
     */
    sendMessage(method: string, payload: WebsocketSendMsgOptions = {}) {
        return this.websocketBase.sendMessage(method, payload);
    }

    /**
     * Sends a signed message to the WebSocket server with authentication
     * @param method The API method to call
     * @param payload Message parameters and options
     * @returns Promise that resolves with the server response
     * @throws Error if not connected
     */
    sendSignedMessage(method: string, payload: WebsocketSendMsgOptions = {}) {
        return this.websocketBase.sendMessage(method, payload, { isSigned: true });
    }

    /**
     * Get current account information. User in single-asset/ multi-assets mode will see different value, see comments in response section for detail.
     *
     * Weight: 5
     *
     * @summary Account Information(USER_DATA)
     * @param {AccountInformationRequest} requestParameters Request parameters.
     * @returns {Promise<AccountInformationResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/websocket-api/Account-Information Binance API Documentation}
     */
    accountInformation(
        requestParameters: AccountInformationRequest = {}
    ): Promise<WebsocketApiResponse<AccountInformationResponse>> {
        return this.accountApi.accountInformation(requestParameters);
    }

    /**
     * Query account balance info
     *
     * Weight: 5
     *
     * @summary Futures Account Balance(USER_DATA)
     * @param {FuturesAccountBalanceRequest} requestParameters Request parameters.
     * @returns {Promise<FuturesAccountBalanceResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/websocket-api/Futures-Account-Balance Binance API Documentation}
     */
    futuresAccountBalance(
        requestParameters: FuturesAccountBalanceRequest = {}
    ): Promise<WebsocketApiResponse<FuturesAccountBalanceResponse>> {
        return this.accountApi.futuresAccountBalance(requestParameters);
    }

    /**
     * Cancel an active order.
     *
     * Either `orderId` or `origClientOrderId` must be sent.
     *
     * Weight: 1
     *
     * @summary Cancel Order (TRADE)
     * @param {CancelOrderRequest} requestParameters Request parameters.
     * @returns {Promise<CancelOrderResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/Cancel-Order Binance API Documentation}
     */
    cancelOrder(
        requestParameters: CancelOrderRequest
    ): Promise<WebsocketApiResponse<CancelOrderResponse>> {
        return this.tradeApi.cancelOrder(requestParameters);
    }

    /**
     * Order modify function, currently only LIMIT order modification is supported, modified orders will be reordered in the match queue
     *
     * Either `orderId` or `origClientOrderId` must be sent, and the `orderId` will prevail if both are sent.
     * Both `quantity` and `price` must be sent, which is different from dapi modify order endpoint.
     * When the new `quantity` or `price` doesn't satisfy PRICE_FILTER / PERCENT_FILTER / LOT_SIZE, amendment will be rejected and the order will stay as it is.
     * However the order will be cancelled by the amendment in the following situations:
     * when the order is in partially filled status and the new `quantity` <= `executedQty`
     * When the order is `GTX` and the new price will cause it to be executed immediately
     * One order can only be modfied for less than 10000 times
     *
     * Weight: 1 on 10s order rate limit(X-MBX-ORDER-COUNT-10S);
     * 1 on 1min order rate limit(X-MBX-ORDER-COUNT-1M);
     * 1 on IP rate limit(x-mbx-used-weight-1m)
     *
     * @summary Modify Order (TRADE)
     * @param {ModifyOrderRequest} requestParameters Request parameters.
     * @returns {Promise<ModifyOrderResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/Modify-Order Binance API Documentation}
     */
    modifyOrder(
        requestParameters: ModifyOrderRequest
    ): Promise<WebsocketApiResponse<ModifyOrderResponse>> {
        return this.tradeApi.modifyOrder(requestParameters);
    }

    /**
     * Send in a new order.
     *
     * Order with type `STOP`, parameter `timeInForce` can be sent ( default `GTC`).
     * Order with type `TAKE_PROFIT`, parameter `timeInForce` can be sent ( default `GTC`).
     * Condition orders will be triggered when:
     * If parameter `priceProtect` is sent as true:
     * when price reaches the `stopPrice`，the difference rate between "MARK_PRICE" and "CONTRACT_PRICE" cannot be larger than the "triggerProtect" of the symbol
     * "triggerProtect" of a symbol can be got from `GET /dapi/v1/exchangeInfo`
     * `STOP`, `STOP_MARKET`:
     * BUY: latest price ("MARK_PRICE" or "CONTRACT_PRICE") >= `stopPrice`
     * SELL: latest price ("MARK_PRICE" or "CONTRACT_PRICE") <= `stopPrice`
     * `TAKE_PROFIT`, `TAKE_PROFIT_MARKET`:
     * BUY: latest price ("MARK_PRICE" or "CONTRACT_PRICE") <= `stopPrice`
     * SELL: latest price ("MARK_PRICE" or "CONTRACT_PRICE") >= `stopPrice`
     * `TRAILING_STOP_MARKET`:
     * BUY: the lowest price after order placed <= `activationPrice`, and the latest price >= the lowest price * (1 + `callbackRate`)
     * SELL: the highest price after order placed >= `activationPrice`, and the latest price <= the highest price * (1 - `callbackRate`)
     * For `TRAILING_STOP_MARKET`, if you got such error code.
     * BUY: `activationPrice` should be smaller than latest price.
     * SELL: `activationPrice` should be larger than latest price.
     * If `newOrderRespType` is sent as `RESULT`:
     * `MARKET` order: the final FILLED result of the order will be return directly.
     * `LIMIT` order with special `timeInForce`: the final status result of the order(FILLED or EXPIRED) will be returned directly.
     * `STOP_MARKET`, `TAKE_PROFIT_MARKET` with `closePosition=true`:
     * Follow the same rules for condition orders.
     * If triggered，**close all** current long position(if `SELL`) or current short position(if `BUY`).
     * Cannot be used with `quantity` parameter
     * Cannot be used with `reduceOnly` parameter
     * In Hedge Mode, cannot be used with `BUY` orders in `LONG` position side. and cannot be used with `SELL` orders in `SHORT` position side
     *
     * Weight: 0
     *
     * @summary New Order(TRADE)
     * @param {NewOrderRequest} requestParameters Request parameters.
     * @returns {Promise<NewOrderResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/New-Order Binance API Documentation}
     */
    newOrder(requestParameters: NewOrderRequest): Promise<WebsocketApiResponse<NewOrderResponse>> {
        return this.tradeApi.newOrder(requestParameters);
    }

    /**
     * Get current position information.
     *
     * Please use with user data stream `ACCOUNT_UPDATE` to meet your timeliness and accuracy needs.
     *
     * Weight: 5
     *
     * @summary Position Information(USER_DATA)
     * @param {PositionInformationRequest} requestParameters Request parameters.
     * @returns {Promise<PositionInformationResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/Position-Information Binance API Documentation}
     */
    positionInformation(
        requestParameters: PositionInformationRequest = {}
    ): Promise<WebsocketApiResponse<PositionInformationResponse>> {
        return this.tradeApi.positionInformation(requestParameters);
    }

    /**
     * Check an order's status.
     *
     * These orders will not be found:
     * order status is `CANCELED` or `EXPIRED` **AND** order has NO filled trade **AND** created time + 3 days < current time
     * order create time + 90 days < current time
     *
     * Either `orderId` or `origClientOrderId` must be sent.
     * `orderId` is self-increment for each specific `symbol`
     *
     * Weight: 1
     *
     * @summary Query Order (USER_DATA)
     * @param {QueryOrderRequest} requestParameters Request parameters.
     * @returns {Promise<QueryOrderResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/websocket-api/Query-Order Binance API Documentation}
     */
    queryOrder(
        requestParameters: QueryOrderRequest
    ): Promise<WebsocketApiResponse<QueryOrderResponse>> {
        return this.tradeApi.queryOrder(requestParameters);
    }

    /**
     * Close out a user data stream.
     *
     * Weight: 1
     *
     * @summary Close User Data Stream (USER_STREAM)
     * @param {CloseUserDataStreamRequest} requestParameters Request parameters.
     * @returns {Promise<CloseUserDataStreamResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Close-User-Data-Stream-Wsp Binance API Documentation}
     */
    closeUserDataStream(
        requestParameters: CloseUserDataStreamRequest = {}
    ): Promise<WebsocketApiResponse<CloseUserDataStreamResponse>> {
        return this.userDataStreamsApi.closeUserDataStream(requestParameters);
    }

    /**
     * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 60 minutes.
     *
     * Weight: 1
     *
     * @summary Keepalive User Data Stream (USER_STREAM)
     * @param {KeepaliveUserDataStreamRequest} requestParameters Request parameters.
     * @returns {Promise<KeepaliveUserDataStreamResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream-Wsp Binance API Documentation}
     */
    keepaliveUserDataStream(
        requestParameters: KeepaliveUserDataStreamRequest = {}
    ): Promise<WebsocketApiResponse<KeepaliveUserDataStreamResponse>> {
        return this.userDataStreamsApi.keepaliveUserDataStream(requestParameters);
    }

    /**
     * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.
     *
     * Weight: 1
     *
     * @summary Start User Data Stream (USER_STREAM)
     * @param {StartUserDataStreamRequest} requestParameters Request parameters.
     * @returns {Promise<StartUserDataStreamResponse>}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Start-User-Data-Stream-Wsp Binance API Documentation}
     */
    startUserDataStream(
        requestParameters: StartUserDataStreamRequest = {}
    ): Promise<WebsocketApiResponse<StartUserDataStreamResponse>> {
        return this.userDataStreamsApi.startUserDataStream(requestParameters);
    }
}
