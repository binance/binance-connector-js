# Proxy Configuration

```typescript
import { W3WPrediction, W3WPredictionRestAPI } from '@binance/w3w-prediction';

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
const client = new W3WPrediction({ configurationRestAPI });

client.restAPI
    .listPredictionCategories()
    .then((res) => res.data())
    .then((data: W3WPredictionRestAPI.ListPredictionCategoriesResponse) => console.log(data))
    .catch((err) => console.error(err));
```
