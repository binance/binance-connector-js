# HTTPS Agent Configuration

```typescript
import https from 'https';
import { CryptoLoan, CryptoLoanRestAPI } from '@binance/crypto-loan';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new CryptoLoan({ configurationRestAPI });

client.restAPI
    .getFlexibleLoanBorrowHistory()
    .then((res) => res.data())
    .then((data: CryptoLoanRestAPI.GetFlexibleLoanBorrowHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
