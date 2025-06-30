# Proxy Configuration

```typescript
import { SimpleEarn, SimpleEarnRestAPI } from '@binance/simple-earn';

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
const client = new SimpleEarn({ configurationRestAPI });

client.restAPI
    .getSimpleEarnFlexibleProductList()
    .then((res) => res.data())
    .then((data: SimpleEarnRestAPI.GetSimpleEarnFlexibleProductListResponse) => console.log(data))
    .catch((err) => console.error(err));
```
