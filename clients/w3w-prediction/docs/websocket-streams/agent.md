# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { W3WPrediction, W3W_PREDICTION_WS_STREAMS_PROD_URL } from '@binance/w3w-prediction';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: W3W_PREDICTION_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new W3WPrediction({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
