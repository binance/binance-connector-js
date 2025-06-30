export {
    DerivativesTradingPortfolioMarginPro,
    ConfigurationDerivativesTradingPortfolioMarginPro,
} from './derivatives-trading-portfolio-margin-pro';
export * as DerivativesTradingPortfolioMarginProRestAPI from './rest-api';

export * as DerivativesTradingPortfolioMarginProWebsocketStreams from './websocket-streams';

export {
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_WS_STREAMS_PROD_URL,
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
