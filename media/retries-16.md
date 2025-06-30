# Retries Configuration

```typescript
import { NFT, NFTRestAPI } from '@binance/nft';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new NFT({ configurationRestAPI });

client.restAPI
    .getNFTAsset()
    .then((res) => res.data())
    .then((data: NFTRestAPI.GetNFTAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
