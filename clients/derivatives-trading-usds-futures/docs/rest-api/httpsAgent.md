# HTTPS Agent Configuration

```typescript
import https from 'https';
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

client.restAPI
    .exchangeInformation()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

For an HTTP or HTTPS proxy that requires a CONNECT tunnel, see the
[HTTPS CONNECT proxy example](./proxy.md#https-connect-proxies).
