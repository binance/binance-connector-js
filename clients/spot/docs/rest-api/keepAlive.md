# Keep-Alive Configuration

```typescript
import { Spot, SpotRestAPI } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new Spot({ configurationRestAPI });

client.restAPI
    .getAccount()
    .then((res) => res.data())
    .then((data: SpotRestAPI.GetAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```
