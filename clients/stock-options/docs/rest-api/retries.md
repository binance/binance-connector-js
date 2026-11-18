# Retries Configuration

```typescript
import { StockOptions } from '@binance/stock-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new StockOptions({ configurationRestAPI });

client.restAPI
    .optionExpirations({ underlyingSymbol: 'NVDA' })
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
