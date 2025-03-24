# Compression Configuration

```typescript
import { Pay, PayRestAPI } from '@binance/pay';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new Pay({ configurationRestAPI });

client.restAPI
    .getPayTradeHistory()
    .then((res) => res.data())
    .then((data: PayRestAPI.GetPayTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
