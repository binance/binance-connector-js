# Keep-Alive Configuration

```typescript
import { DualInvestment, DualInvestmentRestAPI } from '@binance/dual-investment';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new DualInvestment({ configurationRestAPI });

client.restAPI
    .getDualInvestmentPositions()
    .then((res) => res.data())
    .then((data: DualInvestmentRestAPI.GetDualInvestmentPositionsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
