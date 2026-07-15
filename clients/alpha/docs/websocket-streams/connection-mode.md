# Connection Mode Configuration

```typescript
import { Alpha, ALPHA_WS_STREAMS_PROD_URL } from '@binance/alpha';

const configurationWebsocketStreams = {
    wsURL: ALPHA_WS_STREAMS_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new Alpha({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
