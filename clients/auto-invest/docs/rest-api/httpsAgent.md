# HTTPS Agent Configuration

```typescript
import https from 'https';
import { AutoInvest, AutoInvestRestAPI } from '@binance/auto-invest';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new AutoInvest({ configurationRestAPI });

client.restAPI
    .queryAllSourceAssetAndTargetAsset()
    .then((res) => res.data())
    .then((data: AutoInvestRestAPI.QueryAllSourceAssetAndTargetAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
