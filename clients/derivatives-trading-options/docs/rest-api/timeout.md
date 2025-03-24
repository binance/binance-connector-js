# Timeout

```typescript
import { DerivativesTradingOptions } from '@binance/derivatives-trading-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

client.restAPI.optionAccountInformation().catch((error) => console.error(error));
```
