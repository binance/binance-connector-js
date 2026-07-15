# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Alpha, ALPHA_WS_STREAMS_PROD_URL } from '@binance/alpha';

const configurationWebsocketStreams = {
    wsURL: ALPHA_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new Alpha({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
