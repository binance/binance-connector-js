# Binance TypeScript Types

[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm version](https://badge.fury.io/js/@binance%2Ftypes.svg)](https://badge.fury.io/js/@binance%2Ftypes)
[![npm Downloads](https://img.shields.io/npm/dm/@binance/types.svg)](https://www.npmjs.com/package/@binance/types)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![Known Vulnerabilities](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@binance/types` is a **TypeScript type definition package** for Binance modular connectors. It centralizes shared **interfaces, types, and error classes**, ensuring consistency across all Binance Connectors.

This package is designed to be used with the modular Binance connectors.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Types](#available-types)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Centralized Type Definitions** for Binance REST/WebSocket APIs
- **Error Classes** for standardized exception handling
- **Shared Configuration Interfaces** used across all Binance Connectors
- **Lightweight & Tree-Shakeable** – excludes runtime values when possible
- **Fully Compatible with TypeScript** for strong type safety

## Installation

To use this package, install it via `npm`:

```bash
npm install @binance/types
```

## Usage

This package provides **types and error classes** to be used within Binance Connectors.

### Example: Importing Common Types

```typescript
import type { ConfigurationRestAPI } from '@binance/types';

const config: ConfigurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
```

### Example: Handling Errors Consistently

```typescript
import { ConnectorClientError, UnauthorizedError } from '@binance/types';

try {
    // Some API call
} catch (err) {
    if (err instanceof ConnectorClientError) {
        console.error('Client error occurred:', err);
    } else if (err instanceof UnauthorizedError) {
        console.error('Invalid API credentials:', err);
    } else {
        console.error('Unexpected error:', err);
    }
}
```

## Available Types

### API Response Types

- `RestApiResponse<T>` – Standardized REST API response structure
- `WebsocketApiResponse<T>` – WebSocket response format

### Configuration Types

- `ConfigurationRestAPI` – Configuration structure for REST API clients
- `ConfigurationWebsocketAPI` – Configuration for WebSocket API clients
- `ConfigurationWebsocketStreams` – Config for managing WebSocket streams

### Rate Limit Types

- `RestApiRateLimit`
- `WebsocketApiRateLimit`

## Error Handling

The package includes **predefined error classes** to simplify error handling across Binance SDKs.

| Error Class            | Description                       |
| ---------------------- | --------------------------------- |
| `ConnectorClientError` | Generic client error              |
| `RequiredError`        | Missing required parameter        |
| `UnauthorizedError`    | Invalid or missing API key        |
| `ForbiddenError`       | Access denied                     |
| `TooManyRequestsError` | Rate limit exceeded               |
| `RateLimitBanError`    | Banned due to excessive API calls |
| `ServerError`          | Internal Binance server error     |
| `NetworkError`         | Network connectivity issue        |
| `NotFoundError`        | Requested resource not found      |
| `BadRequestError`      | Malformed request                 |

### Example: Catching API Errors

```typescript
import { RequiredError, NotFoundError } from '@binance/types';

try {
    // API call
} catch (err) {
    if (err instanceof RequiredError) {
        console.error('Missing required parameters:', err);
    } else if (err instanceof NotFoundError) {
        console.error('Requested resource does not exist:', err);
    }
}
```

## Contributing

Contributions are welcome!

1. Open a GitHub issue before making changes.
2. Discuss proposed changes with maintainers.
3. Follow the existing TypeScript structure.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.
