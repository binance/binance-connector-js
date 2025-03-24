# HTTPS Agent Configuration

```typescript
import https from 'https';
import { SimpleEarn, SimpleEarnRestAPI } from '@binance/simple-earn';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new SimpleEarn({ configurationRestAPI });

client.restAPI
    .getSimpleEarnFlexibleProductList()
    .then((res) => res.data())
    .then((data: SimpleEarnRestAPI.GetSimpleEarnFlexibleProductListResponse) => console.log(data))
    .catch((err) => console.error(err));
```
