# Compression Configuration

```typescript
import { DerivativesTradingPortfolioMarginPro } from '@binance/derivatives-trading-portfolio-margin-pro';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

client.restAPI
    .getPortfolioMarginProAccountInfo()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
