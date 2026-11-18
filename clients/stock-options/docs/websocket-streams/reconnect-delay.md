# Reconnect Delay Configuration

```typescript
import { StockOptions, STOCK_OPTIONS_WS_STREAMS_PROD_URL } from '@binance/stock-options';

const configurationWebsocketStreams = {
    wsURL: STOCK_OPTIONS_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new StockOptions({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.orderReportV2Stream({
            listenKey: 'your-listen-key',
        });
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
