export { MarginTrading, ConfigurationMarginTrading } from './margin-trading';
export * as MarginTradingRestAPI from './rest-api';

export {
    MARGIN_TRADING_REST_API_PROD_URL,
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
