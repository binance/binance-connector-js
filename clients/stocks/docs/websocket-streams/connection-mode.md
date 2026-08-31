# Connection Mode Configuration

```typescript
import { Stocks, StocksWebsocketStreams, STOCKS_WS_STREAMS_PROD_URL } from '@binance/stocks';

const configurationWebsocketStreams = {
    wsURL: STOCKS_WS_STREAMS_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new Stocks({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
