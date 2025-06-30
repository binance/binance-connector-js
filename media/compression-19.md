# Compression Configuration

```typescript
import { MarginTrading, MarginTradingRestAPI } from '@binance/margin-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new MarginTrading({ configurationRestAPI });

client.restAPI
    .getSummaryOfMarginAccount()
    .then((res) => res.data())
    .then((data: MarginTradingRestAPI.GetSummaryOfMarginAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
