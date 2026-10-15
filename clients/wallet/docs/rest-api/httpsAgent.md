# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Wallet, WalletRestAPI } from '@binance/wallet';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Wallet({ configurationRestAPI });

client.restAPI
    .accountInfo()
    .then((res) => res.data())
    .then((data: WalletRestAPI.AccountInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```

For proxies that require an HTTPS CONNECT tunnel, see
[HTTPS CONNECT tunneling](./proxy.md#https-connect-tunneling).
