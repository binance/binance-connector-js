# Timeout

```typescript
import { CryptoLoan, CryptoLoanRestAPI } from '@binance/crypto-loan';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new CryptoLoan({ configurationRestAPI });

client.restAPI.getFlexibleLoanBorrowHistory().catch((error) => console.error(error));
```
