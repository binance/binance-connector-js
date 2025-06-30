# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Mining, MiningRestAPI } from '@binance/mining';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Mining({ configurationRestAPI });

client.restAPI
    .acquiringAlgorithm()
    .then((res) => res.data())
    .then((data: MiningRestAPI.AcquiringAlgorithmResponse) => console.log(data))
    .catch((err) => console.error(err));
```
