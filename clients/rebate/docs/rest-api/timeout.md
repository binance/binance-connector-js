# Timeout

```typescript
import { Rebate, RebateRestAPI } from '@binance/rebate';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Rebate({ configurationRestAPI });

client.restAPI.getSpotRebateHistoryRecords().catch((error) => console.error(error));
```
