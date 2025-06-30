# Proxy Configuration

```typescript
import { Algo, AlgoRestAPI } from '@binance/algo';

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
const client = new Algo({ configurationRestAPI });

client.restAPI
    .queryHistoricalAlgoOrders()
    .then((res) => res.data())
    .then((data: AlgoRestAPI.QueryHistoricalAlgoOrdersResponse) => console.log(data))
    .catch((err) => console.error(err));
```
