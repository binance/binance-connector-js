# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Fiat, FiatRestAPI } from '@binance/fiat';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Fiat({ configurationRestAPI });

client.restAPI
    .getFiatDepositWithdrawHistory({ transactionType: '0' })
    .then((res) => res.data())
    .then((data: FiatRestAPI.GetFiatDepositWithdrawHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
