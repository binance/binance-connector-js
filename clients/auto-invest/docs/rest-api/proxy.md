# Proxy Configuration

```typescript
import { AutoInvest, AutoInvestRestAPI } from '@binance/auto-invest';

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
const client = new AutoInvest({ configurationRestAPI });

client.restAPI
    .queryAllSourceAssetAndTargetAsset()
    .then((res) => res.data())
    .then((data: AutoInvestRestAPI.QueryAllSourceAssetAndTargetAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
