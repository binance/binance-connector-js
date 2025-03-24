# Compression Configuration

```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
    compression: false, // Disable compression
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
