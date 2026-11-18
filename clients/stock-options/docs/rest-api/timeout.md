# Timeout

```typescript
import { StockOptions } from '@binance/stock-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new StockOptions({ configurationRestAPI });

client.restAPI.optionExpirations({ underlyingSymbol: 'NVDA' }).catch((error) => console.error(error));
```
