# Binance JavaScript SPOT Connector

[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm version](https://badge.fury.io/js/@binance%2Fspot.svg)](https://badge.fury.io/js/@binance%2Fspot)
[![npm Downloads](https://img.shields.io/npm/dm/@binance/spot.svg)](https://www.npmjs.com/package/@binance/spot)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![Known Vulnerabilities](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a client library for the Binance SPOT API, enabling developers to interact programmatically with Binance's SPOT trading platform. The library provides tools for retrieving market data, executing trades, and managing orders through three distinct endpoints:

- [REST API](./src/rest-api/rest-api.ts)
- [Websocket API](./src/websocket-api/websocket-api-connection.ts)
- [Websocket Stream](./src/websocket-streams/websocket-streams-connection.ts)

## Table of Contents

- [Supported Features](#supported-features)
- [Installation](#installation)
- [Documentation](#documentation)
- [REST APIs](#rest-apis)
- [Websocket APIs](#websocket-apis)
- [Websocket Streams](#websocket-streams)
- [Testing](#testing)
- [Migration Guide](#migration-guide)
- [Contributing](#contributing)
- [Licence](#licence)

## Supported Features

- REST API Endpoints:
  - `/api/*`
- WebSocket Endpoints: Real-time data streaming and request-response communication.
- Inclusion of test cases and examples for quick onboarding.

## Installation

To use this library, ensure your environment is running Node.js version **22.12.0** or later. If you're using `nvm` (Node Version Manager), you can set the correct version as follows:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

Then install the library using `npm`:

```bash
npm install @binance/spot
```

## Documentation

For detailed information, refer to the [Binance API Documentation](https://developers.binance.com/docs/binance-spot-api-docs/README).

### REST APIs

All REST API endpoints are available through the [`rest-api`](./src/rest-api/rest-api.ts) module. The REST API enables you to fetch market data, manage trades, and access account information. Note that some endpoints require authentication using your Binance API credentials.

```typescript
import { Spot, SpotRestAPI } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new Spot({ configurationRestAPI });

client.restAPI
    .exchangeInfo({ symbol: 'BNBUSDT' })
    .then((res) => res.data())
    .then((data: SpotRestAPI.ExchangeInfoResponse) => console.log(data))
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
- `timeUnit`: Specify the time unit for timestamps (e.g., milliseconds or microseconds).

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

##### Time Unit

The REST API supports different time units for timestamp values. See the [Time Unit example](./docs/rest-api/time-unit.md) for more details.

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

#### Testnet

For testing purposes, `/api/*` endpoints can be used in the [Spot Testnet](https://testnet.binance.vision/). Update the `basePath` in your configuration:

```typescript
import { Spot, SpotRestAPI, SPOT_REST_API_TESTNET_URL } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    basePath: SPOT_REST_API_TESTNET_URL,
};
const client = new Spot({ configurationRestAPI });
```

If `basePath` is not provided, it defaults to `https://api.binance.com`.

### Websocket APIs

The WebSocket API provides request-response communication for market data and trading actions. Use the [`websocket-api`](./src/websocket-api/websocket-api.ts) module to interact with these endpoints.

```typescript
import { Spot, SpotWebsocketAPI } from '@binance/spot';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new Spot({ configurationWebsocketAPI });

client.websocketAPI
    .connect()
    .then((connection: SpotWebsocketAPI.WebsocketAPIConnection) =>
        connection.exchangeInfo({ symbol: 'BNBUSDT' })
    )
    .then((res: SpotWebsocketAPI.ApiResponse<SpotWebsocketAPI.ExchangeInfoResponse>) =>
        console.log(res.data)
    )
    .catch((err) => console.error(err));
```

More examples are available in the [`examples/websocket-api`](./examples/websocket-api/) folder.

#### Configuration Options

The WebSocket API supports the following advanced configuration options:

- `timeout`: Set the timeout for WebSocket requests (default: 5000 ms).
- `reconnectDelay`: Specify the delay between reconnection attempts (default: 5000 ms).
- `compression`: Enable or disable compression for WebSocket messages (default: true).
- `agent`: Customize the WebSocket agent for advanced configurations.
- `mode`: Choose between `single` and `pool` connection modes.
  - `single`: A single WebSocket connection.
  - `pool`: A pool of WebSocket connections.
- `poolSize`: Define the number of WebSocket connections in pool mode.
- `privateKey`: RSA or ED25519 private key for authentication.
- `privateKeyPassphrase`: Passphrase for the private key, if encrypted.
- `timeUnit`: Specify the time unit for timestamps (e.g., milliseconds or microseconds).

##### Timeout

Set the timeout for WebSocket API requests in milliseconds. See the [Timeout example](./docs/websocket-api/timeout.md) for detailed usage.

##### Reconnect Delay

Specify the delay in milliseconds between WebSocket reconnection attempts. See the [Reconnect Delay example](./docs/websocket-api/reconnect-delay.md) for detailed usage.

##### Compression

Enable or disable compression for WebSocket messages. See the [Compression example](./docs/websocket-api/compression.md) for detailed usage.

##### WebSocket Agent

Customize the agent for advanced configurations. See the [WebSocket Agent example](./docs/websocket-api/agent.md) for detailed usage.

##### Connection Mode

Choose between `single` and `pool` connection modes for WebSocket connections. The `single` mode uses a single WebSocket connection, while the `pool` mode uses a pool of WebSocket connections. See the [Connection Mode example](./docs/websocket-api/connection-mode.md) for detailed usage.

##### Key Pair Based Authentication

Use RSA or ED25519 private keys for WebSocket API authentication. See the [Key Pair Authentication example](./docs/websocket-api/key-pair-authentication.md) for detailed usage.

##### Certificate Pinning

To enhance security, you can use certificate pinning with the `agent` option in the configuration. This ensures the client only communicates with servers using specific certificates. See the [Certificate Pinning example](./docs/websocket-api/certificate-pinning.md) for detailed usage.

##### Time Unit

Specify the time unit for WebSocket API timestamps (e.g., milliseconds or microseconds). See the [Time Unit example](./docs/websocket-api/time-unit.md) for detailed usage.

#### Testnet

For testing purposes, the Websocket API also supports a testnet environment. Update the `wsURL` in your configuration:

```typescript
import { Spot, SpotWebsocketAPI, SPOT_WS_API_TESTNET_URL } from '@binance/spot';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: SPOT_WS_API_TESTNET_URL,
};
const client = new Spot({ configurationWebsocketAPI });
```

If `wsURL` is not provided, it defaults to `wss://ws-api.binance.com:443/ws-api/v3`.

### Websocket Streams

WebSocket Streams provide real-time data feeds for market trades, candlesticks, and more. Use the [websocket-streams](./src/websocket-streams/websocket-streams.ts) module to subscribe to these streams.

```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection: SpotWebsocketStreams.WebsocketStreamsConnection) => {
        const stream = connection.aggTrade({ symbol: 'BNBUSDT' });
        stream.on('message', (data: SpotWebsocketStreams.AggTradeResponse) => console.info(data));
    })
    .catch((err) => console.error(err));
```

More examples are available in the [`examples/websocket-streams`](./examples/websocket-streams/) folder.

#### Configuration Options

The WebSocket Streams API supports the following advanced configuration options:

- `reconnectDelay`: Specify the delay between reconnection attempts (default: 5000 ms).
- `compression`: Enable or disable compression for WebSocket messages (default: true).
- `agent`: Customize the WebSocket agent for advanced configurations.
- `mode`: Choose between `single` and `pool` connection modes.
  - `single`: A single WebSocket connection.
  - `pool`: A pool of WebSocket connections.
- `poolSize`: Define the number of WebSocket connections in pool mode.
- `timeUnit`: Specify the time unit for timestamps (e.g., milliseconds or microseconds).

##### Reconnect Delay

Specify the delay in milliseconds between WebSocket reconnection attempts for streams. See the [Reconnect Delay example](./docs/websocket-streams/reconnect-delay.md) for detailed usage.

##### Compression

Enable or disable compression for WebSocket Streams messages. See the [Compression example](./docs/websocket-streams/compression.md) for detailed usage.

##### WebSocket Agent

Customize the agent for advanced configurations. See the [WebSocket Agent example](./docs/websocket-streams/agent.md) for detailed usage.

##### Connection Mode

Choose between `single` and `pool` connection modes for WebSocket Streams. The `single` mode uses a single WebSocket connection, while the `pool` mode uses a pool of WebSocket connections. See the [Connection Mode example](./docs/websocket-streams/connection-mode.md) for detailed usage.

##### Certificate Pinning

To enhance security, you can use certificate pinning with the `agent` option in the configuration. This ensures the client only communicates with servers using specific certificates. See the [Certificate Pinning example](./docs/websocket-streams/certificate-pinning.md) for detailed usage.

##### Time Unit

Specify the time unit for WebSocket Streams timestamps (e.g., milliseconds or microseconds). See the [Time Unit example](./docs/websocket-streams/time-unit.md) for detailed usage.

#### Unsubscribing from Streams

You can unsubscribe from specific WebSocket streams using the `unsubscribe` method. This is useful for managing active subscriptions without closing the connection.

```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection: SpotWebsocketStreams.WebsocketStreamsConnection) => {
        const stream = connection.aggTrade({ symbol: 'BNBUSDT' });
        stream.on('message', (data: SpotWebsocketStreams.AggTradeResponse) => console.info(data));

        setTimeout(() => {
            stream.unsubscribe();
            console.log('Unsubscribed from BNBUSDT trade stream');
        }, 10000);
    })
    .catch((err) => console.error(err));
```

#### Testnet

Websocket Streams also support a testnet environment for development and testing. Update the `wsURL` in your configuration:

```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_TESTNET_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_TESTNET_URL,
};
const client = new Spot({ configurationWebsocketStreams });
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

The tests cover: - REST API endpoints - WebSocket API and Streams - Error handling and edge cases

## Migration Guide

If you are upgrading to the new modularized structure, refer to the [Migration Guide](./docs/migration_guide_spot_connector.md) for detailed steps.

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
