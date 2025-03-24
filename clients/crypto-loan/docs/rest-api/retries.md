# Retries Configuration

```typescript
import { CryptoLoan, CryptoLoanRestAPI } from '@binance/crypto-loan';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new CryptoLoan({ configurationRestAPI });

client.restAPI
    .getFlexibleLoanBorrowHistory()
    .then((res) => res.data())
    .then((data: CryptoLoanRestAPI.GetFlexibleLoanBorrowHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
