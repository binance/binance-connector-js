# Retries Configuration

```typescript
import { SimpleEarn, SimpleEarnRestAPI } from '@binance/simple-earn';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new SimpleEarn({ configurationRestAPI });

client.restAPI
    .getSimpleEarnFlexibleProductList()
    .then((res) => res.data())
    .then((data: SimpleEarnRestAPI.GetSimpleEarnFlexibleProductListResponse) => console.log(data))
    .catch((err) => console.error(err));
```
