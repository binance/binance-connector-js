# Timeout

```typescript
import { DerivativesTradingPortfolioMarginPro } from '@binance/derivatives-trading-portfolio-margin-pro';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

client.restAPI.getPortfolioMarginProAccountInfo().catch((error) => console.error(error));
```
