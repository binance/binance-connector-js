# Error Handling

```typescript
import {
    DerivativesTradingPortfolioMargin,
    ConnectorClientError,
    RequiredError,
    UnauthorizedError,
    ForbiddenError,
    TooManyRequestsError,
    RateLimitBanError,
    ServerError,
    NetworkError.
    NotFoundError,
    BadRequestError
} from '@binance/derivatives-trading-portfolio-margin';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

client.restAPI
    .accountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => {
        if (err instanceof ConnectorClientError) {
            console.error('Client error: Check your request parameters.', err);
        } else if (err instanceof RequiredError) {
            console.error('Missing required parameters.', err);
        } else if (err instanceof UnauthorizedError) {
            console.error('Unauthorized: Invalid API credentials.', err);
        } else if (err instanceof ForbiddenError) {
            console.error('Forbidden: Check your API key permissions.', err);
        } else if (err instanceof TooManyRequestsError) {
            console.error('Rate limit exceeded. Please wait and try again.', err);
        } else if (err instanceof RateLimitBanError) {
            console.error('IP address banned due to excessive rate limits.', err);
        } else if (err instanceof ServerError) {
            console.error('Server error: Try again later.', err);
        } else if (err instanceof NetworkError) {
            console.error('Network error: Check your internet connection.', err);
        } else if (err instanceof NotFoundError) {
            console.error('Resource not found.', err);
        } else if (err instanceof BadRequestError) {
            console.error('Bad request: Verify your input parameters.', err);
        } else {
            console.error('An unexpected error occurred:', err);
        }
    });
```
