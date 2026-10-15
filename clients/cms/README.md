# Binance JavaScript CMS Connector

[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm version](https://badge.fury.io/js/@binance%2Fcms.svg)](https://badge.fury.io/js/@binance%2Fcms)
[![npm Downloads](https://img.shields.io/npm/dm/@binance/cms.svg)](https://www.npmjs.com/package/@binance/cms)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@binance/cms)](https://socket.dev/npm/package/@binance/cms)
[![Docs](https://img.shields.io/badge/docs-online-blue?style=flat-square)](https://binance.github.io/binance-connector-js/modules/_binance_cms.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a client library for the Binance CMS (Content Management System) API, enabling developers to receive Binance announcements programmatically in real time through the WebSocket Streams:

- [WebSocket Streams](./src/websocket-streams/websocket-streams.ts)

## Table of Contents

- [Supported Features](#supported-features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Websocket Streams](#websocket-streams)
- [Testing](#testing)
- [Contributing](#contributing)
- [Licence](#licence)

## Supported Features

- WebSocket Endpoints: Real-time data streaming.
- Inclusion of test cases and examples for quick onboarding.

## Installation

To use this library, ensure your environment is running Node.js version **22.12.0** or later. If you're using `nvm` (Node Version Manager), you can set the correct version as follows:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

Then install the library using `npm`:

```bash
npm install @binance/cms
```

## Documentation

For detailed information, refer to the [Binance API Documentation](https://developers.binance.com/en/docs/products/announcements/announcement).

### Websocket Streams

WebSocket Streams provide real-time push notifications for Binance announcements. Use the [websocket-streams](./src/websocket-streams/websocket-streams.ts) module to subscribe to these streams.

These streams are signed, so an API key and secret (or a private key) are required.

```typescript
import { Cms, CMS_WS_STREAMS_PROD_URL } from '@binance/cms';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: CMS_WS_STREAMS_PROD_URL,
};
const client = new Cms({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.comAnnouncementEn();
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```

More examples are available in the [`examples/websocket-streams`](./examples/websocket-streams/) folder.

#### Configuration Options

The WebSocket Streams API supports the following advanced configuration options:

- `apiKey`: Your Binance API key (required). It is sent in the `X-MBX-APIKEY` header on connection.
- `apiSecret`: Your Binance API secret, used to sign the connection URL with HMAC-SHA256.
- `privateKey`: RSA or ED25519 private key, used instead of `apiSecret` to sign the connection URL.
- `privateKeyPassphrase`: Passphrase for the private key, if encrypted.
- `reconnectDelay`: Specify the delay between reconnection attempts (default: 5000 ms).
- `compression`: Enable or disable compression for WebSocket messages (default: true).
- `agent`: Customize the WebSocket agent for advanced configurations.
- `mode`: Choose between `single` and `pool` connection modes.
  - `single`: A single WebSocket connection.
  - `pool`: A pool of WebSocket connections.
- `poolSize`: Define the number of WebSocket connections in pool mode.

##### Key Pair Based Authentication

Sign the connection URL with an `RSA` or `ED25519` private key instead of an API secret. See the [Key Pair Based Authentication example](./docs/websocket-streams/key-pair-authentication.md) for detailed usage.

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

#### Unsubscribing from Streams

You can unsubscribe from specific WebSocket streams using the `unsubscribe` method. This is useful for managing active subscriptions without closing the connection.

```typescript
import { Cms, CMS_WS_STREAMS_PROD_URL } from '@binance/cms';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: CMS_WS_STREAMS_PROD_URL,
};
const client = new Cms({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.comAnnouncementEn();
        stream.on('message', (data) => console.info(data));

        setTimeout(() => {
            stream.unsubscribe();
            console.log('Unsubscribed from comAnnouncementEn stream');
        }, 10000);
    })
    .catch((err) => console.error(err));
```

If `wsURL` is not provided, it defaults to `wss://api.binance.com/sapi/wss`.

### Automatic Connection Renewal

The WebSocket connection is automatically renewed for the WebSocket Streams connections, before the 24 hours expiration of the API key. This ensures continuous connectivity. Active streams are re-subscribed automatically after every reconnection or renewal.

## Testing

To run the tests:

```bash
npm install

npm run test
```

The tests cover:

- WebSocket Streams
- Error handling and edge cases

## Contributing

Contributions are welcome!

Since this repository contains auto-generated code, we encourage you to start by opening a GitHub issue to discuss your ideas or suggest improvements. This helps ensure that changes align with the project's goals and auto-generation processes.

To contribute:

1. Open a GitHub issue describing your suggestion or the bug you've identified.
2. If it's determined that changes are necessary, the maintainers will merge the changes into the main branch.

Please ensure that all tests pass if you're making a direct contribution. Submit a pull request only after discussing and confirming the change.

Thank you for your contributions!

## Disclaimer

This SDK is provided by Binance on an "as is" and "as available" basis for use at your own risk. Binance makes no representations or warranties of any kind, whether express or implied, as to the operation of the SDK, its accuracy, reliability, completeness, or fitness for any particular purpose.

To the fullest extent permitted by law, Binance shall not be liable for any losses, damages, or expenses of any kind arising from or in connection with your use of, or inability to use, this SDK, including but not limited to any financial losses resulting from errors, bugs, interruptions, or inaccuracies in the SDK.

Your use of this SDK to access the Binance Platform is subject to the Binance API Key Terms and the Binance Terms of Use, which shall prevail in the event of any conflict with this disclaimer. You are solely responsible for any orders or transactions executed through the Binance Platform using this SDK.

This SDK is not intended to constitute investment advice or a recommendation to buy, sell, or hold any digital asset. You should independently evaluate and verify all information before acting.

- [Binance Terms of Use](https://www.binance.com/en/terms)
- [Binance API Key Terms](https://www.binance.com/en/about-legal/terms-binance-api)

## Licence

This project is licensed under the MIT License. See the [LICENCE](./LICENCE) file for details.
