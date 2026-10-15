export { W3WPrediction, type ConfigurationW3WPrediction } from './w3w-prediction';
export * as W3WPredictionRestAPI from './rest-api';

export * as W3WPredictionWebsocketStreams from './websocket-streams';

export {
    W3W_PREDICTION_REST_API_PROD_URL,
    W3W_PREDICTION_WS_STREAMS_PROD_URL,
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
