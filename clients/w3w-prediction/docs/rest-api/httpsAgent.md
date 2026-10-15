# HTTPS Agent Configuration

```typescript
import https from 'https';
import { W3WPrediction, W3WPredictionRestAPI } from '@binance/w3w-prediction';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new W3WPrediction({ configurationRestAPI });

client.restAPI
    .listPredictionCategories()
    .then((res) => res.data())
    .then((data: W3WPredictionRestAPI.ListPredictionCategoriesResponse) => console.log(data))
    .catch((err) => console.error(err));
```

For proxies that require an HTTPS CONNECT tunnel, see
[HTTPS CONNECT tunneling](./proxy.md#https-connect-tunneling).
