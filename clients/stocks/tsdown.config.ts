import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    platform: 'node',
    target: 'node22',
    hash: false,
    fixedExtension: false,
});
