# Reconnect Delay Configuration

```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
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
