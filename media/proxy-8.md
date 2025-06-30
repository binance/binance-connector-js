# Proxy Configuration

```typescript
import { DerivativesTradingPortfolioMargin } from '@binance/derivatives-trading-portfolio-margin';

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
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

client.restAPI
    .accountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
