# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Pay, PayRestAPI } from '@binance/pay';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Pay({ configurationRestAPI });

client.restAPI
    .getPayTradeHistory()
    .then((res) => res.data())
    .then((data: PayRestAPI.GetPayTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
