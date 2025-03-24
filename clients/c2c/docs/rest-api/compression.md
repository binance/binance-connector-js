# Compression Configuration

```typescript
import { C2C, C2CRestAPI } from '@binance/c2c';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new C2C({ configurationRestAPI });

client.restAPI
    .getC2CTradeHistory()
    .then((res) => res.data())
    .then((data: C2CRestAPI.GetC2CTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
