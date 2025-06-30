# Keep-Alive Configuration

```typescript
import { MarginTrading, MarginTradingRestAPI } from '@binance/margin-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new MarginTrading({ configurationRestAPI });

client.restAPI
    .getSummaryOfMarginAccount()
    .then((res) => res.data())
    .then((data: MarginTradingRestAPI.GetSummaryOfMarginAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
