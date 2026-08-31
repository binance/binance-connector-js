# Reconnect Delay Configuration

```typescript
import { Stocks, StocksWebsocketStreams, STOCKS_WS_STREAMS_PROD_URL } from '@binance/stocks';

const configurationWebsocketStreams = {
    wsURL: STOCKS_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new Stocks({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection: StocksWebsocketStreams.WebsocketStreamsConnection) => {
        const stream = connection.aggTrade({ symbol: 'BNBUSDT' });
        stream.on('message', (data: StocksWebsocketStreams.AggTradeResponse) => console.info(data));
    })
    .catch((err) => console.error(err));
```
