# Timeout

```typescript
import { NFT, NFTRestAPI } from '@binance/nft';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new NFT({ configurationRestAPI });

client.restAPI.getNFTAsset().catch((error) => console.error(error));
```
