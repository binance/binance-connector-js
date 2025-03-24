# Connection Mode Configuration

```typescript
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
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
