# Retries Configuration

```typescript
import { AutoInvest, AutoInvestRestAPI } from '@binance/auto-invest';
const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new AutoInvest({ configurationRestAPI });

client.restAPI
    .queryAllSourceAssetAndTargetAsset()
    .then((res) => res.data())
    .then((data: AutoInvestRestAPI.QueryAllSourceAssetAndTargetAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
