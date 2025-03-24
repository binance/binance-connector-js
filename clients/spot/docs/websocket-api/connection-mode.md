# Connection Mode Configuration

```typescript
import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '@binance/spot';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: SPOT_WS_API_PROD_URL,
    mode: 'pool', // Use pool mode
    poolSize: 3, // Number of connections in the pool
};
const client = new Spot({ configurationWebsocketAPI });

client.websocketAPI
    .connect()
    .then((connection: SpotWebsocketAPI.WebsocketAPIConnection) =>
        connection.exchangeInfo({ symbol: 'BNBUSDT' })
    )
    .then((res: SpotWebsocketAPI.ApiResponse<SpotWebsocketAPI.ExchangeInfoResponse>) =>
        console.log(res.data)
    )
    .catch((err) => console.error(err));
```
