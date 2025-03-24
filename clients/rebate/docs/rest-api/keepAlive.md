# Keep-Alive Configuration

```typescript
import { Rebate, RebateRestAPI } from '@binance/rebate';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new Rebate({ configurationRestAPI });

client.restAPI
    .getSpotRebateHistoryRecords()
    .then((res) => res.data())
    .then((data: RebateRestAPI.GetSpotRebateHistoryRecordsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
