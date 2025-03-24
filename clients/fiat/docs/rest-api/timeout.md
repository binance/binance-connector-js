# Timeout

```typescript
import { Fiat, FiatRestAPI } from '@binance/fiat';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Fiat({ configurationRestAPI });

client.restAPI.getFiatDepositWithdrawHistory().catch((error) => console.error(error));
```
