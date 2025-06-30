# Binance JavaScript Margin Trading Connector

[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm version](https://badge.fury.io/js/@binance%2Fmargin-trading.svg)](https://badge.fury.io/js/@binance%2Fmargin-trading)
[![npm Downloads](https://img.shields.io/npm/dm/@binance/margin-trading.svg)](https://www.npmjs.com/package/@binance/margin-trading)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![Known Vulnerabilities](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a client library for the Binance Margin Trading API, enabling developers to interact programmatically with Binance's Margin Trading trading platform. The library provides tools to use funds provided by a third party to conduct asset transactions through the REST API:

- [REST API](./src/rest-api/rest-api.ts)
- [Websocket Stream](./src/websocket-streams/websocket-streams-connection.ts)

## Table of Contents

- [Supported Features](#supported-features)
- [Installation](#installation)
- [Documentation](#documentation)
- [REST APIs](#rest-apis)
- [Websocket Streams](#websocket-streams)
- [Testing](#testing)
- [Migration Guide](#migration-guide)
- [Contributing](#contributing)
- [Licence](#licence)

## Supported Features

- REST API Endpoints:
  - `/sapi/v1/margin/*`
  - `/sapi/v1/bnbBurn/*`
  - `/sapi/v1/userDataStream/*`
- Inclusion of test cases and examples for quick onboarding.

## Installation

To use this library, ensure your environment is running Node.js version **22.12.0** or later. If you're using `nvm` (Node Version Manager), you can set the correct version as follows:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

Then install the library using `npm`:

```bash
npm install @binance/margin-trading
```

## Documentation

For detailed information, refer to the [Binance API Documentation](https://developers.binance.com/docs/margin_trading).

### REST APIs

All REST API endpoints are available through the [`rest-api`](./src/rest-api/rest-api.ts) module. Note that some endpoints require authentication using your Binance API credentials.

```typescript
import { MarginTrading, MarginTradingRestAPI } from '@binance/margin-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new MarginTrading({ configurationRestAPI });

client.restAPI
    .getSummaryOfMarginAccount()
    .then((res) => res.data())
    .then((data: MarginTradingRestAPI.GetSummaryOfMarginAccountResponse) => console.log(data))
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

### Websocket Streams

WebSocket Streams in `margin-trading` is used for subscribing to risk and trade data streams. Use the [websocket-streams](./src/websocket-streams/websocket-streams.ts) module to interact with it.

#### Configuration Options

The WebSocket Streams API supports the following advanced configuration options:

- `reconnectDelay`: Specify the delay between reconnection attempts (default: 5000 ms).
- `compression`: Enable or disable compression for WebSocket messages (default: true).
- `agent`: Customize the WebSocket agent for advanced configurations.
- `mode`: Choose between `single` and `pool` connection modes.
  - `single`: A single WebSocket connection.
  - `pool`: A pool of WebSocket connections.
- `poolSize`: Define the number of WebSocket connections in pool mode.

#### Subscribe to Risk and Trade Data Streams

You can consume the risk and trade data stream, which sends account-level events such as account and order updates. First create a listen-key via REST API; then:

```typescript
import { MarginTrading, MARGIN_TRADING_WS_STREAMS_PROD_URL } from '@binance/margin-trading';

const configurationWebsocketStreams = {
  wsURL: MARGIN_TRADING_WS_STREAMS_PROD_URL,
};
const client = new MarginTrading({ configurationWebsocketStreams });

client.websocketStreams
  .connect()
  .then((connection) => {
      const tradeStream = connection.tradeData('listenKey');
      tradeStream.on('message', (data) => {
          switch (data.e) {
              case 'balanceUpdate':
                  console.log('balance update stream', data);
                  break;
              case 'outboundAccountPosition':
                  console.log('outbound account position stream', data);
                  break;
              // …handle other variants…
              default:
                  console.log('unknown stream', data);
                  break;
          }
      });
  })
  .catch((err) => console.error(err));
```

```typescript
import { MarginTrading, MARGIN_TRADING_RISK_WS_STREAMS_PROD_URL } from '@binance/margin-trading';

const configurationWebsocketStreams = {
  wsURL: MARGIN_TRADING_RISK_WS_STREAMS_PROD_URL,
};
const client = new MarginTrading({ configurationWebsocketStreams });

client.websocketStreams
  .connect()
  .then((connection) => {
      const riskStream = connection.riskData('listenKey');
      riskStream.on('message', (data) => {
          switch (data.e) {
              case 'MARGIN_LEVEL_STATUS_CHANGE':
                  console.log('risk level change stream', data);
                  break;
              case 'USER_LIABILITY_CHANGE':
                  console.log('risk level change stream', data);
                  break;
              default:
                  console.log('unknown stream', data);
                  break;
          }
      });
  })
  .catch((err) => console.error(err));
```

#### Unsubscribing from Streams

You can unsubscribe from the risk and trade data streams using the `unsubscribe` method. This is useful for managing active subscriptions without closing the connection.

```typescript
import { MarginTrading, MARGIN_TRADING_WS_STREAMS_PROD_URL } from '@binance/margin-trading';

const configurationWebsocketStreams = {
  wsURL: MARGIN_TRADING_WS_STREAMS_PROD_URL,
};
const client = new MarginTrading({ configurationWebsocketStreams });

client.websocketStreams
  .connect()
  .then((connection) => {
      const tradeStream = connection.tradeData('listenKey');
      tradeStream.on('message', (data) => {
          switch (data.e) {
              case 'balanceUpdate':
                  console.log('balance update stream', data);
                  break;
              case 'outboundAccountPosition':
                  console.log('outbound account position stream', data);
                  break;
              default:
                  console.log('unknown stream', data);
                  break;
          }
      });

      setTimeout(() => {
        stream.unsubscribe();
        console.log('Unsubscribed from trade data streams');
      }, 10000);
  })
  .catch((err) => console.error(err));
```

If `wsURL` is not provided, it defaults to `wss://stream.binance.com:9443`.

### Automatic Connection Renewal

The WebSocket connection is automatically renewed for both WebSocket API and WebSocket Streams connections, before the 24 hours expiration of the API key. This ensures continuous connectivity.

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

If you are upgrading to the new modularized structure, refer to the [Migration Guide](./docs/migration_guide_margin_trading_connector.md) for detailed steps.

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
