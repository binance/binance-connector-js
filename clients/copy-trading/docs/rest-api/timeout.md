# Timeout

```typescript
import { CopyTrading, CopyTradingRestAPI } from '@binance/copy-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new CopyTrading({ configurationRestAPI });

client.restAPI.getFuturesLeadTraderStatus().catch((error) => console.error(error));
```
