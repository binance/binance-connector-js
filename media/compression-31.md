# Compression Configuration

```typescript
import { Wallet, WalletRestAPI } from '@binance/wallet';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new Wallet({ configurationRestAPI });

client.restAPI
    .accountInfo()
    .then((res) => res.data())
    .then((data: WalletRestAPI.AccountInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
