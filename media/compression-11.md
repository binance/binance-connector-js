# Compression Configuration

```typescript
import { DerivativesTradingPortfolioMargin } from '@binance/derivatives-trading-portfolio-margin';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

client.restAPI
    .accountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
