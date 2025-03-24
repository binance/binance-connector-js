# Timeout

```typescript
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

client.restAPI.exchangeInformation().catch((error) => console.error(error));
```
