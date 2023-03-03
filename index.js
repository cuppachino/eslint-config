module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsdoc/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2018',
    lib: ['es2018'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
      './template/*/tsconfig.json'
    ],
    projectFolderIgnoreList: [
      '**/node_modules',
      '**/dist',
      '**/build',
      '**/.cache',
      '**/.turbo'
    ]
  },
  plugins: ['@typescript-eslint', 'jsdoc', 'eslint-plugin-tsdoc', 'import'],
  rules: {
    /**
     * ⭐ Preferences
     * -----------------------------------------------------------------------------------
     * You may change these rules to your liking, but I recommend keeping them as is.
     * This configuration is designed for nodejs environments with ESM module support.
     *
     * -----------------------------------------------------------------------------------
     */
    'template-curly-spacing': ['warn', 'always'],
    /**
     * 🗨️ Comment documentation rules
     */
    'tsdoc/syntax': 'warn',
    /**
     * todo: 🚧 Enable `jsdoc/check-examples` when supported by ESLint 8 🚧
     *
     * @see [issue](https://github.com/eslint/eslint/issues/14745)
     */
    // 'jsdoc/check-examples': ['error'],
    'jsdoc/check-indentation': ['warn'],
    'jsdoc/check-param-names': ['off'],
    'jsdoc/check-tag-names': ['off'],
    'jsdoc/no-multi-asterisks': [
      'error',
      {
        allowWhitespace: false,
        preventAtEnd: true,
        preventAtMiddleLines: true
      }
    ],
    'jsdoc/require-asterisk-prefix': ['error', 'always'],
    'jsdoc/require-jsdoc': ['off'],
    'jsdoc/require-param-description': ['off'],
    'jsdoc/require-param-type': ['off'],
    'jsdoc/require-param': ['off'],
    'jsdoc/require-returns-type': ['off'],
    'jsdoc/require-returns': ['off'],
    'jsdoc/sort-tags': ['warn'],
    'jsdoc/check-line-alignment': ['error', 'always'],
    /**
     * 🌀 TypeScript Rules
     * I would rather handle some errors during the build process.
     * Typecheck with TSC before publishing and keep your IDE clean.
     */
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    /**
     * ✈️ Import Rules
     * It's critical exports/imports are consistent and predictable.
     * These settings help minimize compatibility issues across environments.
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports'
      }
    ],
    /**
     * ! Disable eslint's `sort-imports` rule.
     * ? because the "memberSyntaxSortOrder" config is broken with es-style imports.
     * - `eslint-plugin-import`
     * - `eslint-import-resolver-typescript`
     */
    'sort-imports': ['off'],
    'import/order': [
      'error',
      {
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
          ['object', 'type']
        ],
        'newlines-between': 'never',
        'pathGroups': [
          {
            pattern: 'node:',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'vitest',
            group: 'builtin',
            position: 'after'
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['builtin']
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.js',
        '.jsx',
        '.mjs',
        '.cjs',
        '.ts',
        '.mts',
        '.cts',
        '.tsx',
        '.json',
        '.d.ts'
      ]
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['packages/*/tsconfig.json', 'template/*/tsconfig.json']
      }
    },
    'jsdoc': {
      maxLines: 2,
      minLines: 1
    }
  },
  ignorePatterns: [
    '.eslintrc.*',
    '.turbo/*',
    'build/*',
    'coverage/*',
    'dist/*',
    'node_modules/*'
  ]
}
