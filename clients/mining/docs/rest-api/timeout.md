# Timeout

```typescript
import { Mining, MiningRestAPI } from '@binance/mining';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Mining({ configurationRestAPI });

client.restAPI.acquiringAlgorithm().catch((error) => console.error(error));
```
