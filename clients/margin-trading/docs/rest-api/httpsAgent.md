# HTTPS Agent Configuration

```typescript
import https from 'https';
import { MarginTrading, MarginTradingRestAPI } from '@binance/margin-trading';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new MarginTrading({ configurationRestAPI });

client.restAPI
    .getSummaryOfMarginAccount()
    .then((res) => res.data())
    .then((data: MarginTradingRestAPI.GetSummaryOfMarginAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
