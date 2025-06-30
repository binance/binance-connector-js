# Keep-Alive Configuration

```typescript
import { VIPLoan, VIPLoanRestAPI } from '@binance/vip-loan';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new VIPLoan({ configurationRestAPI });

client.restAPI
    .getCollateralAssetData()
    .then((res) => res.data())
    .then((data: VIPLoanRestAPI.GetCollateralAssetDataResponse) => console.log(data))
    .catch((err) => console.error(err));
```
