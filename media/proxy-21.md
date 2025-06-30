# Proxy Configuration

```typescript
import { Staking, StakingRestAPI } from '@binance/staking';

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
const client = new Staking({ configurationRestAPI });

client.restAPI
    .claimBoostRewards()
    .then((res) => res.data())
    .then((data: StakingRestAPI.ClaimBoostRewardsResponse) => console.log(data))
    .catch((err) => console.error(err));
```
