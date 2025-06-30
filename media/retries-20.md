# Retries Configuration

```typescript
import { Spot, SpotRestAPI } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Spot({ configurationRestAPI });

client.restAPI
    .getAccount()
    .then((res) => res.data())
    .then((data: SpotRestAPI.GetAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
