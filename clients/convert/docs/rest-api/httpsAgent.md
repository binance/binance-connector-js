# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Convert, ConvertRestAPI } from '@binance/convert';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Convert({ configurationRestAPI });

client.restAPI
    .listAllConvertPairs()
    .then((res) => res.data())
    .then((data: ConvertRestAPI.ListAllConvertPairsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
