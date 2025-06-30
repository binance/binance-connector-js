# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    agent: new HttpsProxyAgent('your-proxy-url'),
};
const client = new DerivativesTradingCoinFutures({ configurationWebsocketAPI });

client.websocketAPI
    .connect()
    .then((connection) =>
        connection.positionInformation()
    )
    .then((res) =>
        console.log(res.data)
    )
    .catch((err) => console.error(err));
```
