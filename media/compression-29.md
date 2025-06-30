# Compression Configuration

```typescript
import { SubAccount, SubAccountRestAPI } from '@binance/sub-account';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
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
