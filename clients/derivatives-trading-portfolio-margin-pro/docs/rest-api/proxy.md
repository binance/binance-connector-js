# Proxy Configuration

```typescript
import { DerivativesTradingPortfolioMarginPro } from '@binance/derivatives-trading-portfolio-margin-pro';

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
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

client.restAPI
    .getPortfolioMarginProAccountInfo()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
