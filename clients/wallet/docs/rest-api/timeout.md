# Timeout

```typescript
import { Wallet, WalletRestAPI } from '@binance/wallet';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Wallet({ configurationRestAPI });

client.restAPI.accountInfo().catch((error) => console.error(error));
```
