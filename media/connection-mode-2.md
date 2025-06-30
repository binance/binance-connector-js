# Connection Mode Configuration

```typescript
import { DerivativesTradingOptions, DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-options';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new DerivativesTradingOptions({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
