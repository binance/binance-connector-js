# Proxy Configuration

```typescript
import { GiftCard, GiftCardRestAPI } from '@binance/giftcard';

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
const client = new GiftCard({ configurationRestAPI });

client.restAPI
    .createASingleTokenGiftCard({ token: '6H9EKF5ECCWFBHGE', amount: 1000 })
    .then((res) => res.data())
    .then((data: GiftCardRestAPI.CreateASingleTokenGiftCardResponse) => console.log(data))
    .catch((err) => console.error(err));
```
