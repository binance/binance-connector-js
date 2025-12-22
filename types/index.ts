// This file re-exports essential types and interfaces from the '@binance/common' package.
// It serves as a central entry point for type declarations related to API rate limiting, 
// responses (Rest and Websocket), configuration, and various API error conditions.
export type {
    RestApiRateLimit,
    WebsocketApiRateLimit,
    RestApiResponse,
    WebsocketApiResponse,
    ConfigurationRestAPI,
    ConfigurationWebsocketAPI,
    ConfigurationWebsocketStreams,
    ConnectorClientError,
    RequiredError,
    UnauthorizedError,
    ForbiddenError,
    TooManyRequestsError,
    RateLimitBanError,
    ServerError,
    NetworkError,
    NotFoundError,
    BadRequestError
} from '@binance/common';
