# Proxy Configuration

```typescript
import { Pay, PayRestAPI } from '@binance/pay';

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
const client = new Pay({ configurationRestAPI });

client.restAPI
    .getPayTradeHistory()
    .then((res) => res.data())
    .then((data: PayRestAPI.GetPayTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
