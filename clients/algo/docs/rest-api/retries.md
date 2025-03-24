# Retries Configuration

```typescript
import { Algo, AlgoRestAPI } from '@binance/algo';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Algo({ configurationRestAPI });

client.restAPI
    .queryHistoricalAlgoOrders()
    .then((res) => res.data())
    .then((data: AlgoRestAPI.QueryHistoricalAlgoOrdersResponse) => console.log(data))
    .catch((err) => console.error(err));
```
