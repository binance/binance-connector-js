# HTTPS Agent Configuration

```typescript
import https from 'https';
import { VIPLoan, VIPLoanRestAPI } from '@binance/vip-loan';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new VIPLoan({ configurationRestAPI });

client.restAPI
    .getCollateralAssetData()
    .then((res) => res.data())
    .then((data: VIPLoanRestAPI.GetCollateralAssetDataResponse) => console.log(data))
    .catch((err) => console.error(err));
```
