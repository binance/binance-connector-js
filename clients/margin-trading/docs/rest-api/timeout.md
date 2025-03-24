# Timeout

```typescript
import { MarginTrading, MarginTradingRestAPI } from '@binance/margin-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new MarginTrading({ configurationRestAPI });

client.restAPI.getSummaryOfMarginAccount().catch((error) => console.error(error));
```
