# Private Key Configuration

```typescript
import fs from 'fs';
import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '@binance/spot';

const privateKey = 'your-private-key-content-or-file-path'; // Provide the private key directly as a string or specify the path to a private key file (e.g., '/path/to/private_key.pem')
const privateKeyPassphrase = 'your-passphrase'; // Optional: Required if the private key is encrypted

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    privateKey,
    privateKeyPassphrase,
    wsURL: SPOT_WS_API_PROD_URL,
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
