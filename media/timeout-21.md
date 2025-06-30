# Timeout

```typescript
import { SimpleEarn, SimpleEarnRestAPI } from '@binance/simple-earn';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new SimpleEarn({ configurationRestAPI });

client.restAPI.getSimpleEarnFlexibleProductList().catch((error) => console.error(error));
```
