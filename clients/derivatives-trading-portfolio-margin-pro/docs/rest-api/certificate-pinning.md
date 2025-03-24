# Certificate Pinning

```typescript
import fs from 'fs';
import https from 'https';
import crypto from 'crypto';
import { DerivativesTradingPortfolioMarginPro } from '@binance/derivatives-trading-portfolio-margin-pro';

// Expected pinned public key (SPKI SHA-256 hash)
// You can extract it from the certificate using openssl:
// openssl s_client -connect your-api.com:443 </dev/null 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64
const PINNED_PUBLIC_KEY = 'YOUR-PINNED-PUBLIC-KEY';

// Load the trusted CA certificate (optional but recommended)
const trustedCert = fs.readFileSync('/path/to/certificate.pem');

const httpsAgent = new https.Agent({
    ca: trustedCert, // Ensures only the specific CA is trusted
    checkServerIdentity: (host, cert) => {
        // Verify Subject Alternative Name (SAN)
        if (!cert.subjectaltname.includes('DNS:expected-cn.com')) {
            throw new Error(
                `Certificate SAN mismatch: expected "expected-cn.com", got ${cert.subjectaltname}`
            );
        }
        const publicKey = cert.pubkey;
        const publicKeyHash = crypto.createHash('sha256').update(publicKey).digest('base64');
        if (publicKeyHash !== PINNED_PUBLIC_KEY) {
            throw new Error(
                `Certificate pinning validation failed: expected ${PINNED_PUBLIC_KEY}, got ${publicKeyHash}`
            );
        }
    },
});

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    httpsAgent,
};
const client = new DerivativesTradingPortfolioMarginPro({ configurationRestAPI });

client.restAPI
    .getPortfolioMarginProAccountInfo()
    .then((res) => res.data())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
```
