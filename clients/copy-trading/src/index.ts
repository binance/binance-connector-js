export { CopyTrading, ConfigurationCopyTrading } from './copy-trading';
export * as CopyTradingRestAPI from './rest-api';

export {
    COPY_TRADING_REST_API_PROD_URL,
    COPY_TRADING_REST_API_TESTNET_URL,
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
