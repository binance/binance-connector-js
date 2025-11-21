# HTTPS Agent Configuration

```typescript
import https from 'https';
import { GiftCard, GiftCardRestAPI } from '@binance/giftcard';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new GiftCard({ configurationRestAPI });

client.restAPI
    .createASingleTokenGiftCard({ token: '6H9EKF5ECCWFBHGE', amount: 1000 })
    .then((res) => res.data())
    .then((data: GiftCardRestAPI.CreateASingleTokenGiftCardResponse) => console.log(data))
    .catch((err) => console.error(err));
```
