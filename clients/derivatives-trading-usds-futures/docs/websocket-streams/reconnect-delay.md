# Reconnect Delay Configuration

```typescript
import { DerivativesTradingUsdsFutures, DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-usds-futures';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.allBookTickersStream();
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
