# Connection Mode Configuration

```typescript
import { StockOptions, STOCK_OPTIONS_WS_STREAMS_PROD_URL } from '@binance/stock-options';

const configurationWebsocketStreams = {
    wsURL: STOCK_OPTIONS_WS_STREAMS_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new StockOptions({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
