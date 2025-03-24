# Timeout

```typescript
import { Convert, ConvertRestAPI } from '@binance/convert';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Convert({ configurationRestAPI });

client.restAPI.listAllConvertPairs().catch((error) => console.error(error));
```
