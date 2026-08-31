# Keep-Alive Configuration

```typescript
import { Stocks, StocksRestAPI } from '@binance/stocks';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new Stocks({ configurationRestAPI });

client.restAPI
    .exchangeInfo()
    .then((res) => res.data())
    .then((data: StocksRestAPI.ExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
