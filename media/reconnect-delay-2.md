# Reconnect Delay Configuration

```typescript
import { DerivativesTradingOptions, DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-options';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new DerivativesTradingOptions({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.newSymbolInfo();
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
