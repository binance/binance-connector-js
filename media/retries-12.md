# Retries Configuration

```typescript
import { Fiat, FiatRestAPI } from '@binance/fiat';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Fiat({ configurationRestAPI });

client.restAPI
    .getFiatDepositWithdrawHistory({ transactionType: '0' })
    .then((res) => res.data())
    .then((data: FiatRestAPI.GetFiatDepositWithdrawHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
