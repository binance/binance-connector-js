# Timeout

```typescript
import { DerivativesTradingPortfolioMargin } from '@binance/derivatives-trading-portfolio-margin';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

client.restAPI.accountInformation().catch((error) => console.error(error));
```
