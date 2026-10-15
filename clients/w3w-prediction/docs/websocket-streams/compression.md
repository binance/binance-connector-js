# Compression Configuration

```typescript
import { W3WPrediction, W3W_PREDICTION_WS_STREAMS_PROD_URL } from '@binance/w3w-prediction';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: W3W_PREDICTION_WS_STREAMS_PROD_URL,
    compression: false, // Disable compression
};
const client = new W3WPrediction({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
