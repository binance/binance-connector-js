export { MarginTrading, type ConfigurationMarginTrading } from './margin-trading';
export * as MarginTradingRestAPI from './rest-api';

export * as MarginTradingWebsocketStreams from './websocket-streams';

export {
    MARGIN_TRADING_REST_API_PROD_URL,
    MARGIN_TRADING_WS_STREAMS_PROD_URL,
    MARGIN_TRADING_RISK_WS_STREAMS_PROD_URL,
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
