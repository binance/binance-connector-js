# Retries Configuration

```typescript
import { Staking, StakingRestAPI } from '@binance/staking';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    retries: 5, // Retry up to 5 times
    backoff: 2000, // 2 seconds between retries
};
const client = new Staking({ configurationRestAPI });

client.restAPI
    .claimBoostRewards()
    .then((res) => res.data())
    .then((data: StakingRestAPI.ClaimBoostRewardsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
