# Time Unit Configuration

```typescript
import { Spot, SpotWebsocketStreams, TimeUnit, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
    timeUnit: TimeUnit.MICROSECOND, // Set time unit to microseconds
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection: SpotWebsocketStreams.WebsocketStreamsConnection) => {
        const stream = connection.aggTrade({ symbol: 'BNBUSDT' });
        stream.on('message', (data: SpotWebsocketStreams.AggTradeResponse) => console.info(data));
    })
    .catch((err) => console.error(err));
```
