# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { StockOptions, STOCK_OPTIONS_WS_STREAMS_PROD_URL } from '@binance/stock-options';

const configurationWebsocketStreams = {
    wsURL: STOCK_OPTIONS_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new StockOptions({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
