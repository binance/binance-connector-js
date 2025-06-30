# Retries Configuration

```typescript
import { CopyTrading, CopyTradingRestAPI } from '@binance/copy-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new CopyTrading({ configurationRestAPI });

client.restAPI
    .getFuturesLeadTraderStatus()
    .then((res) => res.data())
    .then((data: CopyTradingRestAPI.GetFuturesLeadTraderStatusResponse) => console.log(data))
    .catch((err) => console.error(err));
```
