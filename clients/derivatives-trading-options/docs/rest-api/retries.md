# Retries Configuration

```typescript
import { DerivativesTradingOptions } from '@binance/derivatives-trading-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

client.restAPI
    .optionAccountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
