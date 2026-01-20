# Compression Configuration

```typescript
import { Alpha, AlphaRestAPI } from '@binance/alpha';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new Alpha({ configurationRestAPI });

client.restAPI
    .getExchangeInfo()
    .then((res) => res.data())
    .then((data: AlphaRestAPI.GetExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
