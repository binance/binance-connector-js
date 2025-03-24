# Private Key Configuration

```typescript
import fs from 'fs';
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';

const privateKey = 'your-private-key-content-or-file-path'; // Provide the private key directly as a string or specify the path to a private key file (e.g., '/path/to/private_key.pem')
const privateKeyPassphrase = 'your-passphrase'; // Optional: Required if the private key is encrypted

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    privateKey,
    privateKeyPassphrase,
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketAPI });

client.websocketAPI
    .connect()
    .then((connection) =>
        connection.positionInformation()
    )
    .then((res) =>
        console.log(res.data)
    )
    .catch((err) => console.error(err));
```
