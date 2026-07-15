# Reconnect Delay Configuration

```typescript
import { Alpha, ALPHA_WS_STREAMS_PROD_URL } from '@binance/alpha';

const configurationWebsocketStreams = {
    wsURL: ALPHA_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new Alpha({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.allBookTickerStream();
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
