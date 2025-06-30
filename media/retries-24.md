# Retries Configuration

```typescript
import { Wallet, WalletRestAPI } from '@binance/wallet';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Wallet({ configurationRestAPI });

client.restAPI
    .accountInfo()
    .then((res) => res.data())
    .then((data: WalletRestAPI.AccountInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
