# Compression Configuration

```typescript
import { Staking, StakingRestAPI } from '@binance/staking';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    compression: false, // Disable compression
};
const client = new Staking({ configurationRestAPI });

client.restAPI
    .claimBoostRewards()
    .then((res) => res.data())
    .then((data: StakingRestAPI.ClaimBoostRewardsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
