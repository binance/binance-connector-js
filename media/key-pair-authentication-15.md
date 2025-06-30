# Key Pair Based Authentication

```typescript
import fs from 'fs';
import { GiftCard, GiftCardRestAPI } from '@binance/gift-card';

const apiKey = 'your-api-key';
const privateKey = 'your-private-key-content-or-file-path'; // Provide the private key directly as a string or specify the path to a private key file (e.g., '/path/to/private_key.pem')
const privateKeyPassphrase = 'your-passphrase'; // Optional: Required if the private key is encrypted

const configurationRestAPI = {
    apiKey,
    privateKey,
    privateKeyPassphrase,
};
const client = new GiftCard({ configurationRestAPI });

client.restAPI
    .createASingleTokenGiftCard({ token: '6H9EKF5ECCWFBHGE', amount: 1000 })
    .then((res) => res.data())
    .then((data: GiftCardRestAPI.CreateASingleTokenGiftCardResponse) => console.log(data))
    .catch((err) => console.error(err));
```
