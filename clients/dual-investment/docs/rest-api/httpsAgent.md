# HTTPS Agent Configuration

```typescript
import https from 'https';
import { DualInvestment, DualInvestmentRestAPI } from '@binance/dual-investment';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new DualInvestment({ configurationRestAPI });

client.restAPI
    .getDualInvestmentPositions()
    .then((res) => res.data())
    .then((data: DualInvestmentRestAPI.GetDualInvestmentPositionsResponse) => console.log(data))
    .catch((err) => console.error(err));
```

For proxies that require an HTTPS CONNECT tunnel, see
[HTTPS CONNECT tunneling](./proxy.md#https-connect-tunneling).
