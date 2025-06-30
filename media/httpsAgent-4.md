# HTTPS Agent Configuration

```typescript
import https from 'https';
import { CopyTrading, CopyTradingRestAPI } from '@binance/copy-trading';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new CopyTrading({ configurationRestAPI });

client.restAPI
    .getFuturesLeadTraderStatus()
    .then((res) => res.data())
    .then((data: CopyTradingRestAPI.GetFuturesLeadTraderStatusResponse) => console.log(data))
    .catch((err) => console.error(err));
```
