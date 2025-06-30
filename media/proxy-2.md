# Proxy Configuration

```typescript
import { C2C, C2CRestAPI } from '@binance/c2c';

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
const client = new C2C({ configurationRestAPI });

client.restAPI
    .getC2CTradeHistory()
    .then((res) => res.data())
    .then((data: C2CRestAPI.GetC2CTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
