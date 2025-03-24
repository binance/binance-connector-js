# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { DerivativesTradingCoinFutures, DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_PROD_URL } from '@binance/derivatives-trading-coin-futures';

const configurationWebsocketStreams = {
    wsURL: DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new DerivativesTradingCoinFutures({ configurationWebsocketStreams });

client.websocketStreams.connect().then(console.log).catch(console.error);
```
