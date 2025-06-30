# Compression Configuration

```typescript
import { NFT, NFTRestAPI } from '@binance/nft';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new NFT({ configurationRestAPI });

client.restAPI
    .getNFTAsset()
    .then((res) => res.data())
    .then((data: NFTRestAPI.GetNFTAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
