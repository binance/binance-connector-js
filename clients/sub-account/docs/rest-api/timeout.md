# Timeout

```typescript
import { SubAccount, SubAccountRestAPI } from '@binance/sub-account';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new SubAccount({ configurationRestAPI });

client.restAPI.getSummaryOfSubAccountsMarginAccount().catch((error) => console.error(error));
```
