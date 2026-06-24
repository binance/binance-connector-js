# Quick Start Guide

This guide will help you get started with the binance-connector-js repository with integrated KuCoin SDK support.

## Prerequisites

- **Node.js**: >= 14.0.0
- **npm**: >= 6.0.0
- **TypeScript**: 5.7.2+ (installed as dev dependency)

## Installation

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/Iwagd-DHA/binance-connector-js.git
cd binance-connector-js

# Install all dependencies (Binance connectors + KuCoin SDK)
npm install
```

This will install:
- All Binance modular connectors (24+ packages)
- KuCoin Universal SDK v1.3.1
- Development tools (TypeScript, ESLint, Prettier, etc.)

### 2. Set Environment Variables

Create a `.env` file in the project root:

```bash
# Binance API Credentials
export BINANCE_API_KEY=your_binance_api_key
export BINANCE_API_SECRET=your_binance_api_secret

# KuCoin API Credentials
export KUCOIN_API_KEY=your_kucoin_api_key
export KUCOIN_API_SECRET=your_kucoin_api_secret
export KUCOIN_API_PASSPHRASE=your_kucoin_passphrase
```

Or set them in your shell:

```bash
# Binance
export BINANCE_API_KEY=your_binance_api_key
export BINANCE_API_SECRET=your_binance_api_secret

# KuCoin
export KUCOIN_API_KEY=your_kucoin_api_key
export KUCOIN_API_SECRET=your_kucoin_api_secret
export KUCOIN_API_PASSPHRASE=your_kucoin_passphrase
```

## Running Examples

### 1. KuCoin Spot Market Data

Fetch market information from KuCoin:

```bash
npx ts-node examples/kucoin-spot-market.ts
```

**Output:**
```
=== KuCoin Spot Market API Examples ===

1. Fetching Market Ticker...
Market Ticker for BTC-USDT: { price: '50000.00', ... }

2. Fetching Order Book...
Order Book for BTC-USDT: {
  time: 1624000000000,
  sequence: 12345,
  bids: [ [ '49999.00', '1.5' ], ... ],
  asks: [ [ '50001.00', '2.0' ], ... ]
}

3. Fetching Klines (1 minute)...
Klines for BTC-USDT (1min): [ ... ]
```

### 2. Dual-Exchange Arbitrage Detection

Compare prices between Binance and KuCoin to find arbitrage opportunities:

```bash
npx ts-node examples/dual-exchange-arbitrage.ts
```

**Output:**
```
=== Dual-Exchange Arbitrage Detector ===
Comparing prices between Binance and KuCoin

╔════════════════════════════════════════════════════════════════╗
║               DUAL-EXCHANGE PRICE COMPARISON RESULTS             ║
╚════════════════════════════════════════════════════════════════╝

📊 BTCUSDT
   Binance Price:  $50000.12345678
   KuCoin Price:   $50050.87654321
   Difference:     $50.75308643 (0.10%)
   ⚡ ARBITRAGE OPPORTUNITY DETECTED!
      → Buy on Binance, Sell on KuCoin

📊 ETHUSDT
   Binance Price:  $3000.50000000
   KuCoin Price:   $2998.75000000
   Difference:     $-1.75000000 (-0.06%)
   ℹ️  No significant arbitrage opportunity

📈 Summary: 1 of 4 pairs show arbitrage opportunities
```

## Development

### Build the Project

```bash
npm run build
```

### Format Code

```bash
npm run format
```

### Lint Code

```bash
npm run lint
```

### Run Tests

```bash
npm test
```

## Project Structure

```
binance-connector-js/
├── clients/               # 24+ Binance connector packages
│   ├── spot/            # Spot trading
│   ├── derivatives-trading-coin-futures/
│   ├── wallet/
│   └── ...
├── common/              # Shared utilities and types
├── types/               # TypeScript type definitions
├── examples/            # Usage examples
│   ├── kucoin-spot-market.ts
│   └── dual-exchange-arbitrage.ts
├── package.json         # Root dependencies (includes KuCoin SDK)
└── KUCOIN_INTEGRATION.md    # Integration guide
```

## Usage Examples

### Basic Binance Spot Trade

```typescript
import { Spot } from '@binance/spot';

const client = new Spot({
    configurationRestAPI: {
        apiKey: process.env.BINANCE_API_KEY,
        apiSecret: process.env.BINANCE_API_SECRET,
    },
});

// Get account information
const account = await client.restAPI.getAccount();
console.log('Balances:', account.balances);
```

### Basic KuCoin Spot Trade

```typescript
import {
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
} from 'kucoin-universal-sdk';

const clientOption = new ClientOptionBuilder()
    .setKey(process.env.KUCOIN_API_KEY || '')
    .setSecret(process.env.KUCOIN_API_SECRET || '')
    .setPassphrase(process.env.KUCOIN_API_PASSPHRASE || '')
    .setSpotEndpoint(GlobalApiEndpoint)
    .build();

const client = new DefaultClient(clientOption);
const tradeApi = client.restService().getSpotService().getTradeApi();

// Get active orders
const orders = await tradeApi.getOrders();
console.log('Orders:', orders);
```

## Documentation

- **Binance Connector**: [Binance Connector Repository](https://github.com/binance/binance-connector-js)
- **KuCoin SDK**: [KuCoin Universal SDK](https://github.com/Kucoin/kucoin-universal-sdk)
- **Integration Guide**: [KUCOIN_INTEGRATION.md](./KUCOIN_INTEGRATION.md)
- **License**: [KUCOIN_LICENSE.md](./KUCOIN_LICENSE.md)

## Troubleshooting

### Issue: "Module not found" error

**Solution:** Ensure all dependencies are installed:
```bash
npm install
npm ci  # Clean install
```

### Issue: API authentication failures

**Solution:** Verify your API credentials:
- Check that environment variables are set correctly
- Ensure API keys have appropriate permissions
- For KuCoin, don't forget the `API_PASSPHRASE`

### Issue: TypeScript compilation errors

**Solution:** Install type definitions:
```bash
npm install --save-dev @types/node @types/jest
```

## Performance Tips

1. **Connection Pooling**: Both SDKs support connection pooling for better performance
2. **Batch Requests**: Group multiple API calls using Promise.all()
3. **WebSocket Streams**: Use WebSocket connections for real-time data instead of polling
4. **Rate Limiting**: Respect exchange rate limits to avoid bans

## Support

- **Binance Issues**: [Binance Connector Issues](https://github.com/binance/binance-connector-js/issues)
- **KuCoin Issues**: [KuCoin SDK Issues](https://github.com/Kucoin/kucoin-universal-sdk/issues)
- **Integration Issues**: Create an issue in this repository

## License

- **Binance Connector**: MIT License
- **KuCoin SDK**: MIT License (with Apache 2.0 for OpenAPI Generator)

See [KUCOIN_LICENSE.md](./KUCOIN_LICENSE.md) for full license details.
