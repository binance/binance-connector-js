# Retries Configuration

```typescript
import { SubAccount, SubAccountRestAPI } from '@binance/sub-account';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new SubAccount({ configurationRestAPI });

client.restAPI
    .getSummaryOfSubAccountsMarginAccount()
    .then((res) => res.data())
    .then((data: SubAccountRestAPI.GetSummaryOfSubAccountsMarginAccountResponse) =>
        console.log(data)
    )
    .catch((err) => console.error(err));
```
