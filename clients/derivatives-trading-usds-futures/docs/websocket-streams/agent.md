# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { DerivativesTradingUsdsFutures, DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-usds-futures';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
