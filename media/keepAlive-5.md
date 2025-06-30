# Keep-Alive Configuration

```typescript
import { CryptoLoan, CryptoLoanRestAPI } from '@binance/crypto-loan';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new CryptoLoan({ configurationRestAPI });

client.restAPI
    .getFlexibleLoanBorrowHistory()
    .then((res) => res.data())
    .then((data: CryptoLoanRestAPI.GetFlexibleLoanBorrowHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
