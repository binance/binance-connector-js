# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Cms, CMS_WS_STREAMS_PROD_URL } from '@binance/cms';

const configurationWebsocketStreams = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: CMS_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new Cms({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
