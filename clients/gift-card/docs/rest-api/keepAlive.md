# Keep-Alive Configuration

```typescript
import { GiftCard, GiftCardRestAPI } from '@binance/gift-card';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new GiftCard({ configurationRestAPI });

client.restAPI
    .createASingleTokenGiftCard({ token: '6H9EKF5ECCWFBHGE', amount: 1000 })
    .then((res) => res.data())
    .then((data: GiftCardRestAPI.CreateASingleTokenGiftCardResponse) => console.log(data))
    .catch((err) => console.error(err));
```
