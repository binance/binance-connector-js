# Proxy Configuration

```typescript
import { CopyTrading, CopyTradingRestAPI } from '@binance/copy-trading';

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
const client = new CopyTrading({ configurationRestAPI });

client.restAPI
    .getFuturesLeadTraderStatus()
    .then((res) => res.data())
    .then((data: CopyTradingRestAPI.GetFuturesLeadTraderStatusResponse) => console.log(data))
    .catch((err) => console.error(err));
```
