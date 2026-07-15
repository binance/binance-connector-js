# Compression Configuration

```typescript
import { Alpha, ALPHA_WS_STREAMS_PROD_URL } from '@binance/alpha';

const configurationWebsocketStreams = {
    wsURL: ALPHA_WS_STREAMS_PROD_URL,
    compression: false, // Disable compression
};
const client = new Alpha({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
