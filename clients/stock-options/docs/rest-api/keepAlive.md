# Keep-Alive Configuration

```typescript
import { StockOptions } from '@binance/stock-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new StockOptions({ configurationRestAPI });

client.restAPI
    .optionExpirations({ underlyingSymbol: 'NVDA' })
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
