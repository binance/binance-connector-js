# Compression Configuration

```typescript
import { Cms, CMS_WS_STREAMS_PROD_URL } from '@binance/cms';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: CMS_WS_STREAMS_PROD_URL,
    compression: false, // Disable compression
};
const client = new Cms({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
