# Migration Guide: Binance Rebate Connector Modularization

With the transition to a modularized structure, the Binance Connector has been split into separate NPM libraries, each focusing on a distinct product (e.g., Rebate, Futures, etc.). This guide explains how to migrate from the monolithic `@binance/connector` (or `@binance/connector-typescript`) package to the new `@binance/rebate` library.

---

## Key Changes

1. **Package Name**:  
   The modularised Rebate Connector has been moved to a new package:

    **Old:** `@binance/connector`  
     **New:** `@binance/rebate`

2. **Installation**:  
   Uninstall the old package and install the new one:

    ```bash
    npm uninstall @binance/connector
    npm install @binance/rebate
    ```

3. **Imports**:  
   Update your import paths.

    **Old:**

    ```typescript
    import { Spot } from '@binance/connector';
    ```

    **New:**

    ```typescript
    import { Rebate } from '@binance/rebate';
    ```

4. **Configuration and Client Initialization**:  
   The new structure keeps the existing configuration options but modularizes clients into `RebateRestAPI`.

    **Old:**

    ```typescript
    const client = new Spot({ apiKey: 'your-key', apiSecret: 'your-secret' });
    client.<method_name>().then(console.log);
    ```

    **New:**

    ```typescript
    import { Rebate, RebateRestAPI } from '@binance/rebate';


    const configurationRestAPI = {
        apiKey: 'your-key',
        apiSecret: 'your-secret',
    };
    const client = new Rebate({ configurationRestAPI });

    client.restAPI.<method_name>().then(console.log);
    ```

5. **Examples and Documentation**:  
   Updated examples can be found in the new repository folders:
    - REST API: `examples/rest-api/`

---

## Migration Steps

### 1. Uninstall the Old Package

Remove the old package from your project:

```bash
npm uninstall @binance/connector
```

### 2. Install the New Package

Install the new Rebate-specific package:

```bash
npm install @binance/rebate
```

### 3. Update Import Paths

Replace all occurrences of:

```typescript
import { Spot } from '@binance/connector';
```

With:

```typescript
import { Rebate } from '@binance/rebate';
```

### 4. Update Client Initialization

Adjust your code to use the modularized structure. For example:

**Old:**

```typescript
const client = new Spot({ apiKey: 'your-key', apiSecret: 'your-secret' });
```

**New:**

```typescript
import { Rebate, RebateRestAPI } from '@binance/rebate';

const configurationRestAPI = {
    apiKey: 'your-key',
    apiSecret: 'your-secret',
};
const client = new Rebate({ configurationRestAPI });
```

### 5. Test and Verify

Run your application to ensure everything works as expected. Refer to the new documentation for any advanced features or configuration options.

---

## Additional Notes

- **Future Modular Packages**: Similar packages for other products (e.g., Wallet, Staking) will follow this pattern.

For more details, refer to the updated [README](../README.md) and [Examples](../examples/).
