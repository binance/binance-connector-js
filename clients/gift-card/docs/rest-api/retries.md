# Retries Configuration

```typescript
import { GiftCard, GiftCardRestAPI } from '@binance/giftcard';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new GiftCard({ configurationRestAPI });

client.restAPI
    .createASingleTokenGiftCard({ token: '6H9EKF5ECCWFBHGE', amount: 1000 })
    .then((res) => res.data())
    .then((data: GiftCardRestAPI.CreateASingleTokenGiftCardResponse) => console.log(data))
    .catch((err) => console.error(err));
```
