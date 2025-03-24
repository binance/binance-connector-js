# Key Pair Based Authentication

```typescript
import fs from 'fs';
import { C2C, C2CRestAPI } from '@binance/c2c';

const apiKey = 'your-api-key';
const privateKey = 'your-private-key-content-or-file-path'; // Provide the private key directly as a string or specify the path to a private key file (e.g., '/path/to/private_key.pem')
const privateKeyPassphrase = 'your-passphrase'; // Optional: Required if the private key is encrypted

const configurationRestAPI = {
    apiKey,
    privateKey,
    privateKeyPassphrase,
};
const client = new C2C({ configurationRestAPI });

client.restAPI
    .getC2CTradeHistory()
    .then((res) => res.data())
    .then((data: C2CRestAPI.GetC2CTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```
