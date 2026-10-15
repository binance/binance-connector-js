# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Rebate, RebateRestAPI } from '@binance/rebate';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Rebate({ configurationRestAPI });

client.restAPI
    .getSpotRebateHistoryRecords()
    .then((res) => res.data())
    .then((data: RebateRestAPI.GetSpotRebateHistoryRecordsResponse) => console.log(data))
    .catch((err) => console.error(err));
```

For proxies that require an HTTPS CONNECT tunnel, see
[HTTPS CONNECT tunneling](./proxy.md#https-connect-tunneling).
