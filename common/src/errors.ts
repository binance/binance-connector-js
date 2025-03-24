/**
 * Represents an error that occurred in the Connector client.
 * @param msg - An optional error message.
 */
export class ConnectorClientError extends Error {
    constructor(msg?: string) {
        super(msg || 'An unexpected error occurred.');
        Object.setPrototypeOf(this, ConnectorClientError.prototype);
        this.name = 'ConnectorClientError';
    }
}

/**
 * Represents an error that occurs when a required parameter is missing or undefined.
 * @param field - The name of the missing parameter.
 * @param msg - An optional error message.
 */
export class RequiredError extends Error {
    constructor(
        public field: string,
        msg?: string
    ) {
        super(msg || `Required parameter ${field} was null or undefined.`);
        Object.setPrototypeOf(this, RequiredError.prototype);
        this.name = 'RequiredError';
    }
}

/**
 * Represents an error that occurs when a client is unauthorized to access a resource.
 * @param msg - An optional error message.
 */
export class UnauthorizedError extends Error {
    constructor(msg?: string) {
        super(msg || 'Unauthorized access. Authentication required.');
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
        this.name = 'UnauthorizedError';
    }
}

/**
 * Represents an error that occurs when a resource is forbidden to the client.
 * @param msg - An optional error message.
 */
export class ForbiddenError extends Error {
    constructor(msg?: string) {
        super(msg || 'Access to the requested resource is forbidden.');
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.name = 'ForbiddenError';
    }
}

/**
 * Represents an error that occurs when client is doing too many requests.
 * @param msg - An optional error message.
 */
export class TooManyRequestsError extends Error {
    constructor(msg?: string) {
        super(msg || 'Too many requests. You are being rate-limited.');
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
        this.name = 'TooManyRequestsError';
    }
}

/**
 * Represents an error that occurs when client's IP has been banned.
 * @param msg - An optional error message.
 */
export class RateLimitBanError extends Error {
    constructor(msg?: string) {
        super(msg || 'The IP address has been banned for exceeding rate limits.');
        Object.setPrototypeOf(this, RateLimitBanError.prototype);
        this.name = 'RateLimitBanError';
    }
}

/**
 * Represents an error that occurs when there is an internal server error.
 * @param msg - An optional error message.
 * @param statusCode - An optional HTTP status code associated with the error.
 */
export class ServerError extends Error {
    constructor(
        msg?: string,
        public statusCode?: number
    ) {
        super(msg || 'An internal server error occurred.');
        Object.setPrototypeOf(this, ServerError.prototype);
        this.name = 'ServerError';
    }
}

/**
 * Represents an error that occurs when a network error occurs.
 * @param msg - An optional error message.
 */
export class NetworkError extends Error {
    constructor(msg?: string) {
        super(msg || 'A network error occurred.');
        Object.setPrototypeOf(this, NetworkError.prototype);
        this.name = 'NetworkError';
    }
}

/**
 * Represents an error that occurs when the requested resource was not found.
 * @param msg - An optional error message.
 */
export class NotFoundError extends Error {
    constructor(msg?: string) {
        super(msg || 'The requested resource was not found.');
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.name = 'NotFoundError';
    }
}

/**
 * Represents an error that occurs when a request is invalid or cannot be otherwise served.
 * @param msg - An optional error message.
 */
export class BadRequestError extends Error {
    constructor(msg?: string) {
        super(msg || 'The request was invalid or cannot be otherwise served.');
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.name = 'BadRequestError';
    }
}
