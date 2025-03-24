# Timeout

```typescript
import { DualInvestment, DualInvestmentRestAPI } from '@binance/dual-investment';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new DualInvestment({ configurationRestAPI });

client.restAPI.getDualInvestmentPositions().catch((error) => console.error(error));
```
