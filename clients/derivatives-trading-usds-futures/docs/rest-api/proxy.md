# Proxy Configuration

The `protocol` below describes the connection to the proxy, not the Binance API.
The API endpoint continues to use HTTPS.

Use the public connectivity endpoint to test the proxy without an API key or secret.

```typescript
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';

const configurationRestAPI = {
    apiKey: '', // No API key is needed for this public endpoint.
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
const client = new DerivativesTradingUsdsFutures({ configurationRestAPI });

client.restAPI
    .testConnectivity()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```

## HTTPS CONNECT proxies

Proxy behavior also depends on the installed Axios version. In local tests with
Axios 1.20.0, the `proxy` configuration above established an HTTPS CONNECT tunnel.
With Axios 1.7.4, it instead forwarded an absolute HTTPS URL, which a proxy that
requires CONNECT rejected. Check the resolved version with `npm ls axios` when
investigating an older installation; proxy behavior can change with dependency updates.

For an explicit CONNECT agent, install the optional dependency in your application:

```bash
npm install @binance/derivatives-trading-usds-futures https-proxy-agent@7
```

Save the following as `proxy-connect.ts`. It calls a public endpoint and keeps TLS
certificate verification enabled:

```typescript
import { DerivativesTradingUsdsFutures } from '@binance/derivatives-trading-usds-futures';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxyUrl = process.env.PROXY_URL;
if (!proxyUrl) {
    throw new Error('Set PROXY_URL to your HTTP or HTTPS proxy URL.');
}

const httpsAgent = new HttpsProxyAgent(proxyUrl);
const client = new DerivativesTradingUsdsFutures({
    configurationRestAPI: {
        apiKey: '', // Required by the configuration type; empty for public requests.
        httpsAgent,
        timeout: 5000,
        retries: 0,
    },
});

client.restAPI
    .testConnectivity()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err: unknown) => {
        console.error(err instanceof Error ? err.message : 'Proxy request failed.');
        process.exitCode = 1;
    })
    .finally(() => httpsAgent.destroy());
```

For example, run it with a TypeScript runner in Node.js:

```bash
PROXY_URL=http://127.0.0.1:8080 npx tsx proxy-connect.ts
```

Do not set the SDK's `proxy` option alongside this agent. Also check inherited
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY` and their lowercase variants: Axios may
apply them independently of the custom agent. Run this example in a process
without those variables, or configure `NO_PROXY` for the API hostname to prevent
Axios from selecting an environment proxy. The explicitly configured
`HttpsProxyAgent` still uses `PROXY_URL`; `NO_PROXY` does not make this example a
direct connection. In local tests with Axios 1.7.4, an inherited `HTTPS_PROXY`
prevented the custom agent example from establishing the intended tunnel.

For a proxy that requires authentication, use
`http://username:password@proxy-host:port` as `PROXY_URL`. Percent-encode the
username and password separately if they contain reserved URL characters. Keep
credentials out of source control and logs.

A successful connectivity response is `{}`. A `407` response indicates that the
proxy requires authentication; a certificate error should be resolved by trusting
the appropriate CA, not by disabling TLS verification. This example targets
Node.js; Bun's proxy behavior has not been validated here.
