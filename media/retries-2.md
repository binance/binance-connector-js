# Retries Configuration

```typescript
import { C2C, C2CRestAPI } from '@binance/c2c';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new C2C({ configurationRestAPI });

client.restAPI
    .getC2CTradeHistory()
    .then((res) => res.data())
    .then((data: C2CRestAPI.GetC2CTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
