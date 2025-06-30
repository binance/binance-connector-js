# Compression Configuration

```typescript
import { Algo, AlgoRestAPI } from '@binance/algo';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new Algo({ configurationRestAPI });

client.restAPI
    .queryHistoricalAlgoOrders()
    .then((res) => res.data())
    .then((data: AlgoRestAPI.QueryHistoricalAlgoOrdersResponse) => console.log(data))
    .catch((err) => console.error(err));
```
