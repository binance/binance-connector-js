# Proxy Configuration

```typescript
import { Spot, SpotRestAPI } from '@binance/spot';

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
const client = new Spot({ configurationRestAPI });

client.restAPI
    .getAccount()
    .then((res) => res.data())
    .then((data: SpotRestAPI.GetAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
