# Proxy Configuration

The `protocol` field describes the connection between your application and the
proxy. Traffic from the proxy to the Binance API is always HTTPS, regardless of
this value.

Every endpoint of this product requires authentication, so the examples below
use placeholder API credentials.

```typescript
import { C2C, C2CRestAPI } from '@binance/c2c';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    proxy: {
        host: '127.0.0.1',
        port: 8080,
        protocol: 'http', // or 'https'
        // Omit auth if your proxy does not require authentication.
        auth: {
            username: 'proxy-user',
            password: 'proxy-password',
        },
    },
};
const client = new C2C({ configurationRestAPI });

client.restAPI
    .getC2CTradeHistory()
    .then((res) => res.data())
    .then((data: C2CRestAPI.GetC2CTradeHistoryResponse) => console.log(data))
    .catch((err) => console.error(err));
```

## HTTPS CONNECT tunneling

Whether the `proxy` configuration above opens an HTTPS CONNECT tunnel depends on
the installed Axios version: with Axios 1.20.0 it does, whereas with Axios 1.7.4
the request is forwarded as an absolute HTTPS URL, which CONNECT-only proxies
reject. If an older installation fails unexpectedly, check the resolved version
with `npm ls axios`; proxy behavior can change with dependency updates.

For full control over tunneling, use an explicit CONNECT agent instead. Install
the optional dependency in your application:

```bash
npm install @binance/c2c https-proxy-agent@7
```

The following script keeps TLS certificate verification enabled. Save it as
`proxy-connect.ts`:

```typescript
import { C2C } from '@binance/c2c';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxyUrl = process.env.PROXY_URL;
if (!proxyUrl) {
    throw new Error('Set PROXY_URL to your HTTP or HTTPS proxy URL.');
}

const httpsAgent = new HttpsProxyAgent(proxyUrl);
const client = new C2C({
    configurationRestAPI: {
        apiKey: 'your-api-key',
        apiSecret: 'your-api-secret',
        httpsAgent,
        timeout: 5000,
        retries: 0,
    },
});

client.restAPI
    .getC2CTradeHistory()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err: unknown) => {
        console.error(err instanceof Error ? err.message : 'Proxy request failed.');
        process.exitCode = 1;
    })
    .finally(() => httpsAgent.destroy());
```

Run it with a TypeScript runner, passing your proxy address in `PROXY_URL`:

```bash
PROXY_URL=http://127.0.0.1:8080 npx tsx proxy-connect.ts
```

When using this agent:

- Do not set the SDK's `proxy` option at the same time; pick one mechanism.
- Axios also reads `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY` and their lowercase
  variants from the environment, and may apply them independently of your custom
  agent. Run the script in a shell without those variables, or set `NO_PROXY`
  for the API hostname to stop Axios from selecting an environment proxy.
- `NO_PROXY` only affects that environment lookup: an explicitly configured
  `HttpsProxyAgent` still connects through `PROXY_URL`.
- With older Axios versions (for example 1.7.4), an inherited `HTTPS_PROXY`
  variable can prevent the custom agent from establishing the intended tunnel.

If your proxy requires authentication, include the credentials in the URL:
`http://username:password@proxy-host:port`. Percent-encode the username and
password separately if they contain reserved URL characters, and keep the
resulting URL out of source control and logs.

A `407` response means the proxy expects authentication. A certificate error
means the chain is not trusted: add the appropriate CA to your trust store
instead of disabling TLS verification. This example targets Node.js; Bun
handles proxies differently and is not covered here.
