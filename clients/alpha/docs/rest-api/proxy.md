# Proxy Configuration

```typescript
import { Alpha, AlphaRestAPI } from '@binance/alpha';

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
const client = new Alpha({ configurationRestAPI });

client.restAPI
    .getExchangeInfo()
    .then((res) => res.data())
    .then((data: AlphaRestAPI.GetExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
