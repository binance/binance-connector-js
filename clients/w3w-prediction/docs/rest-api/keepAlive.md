# Keep-Alive Configuration

```typescript
import { W3WPrediction, W3WPredictionRestAPI } from '@binance/w3w-prediction';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    keepAlive: false, // Default is true
};
const client = new W3WPrediction({ configurationRestAPI });

client.restAPI
    .listPredictionCategories()
    .then((res) => res.data())
    .then((data: W3WPredictionRestAPI.ListPredictionCategoriesResponse) => console.log(data))
    .catch((err) => console.error(err));
```
