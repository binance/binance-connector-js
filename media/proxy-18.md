# Proxy Configuration

```typescript
import { Rebate, RebateRestAPI } from '@binance/rebate';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    proxy: {
        host: '127.0.0.1',
        port: 8080,
        protocol: 'http', // or 'https'
        auth: {
            username: 'proxy-user',
            password: 'proxy-password',
        },
    },
};
const client = new Rebate({ configurationRestAPI });

client.restAPI
    .getSpotRebateHistoryRecords()
    .then((res) => res.data())
    .then((data: RebateRestAPI.GetSpotRebateHistoryRecordsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
