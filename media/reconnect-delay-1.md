# Reconnect Delay Configuration

```typescript
import { DerivativesTradingCoinFutures, DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-coin-futures';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new DerivativesTradingCoinFutures({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.allBookTickersStream();
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
