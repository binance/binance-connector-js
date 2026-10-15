# Reconnect Delay Configuration

```typescript
import { Cms, CMS_WS_STREAMS_PROD_URL } from '@binance/cms';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: CMS_WS_STREAMS_PROD_URL,
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
};
const client = new Cms({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection) => {
        const stream = connection.comAnnouncementEn();
        stream.on('message', (data) => console.info(data));
    })
    .catch((err) => console.error(err));
```
