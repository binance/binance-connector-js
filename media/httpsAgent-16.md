# HTTPS Agent Configuration

```typescript
import https from 'https';
import { NFT, NFTRestAPI } from '@binance/nft';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new NFT({ configurationRestAPI });

client.restAPI
    .getNFTAsset()
    .then((res) => res.data())
    .then((data: NFTRestAPI.GetNFTAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
