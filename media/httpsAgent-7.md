# HTTPS Agent Configuration

```typescript
import https from 'https';
import { DerivativesTradingOptions } from '@binance/derivatives-trading-options';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new DerivativesTradingOptions({ configurationRestAPI });

client.restAPI
    .optionAccountInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
