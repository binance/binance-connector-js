# Retries Configuration

```typescript
import { DerivativesTradingPortfolioMarginPro } from '@binance/derivatives-trading-portfolio-margin-pro';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

client.restAPI
    .getPortfolioMarginProAccountInfo()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
