# Key Pair Based Authentication

```typescript
import fs from 'fs';
import { AutoInvest, AutoInvestRestAPI } from '@binance/auto-invest';

const apiKey = 'your-api-key';
const privateKey = 'your-private-key-content-or-file-path'; // Provide the private key directly as a string or specify the path to a private key file (e.g., '/path/to/private_key.pem')
const privateKeyPassphrase = 'your-passphrase'; // Optional: Required if the private key is encrypted

const configurationRestAPI = {
    apiKey,
    privateKey,
    privateKeyPassphrase,
};
const client = new AutoInvest({ configurationRestAPI });

client.restAPI
    .queryAllSourceAssetAndTargetAsset()
    .then((res) => res.data())
    .then((data: AutoInvestRestAPI.QueryAllSourceAssetAndTargetAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
