# Timeout

```typescript
import { W3WPrediction, W3WPredictionRestAPI } from '@binance/w3w-prediction';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new W3WPrediction({ configurationRestAPI });

client.restAPI.listPredictionCategories().catch((error) => console.error(error));
```
