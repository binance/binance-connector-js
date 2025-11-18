import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['index.ts'],
    format: ['cjs'],
    dts: { emitDtsOnly: true },
    clean: true,
});
