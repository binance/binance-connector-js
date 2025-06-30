# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Spot, SpotRestAPI } from '@binance/spot';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Spot({ configurationRestAPI });

client.restAPI
    .getAccount()
    .then((res) => res.data())
    .then((data: SpotRestAPI.GetAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
