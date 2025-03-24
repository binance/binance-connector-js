# Migration Guide: Binance C2C Connector Modularization

With the transition to a modularized structure, the Binance Connector has been split into separate NPM libraries, each focusing on a distinct product (e.g., C2C, Futures, etc.). This guide explains how to migrate from the monolithic `@binance/connector` (or `@binance/connector-typescript`) package to the new `@binance/c2c` library.

---

## Key Changes

1. **Package Name**:  
   The modularised C2C Connector has been moved to a new package:

    **Old:** `@binance/connector`  
     **New:** `@binance/c2c`

2. **Installation**:  
   Uninstall the old package and install the new one:

    ```bash
    npm uninstall @binance/connector
    npm install @binance/c2c
    ```

3. **Imports**:  
   Update your import paths.

    **Old:**

    ```typescript
    import { Spot } from '@binance/connector';
    ```

    **New:**

    ```typescript
    import { C2C } from '@binance/c2c';
    ```

4. **Configuration and Client Initialization**:  
   The new structure keeps the existing configuration options but modularizes clients into `C2CRestAPI`.

    **Old:**

    ```typescript
    const client = new Spot({ apiKey: 'your-key', apiSecret: 'your-secret' });
    client.exchangeInformation().then(console.log);
    ```

    **New:**

    ```typescript
    import { C2C, C2CRestAPI } from '@binance/c2c';

    const configurationRestAPI = {
        apiKey: 'your-key',
        apiSecret: 'your-secret',
    };
    const client = new C2C({ configurationRestAPI });

    client.restAPI.exchangeInfo().then(console.log);
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

Install the new C2C-specific package:

```bash
npm install @binance/c2c
```

### 3. Update Import Paths

Replace all occurrences of:

```typescript
import { Spot } from '@binance/connector';
```

With:

```typescript
import { C2C } from '@binance/c2c';
```

### 4. Update Client Initialization

Adjust your code to use the modularized structure. For example:

**Old:**

```typescript
const client = new Spot({ apiKey: 'your-key', apiSecret: 'your-secret' });
```

**New:**

```typescript
import { C2C, C2CRestAPI } from '@binance/c2c';

const configurationRestAPI = {
    apiKey: 'your-key',
    apiSecret: 'your-secret',
};
const client = new C2C({ configurationRestAPI });
```

### 5. Test and Verify

Run your application to ensure everything works as expected. Refer to the new documentation for any advanced features or configuration options.

---

## Additional Notes

- **Future Modular Packages**: Similar packages for other products (e.g., Wallet, Staking) will follow this pattern.

For more details, refer to the updated [README](../README.md) and [Examples](../examples/).
