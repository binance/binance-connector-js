# Compression Configuration

```typescript
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketAPI });

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
