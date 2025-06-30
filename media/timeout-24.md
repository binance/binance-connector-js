# Timeout

```typescript
import { Staking, StakingRestAPI } from '@binance/staking';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    timeout: 5000,
};
const client = new Staking({ configurationRestAPI });

client.restAPI.claimBoostRewards().catch((error) => console.error(error));
```
