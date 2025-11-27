export { Staking, type ConfigurationStaking } from './staking';
export * as StakingRestAPI from './rest-api';

export {
    STAKING_REST_API_PROD_URL,
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
