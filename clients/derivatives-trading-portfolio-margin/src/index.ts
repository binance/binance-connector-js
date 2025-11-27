export {
    DerivativesTradingPortfolioMargin,
    type ConfigurationDerivativesTradingPortfolioMargin,
} from './derivatives-trading-portfolio-margin';
export * as DerivativesTradingPortfolioMarginRestAPI from './rest-api';

export * as DerivativesTradingPortfolioMarginWebsocketStreams from './websocket-streams';

export {
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_TESTNET_URL,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_WS_STREAMS_PROD_URL,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_WS_STREAMS_TESTNET_URL,
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
