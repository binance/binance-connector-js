# Binance JavaScript Connectors

[![Build Status](https://img.shields.io/github/actions/workflow/status/binance/binance-connector-js/ci.yaml)](https://github.com/binance/binance-connector-js/actions)
[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
![Node.js Version](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![Known Vulnerabilities](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![Docs](https://img.shields.io/badge/docs-online-blue?style=flat-square)](https://binance.github.io/binance-connector-js/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Collection of auto-generated TypeScript connectors for Binance APIs.

## Migration Guide

If you're upgrading from the previous unified connector, refer to our [Migration Guide](./MIGRATION.md) for detailed steps on transitioning to the new modular structure. The legacy unified connectors (`@binance/connector` and `@binance/connector-typescript`) will still be available for a limited time. You can find the code for the unified connector in the `legacy` branch.

## Prerequisites

Before using the connectors, ensure you have:

- **Node.js** (version 22.12.0 or later)
- **npm** (comes with Node.js)
- **nvm** (Node Version Manager)

Using nvm:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

## Available Connectors

- [@binance/algo](./clients/algo/) - Algo Trading connector
- [@binance/c2c](./clients/c2c/) - C2C connector
- [@binance/convert](./clients/convert/) - Convert connector
- [@binance/copy-trading](./clients/copy-trading/) - Copy Trading connector
- [@binance/crypto-loan](./clients/crypto-loan/) - Crypto Loan connector
- [@binance/derivatives-trading-coin-futures](./clients/derivatives-trading-coin-futures/) - Derivatives Trading (COIN-M Futures) connector
- [@binance/derivatives-trading-options](./clients/derivatives-trading-options/) - Derivatives Trading (Options) connector
- [@binance/derivatives-trading-portfolio-margin](./clients/derivatives-trading-portfolio-margin/) - Derivatives Trading (Portfolio Margin) connector
- [@binance/derivatives-trading-portfolio-margin-pro](./clients/derivatives-trading-portfolio-margin-pro/) - Derivatives Trading (Portfolio Margin Pro) connector
- [@binance/derivatives-trading-usds-futures](./clients/derivatives-trading-usds-futures/) - Derivatives Trading (USDS-M Futures) connector
- [@binance/dual-investment](./clients/dual-investment/) - Dual Investment connector
- [@binance/fiat](./clients/fiat/) - Fiat connector
- [@binance/gift-card](./clients/gift-card/) - Gift Card connector
- [@binance/margin-trading](./clients/margin-trading/) - Margin Trading connector
- [@binance/mining](./clients/mining/) - Mining connector
- [@binance/nft](./clients/nft/) - NFT connector
- [@binance/pay](./clients/pay/) - Pay connector
- [@binance/rebate](./clients/rebate/) - Rebate connector
- [@binance/simple-earn](./clients/simple-earn/) - Simple Earn connector
- [@binance/spot](./clients/spot/) - Spot Trading connector
- [@binance/staking](./clients/staking/) - Staking connector
- [@binance/sub-account](./clients/sub-account/) - Sub Account connector
- [@binance/vip-loan](./clients/vip-loan/) - VIP Loan connector
- [@binance/wallet](./clients/wallet/) - Wallet connector

## Documentation

For detailed information, refer to the [Binance API Documentation](https://developers.binance.com).

## Installation

Each connector is published as a separate npm package. For example:

```bash
npm install @binance/spot
```

## Contributing

Since this repository contains auto-generated code using OpenAPI Generator, we encourage you to:

1. Open a GitHub issue to discuss your ideas or report bugs
2. Allow maintainers to implement necessary changes through the code generation process

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.
