# Compression Configuration

```typescript
import { Stocks, StocksWebsocketStreams, STOCKS_WS_STREAMS_PROD_URL } from '@binance/stocks';

const configurationWebsocketStreams = {
    wsURL: STOCKS_WS_STREAMS_PROD_URL,
    compression: false, // Disable compression
};
const client = new Stocks({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
