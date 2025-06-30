# Connection Mode Configuration

```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
