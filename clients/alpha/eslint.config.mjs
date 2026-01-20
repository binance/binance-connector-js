import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
            },
        },
        rules: {
            'no-irregular-whitespace': ['error', { skipComments: true }],
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                },
            ],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: ['error', 4],
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'commonjs',
        },
    },
    {
        ignores: ['node_modules/', 'dist/'],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
