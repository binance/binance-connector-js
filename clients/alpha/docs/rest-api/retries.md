# Retries Configuration

```typescript
import { Alpha, AlphaRestAPI } from '@binance/alpha';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Alpha({ configurationRestAPI });

client.restAPI
    .getExchangeInfo()
    .then((res) => res.data())
    .then((data: AlphaRestAPI.GetExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
