# Timeout

```typescript
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

client.restAPI.exchangeInformation().catch((error) => console.error(error));
```
