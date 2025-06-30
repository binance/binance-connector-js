# Retries Configuration

```typescript
import { DerivativesTradingPortfolioMargin } from '@binance/derivatives-trading-portfolio-margin';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

client.restAPI
    .accountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
