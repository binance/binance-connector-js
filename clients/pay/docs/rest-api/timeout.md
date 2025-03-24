# Timeout

```typescript
import { Pay, PayRestAPI } from '@binance/pay';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Pay({ configurationRestAPI });

client.restAPI.getPayTradeHistory().catch((error) => console.error(error));
```
