# Timeout

```typescript
import { VIPLoan, VIPLoanRestAPI } from '@binance/vip-loan';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new VIPLoan({ configurationRestAPI });

client.restAPI.getCollateralAssetData().catch((error) => console.error(error));
```
