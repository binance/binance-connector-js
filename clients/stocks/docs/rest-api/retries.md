# Retries Configuration

```typescript
import { Stocks, StocksRestAPI } from '@binance/stocks';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Stocks({ configurationRestAPI });

client.restAPI
    .exchangeInfo()
    .then((res) => res.data())
    .then((data: StocksRestAPI.ExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
