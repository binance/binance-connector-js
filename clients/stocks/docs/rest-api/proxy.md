# Proxy Configuration

```typescript
import { Stocks, StocksRestAPI } from '@binance/stocks';

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
const client = new Stocks({ configurationRestAPI });

client.restAPI
    .exchangeInfo()
    .then((res) => res.data())
    .then((data: StocksRestAPI.ExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
