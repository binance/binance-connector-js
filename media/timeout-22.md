# Timeout

```typescript
import { Spot, SpotRestAPI } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Spot({ configurationRestAPI });

client.restAPI.getAccount().catch((error) => console.error(error));
```
