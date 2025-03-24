# Compression Configuration

```typescript
import { DerivativesTradingOptions } from '@binance/derivatives-trading-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

client.restAPI
    .optionAccountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
