# Connection Mode Configuration

```typescript
import { DerivativesTradingUsdsFutures, DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-usds-futures';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
