# Timeout

```typescript
import { C2C, C2CRestAPI } from '@binance/c2c';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new C2C({ configurationRestAPI });

client.restAPI.getC2CTradeHistory().catch((error) => console.error(error));
```
