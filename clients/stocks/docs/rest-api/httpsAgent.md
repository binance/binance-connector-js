# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Stocks, StocksRestAPI } from '@binance/stocks';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Stocks({ configurationRestAPI });

client.restAPI
    .exchangeInfo()
    .then((res) => res.data())
    .then((data: StocksRestAPI.ExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
