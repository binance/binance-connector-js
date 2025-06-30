# Retries Configuration

```typescript
import { Mining, MiningRestAPI } from '@binance/mining';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Mining({ configurationRestAPI });

client.restAPI
    .acquiringAlgorithm()
    .then((res) => res.data())
    .then((data: MiningRestAPI.AcquiringAlgorithmResponse) => console.log(data))
    .catch((err) => console.error(err));
```
