# Timeout

```typescript
import { Alpha, AlphaRestAPI } from '@binance/alpha';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Alpha({ configurationRestAPI });

client.restAPI.getExchangeInfo().catch((error) => console.error(error));
```
