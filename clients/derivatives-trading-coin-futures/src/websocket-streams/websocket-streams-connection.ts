/**
 * Binance Derivatives Trading COIN Futures WebSocket Market Streams
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures WebSocket Market Streams
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebsocketStreamsBase, WebsocketStream, createStreamHandler } from '@binance/common';
import { WebsocketMarketStreamsApi } from './modules/websocket-market-streams-api';

import type {
    AggregateTradeStreamsRequest,
    AllBookTickersStreamRequest,
    AllMarketLiquidationOrderStreamsRequest,
    AllMarketMiniTickersStreamRequest,
    AllMarketTickersStreamsRequest,
    ContinuousContractKlineCandlestickStreamsRequest,
    ContractInfoStreamRequest,
    DiffBookDepthStreamsRequest,
    IndexKlineCandlestickStreamsRequest,
    IndexPriceStreamRequest,
    IndividualSymbolBookTickerStreamsRequest,
    IndividualSymbolMiniTickerStreamRequest,
    IndividualSymbolTickerStreamsRequest,
    KlineCandlestickStreamsRequest,
    LiquidationOrderStreamsRequest,
    MarkPriceKlineCandlestickStreamsRequest,
    MarkPriceOfAllSymbolsOfAPairRequest,
    MarkPriceStreamRequest,
    PartialBookDepthStreamsRequest,
} from './modules/websocket-market-streams-api';

import type {
    AggregateTradeStreamsResponse,
    AllBookTickersStreamResponse,
    AllMarketLiquidationOrderStreamsResponse,
    AllMarketMiniTickersStreamResponse,
    AllMarketTickersStreamsResponse,
    ContinuousContractKlineCandlestickStreamsResponse,
    ContractInfoStreamResponse,
    DiffBookDepthStreamsResponse,
    IndexKlineCandlestickStreamsResponse,
    IndexPriceStreamResponse,
    IndividualSymbolBookTickerStreamsResponse,
    IndividualSymbolMiniTickerStreamResponse,
    IndividualSymbolTickerStreamsResponse,
    KlineCandlestickStreamsResponse,
    LiquidationOrderStreamsResponse,
    MarkPriceKlineCandlestickStreamsResponse,
    MarkPriceOfAllSymbolsOfAPairResponse,
    MarkPriceStreamResponse,
    PartialBookDepthStreamsResponse,
} from './types';

export class WebsocketStreamsConnection {
    private websocketBase: WebsocketStreamsBase;
    private websocketMarketStreamsApi: WebsocketMarketStreamsApi;

    constructor(websocketBase: WebsocketStreamsBase) {
        this.websocketBase = websocketBase;
        this.websocketMarketStreamsApi = new WebsocketMarketStreamsApi(websocketBase);
    }

    /**
     * Adds an event listener for the specified WebSocket event.
     * @param event - The WebSocket event to listen for, such as 'open', 'message', 'error', 'close', 'ping', or 'pong'.
     * @param listener - The callback function to be executed when the event is triggered. The function can accept any number of arguments.
     */
    on(
        event: 'open' | 'message' | 'error' | 'close' | 'ping' | 'pong',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        listener: (...args: any[]) => void
    ) {
        this.websocketBase.on(event, listener);
    }

    /**
     * Removes an event listener for the specified WebSocket event.
     * @param event - The WebSocket event to stop listening for, such as 'open', 'message', 'error', 'close', 'ping', or 'pong'.
     * @param listener - The callback function that was previously added as the event listener.
     */
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
    disconnect(): Promise<void> {
        return this.websocketBase.disconnect();
    }

    /**
     * Checks if the WebSocket connection is currently open.
     * @returns `true` if the connection is open, `false` otherwise.
     */
    isConnected(): boolean {
        return this.websocketBase.isConnected();
    }

    /**
     * Sends a ping message to all connected Websocket servers in the pool.
     * If no connections are ready, a warning is logged.
     * For each active connection, the ping message is sent, and debug logs provide details.
     * @throws Error if a Websocket client is not set for a connection.
     */
    pingServer(): void {
        this.websocketBase.pingServer();
    }

    /**
     * Subscribes to one or multiple WebSocket streams
     * Handles both single and pool modes
     * @param stream Single stream name or array of stream names to subscribe to
     * @param id Optional subscription ID
     * @returns void
     */
    subscribe(stream: string | string[], id?: string): void {
        this.websocketBase.subscribe(stream, id);
    }

    /**
     * Unsubscribes from one or multiple WebSocket streams
     * Handles both single and pool modes
     * @param stream Single stream name or array of stream names to unsubscribe from
     * @param id Optional unsubscription ID
     * @returns void
     */
    unsubscribe(stream: string | string[], id?: string): void {
        this.websocketBase.unsubscribe(stream, id);
    }

    /**
     * Checks if the WebSocket connection is subscribed to the specified stream.
     * @param stream The name of the WebSocket stream to check.
     * @returns `true` if the connection is subscribed to the stream, `false` otherwise.
     */
    isSubscribed(stream: string): boolean {
        return this.websocketBase.isSubscribed(stream);
    }

    /**
     * Subscribes to the user data WebSocket stream using the provided listen key.
     * @param listenKey - The listen key for the user data WebSocket stream.
     * @param id - Optional user data stream ID
     * @returns A WebSocket stream handler for the user data stream.
     */
    userData(listenKey: string, id?: string): WebsocketStream<object> {
        return createStreamHandler<object>(this.websocketBase, listenKey, id);
    }

    /**
     * The Aggregate Trade Streams push market trade information that is aggregated for fills with same price and taking side every 100 milliseconds.
     *
     * Update Speed: 100ms
     *
     * @summary Aggregate Trade Streams
     * @param {AggregateTradeStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<AggregateTradeStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Aggregate-Trade-Streams Binance API Documentation}
     */
    aggregateTradeStreams(
        requestParameters: AggregateTradeStreamsRequest
    ): WebsocketStream<AggregateTradeStreamsResponse> {
        return this.websocketMarketStreamsApi.aggregateTradeStreams(requestParameters);
    }

    /**
     * Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.
     *
     * Update Speed: Real-time
     *
     * @summary All Book Tickers Stream
     * @param {AllBookTickersStreamRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<AllBookTickersStreamResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Book-Tickers-Stream Binance API Documentation}
     */
    allBookTickersStream(
        requestParameters: AllBookTickersStreamRequest = {}
    ): WebsocketStream<AllBookTickersStreamResponse> {
        return this.websocketMarketStreamsApi.allBookTickersStream(requestParameters);
    }

    /**
     * The All Liquidation Order Snapshot Streams push force liquidation order information for all symbols in the market.
     * For each symbol，only the latest one liquidation order within 1000ms will be pushed as the snapshot. If no liquidation happens in the interval of 1000ms, no stream will be pushed.
     *
     * Update Speed: 1000ms
     *
     * @summary All Market Liquidation Order Streams
     * @param {AllMarketLiquidationOrderStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<AllMarketLiquidationOrderStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Market-Liquidation-Order-Streams Binance API Documentation}
     */
    allMarketLiquidationOrderStreams(
        requestParameters: AllMarketLiquidationOrderStreamsRequest = {}
    ): WebsocketStream<AllMarketLiquidationOrderStreamsResponse> {
        return this.websocketMarketStreamsApi.allMarketLiquidationOrderStreams(requestParameters);
    }

    /**
     * 24hr rolling window mini-ticker statistics for all symbols. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before. Note that only tickers that have changed will be present in the array.
     *
     * Update Speed: 1000ms
     *
     * @summary All Market Mini Tickers Stream
     * @param {AllMarketMiniTickersStreamRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<AllMarketMiniTickersStreamResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Market-Mini-Tickers-Stream Binance API Documentation}
     */
    allMarketMiniTickersStream(
        requestParameters: AllMarketMiniTickersStreamRequest = {}
    ): WebsocketStream<AllMarketMiniTickersStreamResponse> {
        return this.websocketMarketStreamsApi.allMarketMiniTickersStream(requestParameters);
    }

    /**
     * 24hr rolling window ticker statistics for all symbols. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before. Note that only tickers that have changed will be present in the array.
     *
     * Update Speed: 1000ms
     *
     * @summary All Market Tickers Streams
     * @param {AllMarketTickersStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<AllMarketTickersStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Market-Tickers-Streams Binance API Documentation}
     */
    allMarketTickersStreams(
        requestParameters: AllMarketTickersStreamsRequest = {}
    ): WebsocketStream<AllMarketTickersStreamsResponse> {
        return this.websocketMarketStreamsApi.allMarketTickersStreams(requestParameters);
    }

    /**
     * Kline update every second
     *
     * Update Speed: 250ms
     *
     * @summary Continuous Contract Kline/Candlestick Streams
     * @param {ContinuousContractKlineCandlestickStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<ContinuousContractKlineCandlestickStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Continuous-Contract-Kline-Candlestick-Streams Binance API Documentation}
     */
    continuousContractKlineCandlestickStreams(
        requestParameters: ContinuousContractKlineCandlestickStreamsRequest
    ): WebsocketStream<ContinuousContractKlineCandlestickStreamsResponse> {
        return this.websocketMarketStreamsApi.continuousContractKlineCandlestickStreams(
            requestParameters
        );
    }

    /**
     * ContractInfo stream pushes when contract info updates(listing/settlement/contract bracket update). `bks` field only shows up when bracket gets updated.
     *
     * Update Speed: Real-time
     *
     * @summary Contract Info Stream
     * @param {ContractInfoStreamRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<ContractInfoStreamResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Contract-Info-Stream Binance API Documentation}
     */
    contractInfoStream(
        requestParameters: ContractInfoStreamRequest = {}
    ): WebsocketStream<ContractInfoStreamResponse> {
        return this.websocketMarketStreamsApi.contractInfoStream(requestParameters);
    }

    /**
     * Bids and asks, pushed every 250 milliseconds, 500 milliseconds, or 100 milliseconds
     *
     * Update Speed: 250ms or 500ms or 100ms
     *
     * @summary Diff. Book Depth Streams
     * @param {DiffBookDepthStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<DiffBookDepthStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams Binance API Documentation}
     */
    diffBookDepthStreams(
        requestParameters: DiffBookDepthStreamsRequest
    ): WebsocketStream<DiffBookDepthStreamsResponse> {
        return this.websocketMarketStreamsApi.diffBookDepthStreams(requestParameters);
    }

    /**
     * Index Kline/Candlestick Streams
     *
     * Update Speed: 250ms
     *
     * @summary Index Kline/Candlestick Streams
     * @param {IndexKlineCandlestickStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<IndexKlineCandlestickStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Index-Kline-Candlestick-Streams Binance API Documentation}
     */
    indexKlineCandlestickStreams(
        requestParameters: IndexKlineCandlestickStreamsRequest
    ): WebsocketStream<IndexKlineCandlestickStreamsResponse> {
        return this.websocketMarketStreamsApi.indexKlineCandlestickStreams(requestParameters);
    }

    /**
     * Index Price Stream
     *
     * Update Speed: 3000ms OR 1000ms
     *
     * @summary Index Price Stream
     * @param {IndexPriceStreamRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<IndexPriceStreamResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Index-Price-Stream Binance API Documentation}
     */
    indexPriceStream(
        requestParameters: IndexPriceStreamRequest
    ): WebsocketStream<IndexPriceStreamResponse> {
        return this.websocketMarketStreamsApi.indexPriceStream(requestParameters);
    }

    /**
     * Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.
     *
     * Update Speed: Real-time
     *
     * @summary Individual Symbol Book Ticker Streams
     * @param {IndividualSymbolBookTickerStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<IndividualSymbolBookTickerStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Book-Ticker-Streams Binance API Documentation}
     */
    individualSymbolBookTickerStreams(
        requestParameters: IndividualSymbolBookTickerStreamsRequest
    ): WebsocketStream<IndividualSymbolBookTickerStreamsResponse> {
        return this.websocketMarketStreamsApi.individualSymbolBookTickerStreams(requestParameters);
    }

    /**
     * 24hr rolling window mini-ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.
     *
     * Update Speed: 500ms
     *
     * @summary Individual Symbol Mini Ticker Stream
     * @param {IndividualSymbolMiniTickerStreamRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<IndividualSymbolMiniTickerStreamResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Mini-Ticker-Stream Binance API Documentation}
     */
    individualSymbolMiniTickerStream(
        requestParameters: IndividualSymbolMiniTickerStreamRequest
    ): WebsocketStream<IndividualSymbolMiniTickerStreamResponse> {
        return this.websocketMarketStreamsApi.individualSymbolMiniTickerStream(requestParameters);
    }

    /**
     * 24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.
     *
     * Update Speed: 500ms
     *
     * @summary Individual Symbol Ticker Streams
     * @param {IndividualSymbolTickerStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<IndividualSymbolTickerStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Ticker-Streams Binance API Documentation}
     */
    individualSymbolTickerStreams(
        requestParameters: IndividualSymbolTickerStreamsRequest
    ): WebsocketStream<IndividualSymbolTickerStreamsResponse> {
        return this.websocketMarketStreamsApi.individualSymbolTickerStreams(requestParameters);
    }

    /**
     * The Kline/Candlestick Stream push updates to the current klines/candlestick every 250 milliseconds (if existing).
     *
     * Update Speed: 250ms
     *
     * @summary Kline/Candlestick Streams
     * @param {KlineCandlestickStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<KlineCandlestickStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Kline-Candlestick-Streams Binance API Documentation}
     */
    klineCandlestickStreams(
        requestParameters: KlineCandlestickStreamsRequest
    ): WebsocketStream<KlineCandlestickStreamsResponse> {
        return this.websocketMarketStreamsApi.klineCandlestickStreams(requestParameters);
    }

    /**
     * The Liquidation Order Snapshot Streams push force liquidation order information for specific symbol.
     *
     * For each symbol，only the latest one liquidation order within 1000ms will be pushed as the snapshot. If no liquidation happens in the interval of 1000ms, no stream will be pushed.
     *
     * Update Speed: 1000ms
     *
     * @summary Liquidation Order Streams
     * @param {LiquidationOrderStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<LiquidationOrderStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Liquidation-Order-Streams Binance API Documentation}
     */
    liquidationOrderStreams(
        requestParameters: LiquidationOrderStreamsRequest
    ): WebsocketStream<LiquidationOrderStreamsResponse> {
        return this.websocketMarketStreamsApi.liquidationOrderStreams(requestParameters);
    }

    /**
     * Mark Price Kline/Candlestick Streams
     *
     * Update Speed: 250ms
     *
     * @summary Mark Price Kline/Candlestick Streams
     * @param {MarkPriceKlineCandlestickStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<MarkPriceKlineCandlestickStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-Kline-Candlestick-Streams Binance API Documentation}
     */
    markPriceKlineCandlestickStreams(
        requestParameters: MarkPriceKlineCandlestickStreamsRequest
    ): WebsocketStream<MarkPriceKlineCandlestickStreamsResponse> {
        return this.websocketMarketStreamsApi.markPriceKlineCandlestickStreams(requestParameters);
    }

    /**
     * Mark Price of All Symbols of a Pair
     *
     * Update Speed: 3000ms OR 1000ms
     *
     * @summary Mark Price of All Symbols of a Pair
     * @param {MarkPriceOfAllSymbolsOfAPairRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<MarkPriceOfAllSymbolsOfAPairResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-of-All-Symbols-of-a-Pair Binance API Documentation}
     */
    markPriceOfAllSymbolsOfAPair(
        requestParameters: MarkPriceOfAllSymbolsOfAPairRequest
    ): WebsocketStream<MarkPriceOfAllSymbolsOfAPairResponse> {
        return this.websocketMarketStreamsApi.markPriceOfAllSymbolsOfAPair(requestParameters);
    }

    /**
     * Mark price update stream
     *
     * Update Speed: 3000ms OR 1000ms
     *
     * @summary Mark Price Stream
     * @param {MarkPriceStreamRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<MarkPriceStreamResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-Stream Binance API Documentation}
     */
    markPriceStream(
        requestParameters: MarkPriceStreamRequest
    ): WebsocketStream<MarkPriceStreamResponse> {
        return this.websocketMarketStreamsApi.markPriceStream(requestParameters);
    }

    /**
     * Top **<levels\>** bids and asks, Valid **<levels\>** are 5, 10, or 20.
     *
     * Update Speed: 250ms, 500ms or 100ms
     *
     * @summary Partial Book Depth Streams
     * @param {PartialBookDepthStreamsRequest} requestParameters Request parameters.
     * @returns {WebsocketStream<PartialBookDepthStreamsResponse>}
     * @throws {RequiredError}
     * @see {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Partial-Book-Depth-Streams Binance API Documentation}
     */
    partialBookDepthStreams(
        requestParameters: PartialBookDepthStreamsRequest
    ): WebsocketStream<PartialBookDepthStreamsResponse> {
        return this.websocketMarketStreamsApi.partialBookDepthStreams(requestParameters);
    }
}
