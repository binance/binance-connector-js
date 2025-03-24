# Proxy Configuration

```typescript
import { DualInvestment, DualInvestmentRestAPI } from '@binance/dual-investment';

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
const client = new DualInvestment({ configurationRestAPI });

client.restAPI
    .getDualInvestmentPositions()
    .then((res) => res.data())
    .then((data: DualInvestmentRestAPI.GetDualInvestmentPositionsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
