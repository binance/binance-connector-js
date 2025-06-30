# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
