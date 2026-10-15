# Reconnect Delay Configuration

```typescript
import { W3WPrediction, W3W_PREDICTION_WS_STREAMS_PROD_URL } from '@binance/w3w-prediction';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: W3W_PREDICTION_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
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
