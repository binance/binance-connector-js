# Proxy Configuration

```typescript
import { Mining, MiningRestAPI } from '@binance/mining';

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
const client = new Mining({ configurationRestAPI });

client.restAPI
    .acquiringAlgorithm()
    .then((res) => res.data())
    .then((data: MiningRestAPI.AcquiringAlgorithmResponse) => console.log(data))
    .catch((err) => console.error(err));
```
