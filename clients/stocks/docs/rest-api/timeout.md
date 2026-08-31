# Timeout

```typescript
import { Stocks, StocksRestAPI } from '@binance/stocks';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Stocks({ configurationRestAPI });

client.restAPI.exchangeInfo().catch((error) => console.error(error));
```
