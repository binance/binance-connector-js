# HTTPS Agent Configuration

```typescript
import https from 'https';
import { Staking, StakingRestAPI } from '@binance/staking';

const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new Staking({ configurationRestAPI });

client.restAPI
    .claimBoostRewards()
    .then((res) => res.data())
    .then((data: StakingRestAPI.ClaimBoostRewardsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
