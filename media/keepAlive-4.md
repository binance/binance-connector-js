# Keep-Alive Configuration

```typescript
import { CopyTrading, CopyTradingRestAPI } from '@binance/copy-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new CopyTrading({ configurationRestAPI });

client.restAPI
    .getFuturesLeadTraderStatus()
    .then((res) => res.data())
    .then((data: CopyTradingRestAPI.GetFuturesLeadTraderStatusResponse) => console.log(data))
    .catch((err) => console.error(err));
```
