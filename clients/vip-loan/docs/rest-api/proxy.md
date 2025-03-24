# Proxy Configuration

```typescript
import { VIPLoan, VIPLoanRestAPI } from '@binance/vip-loan';

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
const client = new VIPLoan({ configurationRestAPI });

client.restAPI
    .getCollateralAssetData()
    .then((res) => res.data())
    .then((data: VIPLoanRestAPI.GetCollateralAssetDataResponse) => console.log(data))
    .catch((err) => console.error(err));
```
