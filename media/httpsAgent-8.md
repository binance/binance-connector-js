# HTTPS Agent Configuration

```typescript
import https from 'https';
import { DerivativesTradingPortfolioMargin } from '@binance/derivatives-trading-portfolio-margin';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

client.restAPI
    .accountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
