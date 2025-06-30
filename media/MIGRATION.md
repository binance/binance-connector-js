# **Migration Guide: Transition from Monolithic Binance Connector**

With the move towards modularization, Binance connectors are now split into smaller, product-specific libraries. This guide explains how to migrate from the monolithic `@binance/connector` (or `@binance/connector-typescript`) for Spot and `@binance/futures-connector` for Futures to the new modular connectors.

## **Overview of Changes**

| Feature | Monolithic Connector | Modular Connector |
|---------|----------------------|------------------|
| Package Name | `@binance/connector`, `@binance/connector-typescript`, or `@binance/futures-connector` | `@binance/<product>` |
| API Coverage | All Binance APIs | Individual APIs (Spot, Futures, Wallet, Algo Trading, Mining etc.) |
| Imports | Single package import | Separate package per product |
| Code Structure | One large client | Smaller, focused clients |

## **Migration Steps**

### **Step 1: Uninstall the Monolithic Connector**

If you were using the old connector, remove it from your project:

```bash
npm uninstall @binance/connector @binance/connector-typescript @binance/futures-connector
```

### **Step 2: Install the New Modular Connectors**

Install the required connector(s):

For Spot (Spot package):

```bash
npm install @binance/spot
```

For Futures (COIN-M Futures package):

```bash
npm install @binance/derivatives-trading-coin-futures
```

### **Step 3: Update Imports**

Update your import paths:

**Old (Spot):**

```typescript
import { Spot } from '@binance/connector';
```

**New (Spot):**

```typescript
import { Spot } from '@binance/spot';
```

**Old (CMFutures):**

```typescript
import { CMFutures } from '@binance/futures-connector';
```

**New (COIN-M Futures):**

```typescript
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';
```

### **Step 4: Update Client Initialization**

The new structure introduces a more modular approach to client initialization.

**Old (Spot - Monolithic Connector):**

```typescript
const client = new Spot(apiKey, apiSecret);
client.account().then(console.log);
```

**New (Spot - Modular Connector):**

```typescript
import { Spot } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-key',
    apiSecret: 'your-secret',
};
const client = new Spot({ configurationRestAPI });

client.restAPI.getAccount().then(console.log);
```

**Old (Futures - Monolithic Connector):**

```typescript
const client = new CMFutures(apiKey, apiSecret);
client.getAccountInformation().then(console.log);
```

**New (Futures - Modular Connector):**

```typescript
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';

const configurationRestAPI = {
    apiKey: 'your-key',
    apiSecret: 'your-secret',
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

client.restAPI.accountInformation().then(console.log);
```

### **Step 5: Check for API Differences**

Some function names or response structures may have changed. Refer to the modular connector's documentation for details.

## **Backward Compatibility**

- If a modular connector is **not yet available** for your use case, continue using the monolithic connector (`@binance/connector`, `@binance/connector-typescript`, or `@binance/futures-connector`).
- The monolithic connector will remain available, but it is **recommended** to migrate when modular versions are released.

---

## **FAQs**

### **What if my product does not have a modular connector yet?**

You can continue using the monolithic connector until the modular version is released.

### **Will the monolithic connector still receive updates?**

Critical bug fixes will be provided, but feature updates will focus on the modular connectors.

### **Where can I find more examples?**

Check the modular connector's documentation for detailed examples.
