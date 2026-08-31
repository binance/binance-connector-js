# Time Unit Configuration

```typescript
import { Stocks, StocksWebsocketStreams, TimeUnit, STOCKS_WS_STREAMS_PROD_URL } from '@binance/stocks';

const configurationWebsocketStreams = {
    wsURL: STOCKS_WS_STREAMS_PROD_URL,
    timeUnit: TimeUnit.MICROSECOND, // Set time unit to microseconds
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
