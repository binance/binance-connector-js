# Proxy Configuration

```typescript
import { SubAccount, SubAccountRestAPI } from '@binance/sub-account';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    proxy: {
        host: '127.0.0.1',
        port: 8080,
        protocol: 'http', // or 'https'
        auth: {
            username: 'proxy-user',
            password: 'proxy-password',
        },
    },
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
