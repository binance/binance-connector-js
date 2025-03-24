export {
    DerivativesTradingCoinFutures,
    ConfigurationDerivativesTradingCoinFutures,
} from './derivatives-trading-coin-futures';
export * as DerivativesTradingCoinFuturesRestAPI from './rest-api';
export * as DerivativesTradingCoinFuturesWebsocketAPI from './websocket-api';
export * as DerivativesTradingCoinFuturesWebsocketStreams from './websocket-streams';

export {
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_TESTNET_URL,
    DERIVATIVES_TRADING_COIN_FUTURES_WS_API_PROD_URL,
    DERIVATIVES_TRADING_COIN_FUTURES_WS_API_TESTNET_URL,
    DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_PROD_URL,
    DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_TESTNET_URL,
    ConnectorClientError,
    RequiredError,
    UnauthorizedError,
    ForbiddenError,
    TooManyRequestsError,
    RateLimitBanError,
    ServerError,
    NetworkError,
    NotFoundError,
    BadRequestError,
} from '@binance/common';
