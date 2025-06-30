# Time Unit

The API supports different time units for timestamp values, including `milliseconds` and `microseconds` (the default one is `milliseconds`).

```typescript
import { Spot, SpotRestAPI, TimeUnit } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeUnit: TimeUnit.MICROSECOND, // Set time unit to microseconds
};
const client = new Spot({ configurationRestAPI });

client.restAPI
    .exchangeInfo({ symbol: 'BNBUSDT' })
    .then((res) => res.data())
    .then((data: SpotRestAPI.ExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
