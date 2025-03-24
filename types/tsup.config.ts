import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.ts'],
    format: ['cjs'],
    dts: { only: true },
    clean: true,
});
