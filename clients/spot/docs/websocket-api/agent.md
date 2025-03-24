# WebSocket Agent Configuration

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '@binance/spot';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    wsURL: SPOT_WS_API_PROD_URL,
    agent: new HttpsProxyAgent('your-proxy-url'),
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
