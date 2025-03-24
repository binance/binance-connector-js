# Retries Configuration

```typescript
import { Pay, PayRestAPI } from '@binance/pay';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Pay({ configurationRestAPI });

client.restAPI
    .getPayTradeHistory()
    .then((res) => res.data())
    .then((data: PayRestAPI.GetPayTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
