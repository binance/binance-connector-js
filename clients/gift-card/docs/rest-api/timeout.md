# Timeout

```typescript
import { GiftCard, GiftCardRestAPI } from '@binance/gift-card';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new GiftCard({ configurationRestAPI });

client.restAPI
    .createASingleTokenGiftCard({ token: '6H9EKF5ECCWFBHGE', amount: 1000 })
    .catch((error) => console.error(error));
```
