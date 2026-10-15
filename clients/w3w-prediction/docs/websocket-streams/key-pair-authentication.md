# Key Pair Based Authentication

The WebSocket Streams connection URL is signed with your credentials. Instead of an `apiSecret` (HMAC-SHA256), you can sign it with an `RSA` or `ED25519` private key.

```typescript
import { W3WPrediction, W3W_PREDICTION_WS_STREAMS_PROD_URL } from '@binance/w3w-prediction';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    privateKey: 'your-private-key-content-or-file-path', // Provide the private key directly as a string or specify the path to a private key file (e.g., '/path/to/private_key.pem')
    privateKeyPassphrase: 'your-passphrase', // Optional: Required if the private key is encrypted
    wsURL: W3W_PREDICTION_WS_STREAMS_PROD_URL,
};
const client = new W3WPrediction({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.predictionOrderBookByMarketId({ marketId: '8859231' });
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
