# Timeout

```typescript
import { Algo, AlgoRestAPI } from '@binance/algo';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Algo({ configurationRestAPI });

client.restAPI.queryHistoricalAlgoOrders().catch((error) => console.error(error));
```
