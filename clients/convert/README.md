# Binance JavaScript Convert Connector

[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm version](https://badge.fury.io/js/@binance%2Fconvert.svg)](https://badge.fury.io/js/@binance%2Fconvert)
[![npm Downloads](https://img.shields.io/npm/dm/@binance/convert.svg)](https://www.npmjs.com/package/@binance/convert)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![Known Vulnerabilities](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a client library for the Binance Convert API, enabling developers to interact programmatically with Binance's Convert trading platform. The library provides tools to buy or sell cryptocurrencies through the REST API:

- [REST API](./src/rest-api/rest-api.ts)

## Table of Contents

- [Supported Features](#supported-features)
- [Installation](#installation)
- [Documentation](#documentation)
- [REST APIs](#rest-apis)
- [Testing](#testing)
- [Migration Guide](#migration-guide)
- [Contributing](#contributing)
- [Licence](#licence)

## Supported Features

- REST API Endpoints:
  - `/sapi/v1/convert/*`
- Inclusion of test cases and examples for quick onboarding.

## Installation

To use this library, ensure your environment is running Node.js version **22.12.0** or later. If you're using `nvm` (Node Version Manager), you can set the correct version as follows:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

Then install the library using `npm`:

```bash
npm install @binance/convert
```

## Documentation

For detailed information, refer to the [Binance API Documentation](https://developers.binance.com/docs/convert).

### REST APIs

All REST API endpoints are available through the [`rest-api`](./src/rest-api/rest-api.ts) module. Note that some endpoints require authentication using your Binance API credentials.

```typescript
import { Convert, ConvertRestAPI } from '@binance/convert';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new Convert({ configurationRestAPI });

client.restAPI
    .listAllConvertPairs()
    .then((res) => res.data())
    .then((data: ConvertRestAPI.ListAllConvertPairsResponse) => console.log(data))
    .catch((err) => console.error(err));
```

More examples can be found in the [`examples/rest-api`](./examples/rest-api/) folder.

#### Configuration Options

The REST API supports the following advanced configuration options:

- `timeout`: Timeout for requests in milliseconds (default: 1000 ms).
- `proxy`: Proxy configuration:
  - `host`: Proxy server hostname.
  - `port`: Proxy server port.
  - `protocol`: Proxy protocol (http or https).
  - `auth`: Proxy authentication credentials:
    - `username`: Proxy username.
    - `password`: Proxy password.
- `keepAlive`: Enable HTTP keep-alive (default: true).
- `compression`: Enable response compression (default: true).
- `retries`: Number of retry attempts for failed requests (default: 3).
- `backoff`: Delay in milliseconds between retries (default: 1000 ms).
- `httpsAgent`: Custom HTTPS agent for advanced TLS configuration.
- `privateKey`: RSA or ED25519 private key for authentication.
- `privateKeyPassphrase`: Passphrase for the private key, if encrypted.

##### Timeout

You can configure a timeout for requests in milliseconds. If the request exceeds the specified timeout, it will be aborted. See the [Timeout example](./docs/rest-api/timeout.md) for detailed usage.

##### Proxy

The REST API supports HTTP/HTTPS proxy configurations. See the [Proxy example](./docs/rest-api/proxy.md) for detailed usage.

##### Keep-Alive

Enable HTTP keep-alive for persistent connections. See the [Keep-Alive example](./docs/rest-api/keepAlive.md) for detailed usage.

##### Compression

Enable or disable response compression. See the [Compression example](./docs/rest-api/compression.md) for detailed usage.

##### Retries

Configure the number of retry attempts and delay in milliseconds between retries for failed requests. See the [Retries example](./docs/rest-api/retries.md) for detailed usage.

##### HTTPS Agent

Customize the HTTPS agent for advanced TLS configurations. See the [HTTPS Agent example](./docs/rest-api/httpsAgent.md) for detailed usage.

##### Key Pair Based Authentication

The REST API supports key pair-based authentication for secure communication. You can use `RSA` or `ED25519` keys for signing requests. See the [Key Pair Based Authentication example](./docs/rest-api/key-pair-authentication.md) for detailed usage.

##### Certificate Pinning

To enhance security, you can use certificate pinning with the `httpsAgent` option in the configuration. This ensures the client only communicates with servers using specific certificates. See the [Certificate Pinning example](./docs/rest-api/certificate-pinning.md) for detailed usage.

#### Error Handling

The REST API provides detailed error types to help you handle issues effectively:

- `ConnectorClientError`: General client error.
- `RequiredError`: Thrown when a required parameter is missing.
- `UnauthorizedError`: Indicates missing or invalid authentication credentials.
- `ForbiddenError`: Access to the requested resource is forbidden.
- `TooManyRequestsError`: Rate limit exceeded.
- `RateLimitBanError`: IP address banned for exceeding rate limits.
- `ServerError`: Internal server error.
- `NetworkError`: Issues with network connectivity.
- `NotFoundError`: Resource not found.
- `BadRequestError`: Invalid request.

See the [Error Handling example](./docs/rest-api/error-handling.md) for detailed usage.

If `basePath` is not provided, it defaults to `https://api.binance.com`.

## Testing

To run the tests:

```bash
npm install

npm run test
```

The tests cover:

- REST API endpoints
- Error handling and edge cases

## Migration Guide

If you are upgrading to the new modularized structure, refer to the [Migration Guide](./docs/migration_guide_convert_connector.md) for detailed steps.

## Contributing

Contributions are welcome!

Since this repository contains auto-generated code, we encourage you to start by opening a GitHub issue to discuss your ideas or suggest improvements. This helps ensure that changes align with the project's goals and auto-generation processes.

To contribute:

1. Open a GitHub issue describing your suggestion or the bug you've identified.
2. If it's determined that changes are necessary, the maintainers will merge the changes into the main branch.

Please ensure that all tests pass if you're making a direct contribution. Submit a pull request only after discussing and confirming the change.

Thank you for your contributions!

## Licence

This project is licensed under the MIT License. See the [LICENCE](./LICENCE) file for details.
