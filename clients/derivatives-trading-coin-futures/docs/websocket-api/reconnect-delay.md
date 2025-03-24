# Reconnect Delay Configuration

```typescript
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    reconnectDelay: 3000, // Set reconnect delay to 3 seconds
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
