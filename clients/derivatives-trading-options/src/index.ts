export {
    DerivativesTradingOptions,
    ConfigurationDerivativesTradingOptions,
} from './derivatives-trading-options';
export * as DerivativesTradingOptionsRestAPI from './rest-api';

export * as DerivativesTradingOptionsWebsocketStreams from './websocket-streams';

export {
    DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL,
    DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL,
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
