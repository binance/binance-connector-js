# Timeout

```typescript
import { AutoInvest, AutoInvestRestAPI } from '@binance/auto-invest';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new AutoInvest({ configurationRestAPI });

client.restAPI.queryAllSourceAssetAndTargetAsset().catch((error) => console.error(error));
```
