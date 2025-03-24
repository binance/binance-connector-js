# Compression Configuration

```typescript
import { Mining, MiningRestAPI } from '@binance/mining';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new Mining({ configurationRestAPI });

client.restAPI
    .acquiringAlgorithm()
    .then((res) => res.data())
    .then((data: MiningRestAPI.AcquiringAlgorithmResponse) => console.log(data))
    .catch((err) => console.error(err));
```
