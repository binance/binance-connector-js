# Retries Configuration

```typescript
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

client.restAPI
    .exchangeInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
