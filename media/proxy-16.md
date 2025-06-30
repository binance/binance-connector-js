# Proxy Configuration

```typescript
import { NFT, NFTRestAPI } from '@binance/nft';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    proxy: {
        host: '127.0.0.1',
        port: 8080,
        protocol: 'http', // or 'https'
        auth: {
            username: 'proxy-user',
            password: 'proxy-password',
        },
    },
};
const client = new NFT({ configurationRestAPI });

client.restAPI
    .getNFTAsset()
    .then((res) => res.data())
    .then((data: NFTRestAPI.GetNFTAssetResponse) => console.log(data))
    .catch((err) => console.error(err));
```
