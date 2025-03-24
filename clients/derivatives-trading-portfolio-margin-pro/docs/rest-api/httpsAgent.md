# HTTPS Agent Configuration

```typescript
import https from 'https';
import { DerivativesTradingPortfolioMarginPro } from '@binance/derivatives-trading-portfolio-margin-pro';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

client.restAPI
    .getPortfolioMarginProAccountInfo()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
