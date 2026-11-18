# Compression Configuration

```typescript
import { StockOptions } from '@binance/stock-options';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new StockOptions({ configurationRestAPI });

client.restAPI
    .optionExpirations({ underlyingSymbol: 'NVDA' })
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
