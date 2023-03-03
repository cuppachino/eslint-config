# @cuppachino/eslint-config

![Discord](https://img.shields.io/discord/1080840305441525766?color=5865f2&label=&logo=discord&logoColor=ffffff)
[![Release](https://github.com/cuppachino/eslint-config/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/cuppachino/eslint-config/actions/workflows/release.yml)
![License](https://img.shields.io/github/license/cuppachino/eslint-config?color=ffca4a)
![npm (scoped)](https://img.shields.io/npm/v/@cuppachino/eslint-config?color=%23fb3e44)
![npm](https://img.shields.io/npm/dw/@cuppachino/eslint-config)

- [x] **Extendable**... fully customized [ESLint](https://eslint.org/) configuration

- [x] **Optimized**... for explosive [**TypeScript**](https://www.typescriptlang.org/) development

- [x] **Consistent**... comment doc formatting with [jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) and [tsdoc](https://tsdoc.org/)

- [x] **Seamless**... integration with [Prettier](https://prettier.io/)

- [x] **Granular**... keep Prettier and ESLint separate without conflict

## Using this package in your project

### Install

```ps
pnpm add -D eslint @cuppachino/eslint-config
```

Create a `tsconfig.eslint.json` at the root of your project and extend your own `tsconfig.json`:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": [
    "pkg/",
    // "src/",
    //  "./vite.config.ts",
    // "./apps/*/tsconfig.json"
  ],
}
```

### Configure

Create a `.eslintrc.cjs` file in the root of your project and extend the config:

> or `.eslintrc.js` or `.eslintrc.json`

```js
module.exports = {
  
  /* 1️⃣ focus eslint to not look outside of your project */
  root: true, 

  /* 2️⃣ extend your config with the package */
  extends: ['@cuppachino/eslint-config'], 

  /* 3️⃣ point your own tsconfig(s) */
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json', // REQUIRED
      './apps/*/tsconfig.json',
      './packages/*/tsconfig.json'
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [
          './tsconfig.eslint.json', // REQUIRED
          './apps/*/tsconfig.json',
          './packages/*/tsconfig.json'
        ]
      }
    }
  },

  /* ⭐ Override rules here */
  rules: {
    // ...
  }
}
```

If you extend additional configs after `@cuppachino/eslint-config`, you may introduce conflicts between Prettier and ESLint. You can work around this by always including the config last ***OR*** by manually adding the `eslint-config-prettier` package to your project and adding `"prettier"` to the end of your `extends` array.

```js
// ❌ NOT OK
extends: [
  '@cuppachino/eslint-config',
  'plugin:react/recommended',
]
```

```js
// ✅ OK
extends: [
  'plugin:react/recommended',
  '@cuppachino/eslint-config',
]
```

```js
// ✅ OK
extends: [
  '@cuppachino/eslint-config',
  'plugin:react/recommended',
  'prettier'
]
```

## IDE Integration

### TypeScript ![npm dev dependency version (scoped)](https://img.shields.io/npm/dependency-version/@cuppachino/eslint-config/dev/typescript?style=flat-square&label)

Make sure to use your workspace's version of TypeScript and your `tsconfig.json` for type checking!

![typescript-workspace-version](https://github.com/cuppachino/eslint-config/blob/faaed332bd057b3f1b22eb875e2d10e66d4c1cdc/typescript-use-workspace-version.png)

### ESLint ![npm (prod) dependency version (scoped)](https://img.shields.io/npm/dependency-version/@cuppachino/eslint-config/eslint?style=flat-square&label)

To highlight code **quality** errors in vscode, you can use [dbaeumer.vscode-eslint](https://github.com/Microsoft/vscode-eslint).

Add the following scripts to your package.json for usage in your pipeline:

```json
{
  "scripts": {
    "lint:check": "eslint",
    "lint": "eslint --fix"
  }
}
```

### Prettier ![npm (peer) dependency version (scoped)](https://img.shields.io/npm/dependency-version/@cuppachino/eslint-config/dev/prettier?style=flat-square&label)

Follow the setup directions for [rvest.vs-code-prettier-eslint](https://github.com/idahogurl/vs-code-prettier-eslint). This will allow you to fix linting errors with eslint and format your code with prettier, on save, in one step.

These scripts can be used to format your entire project:

```json
{
  "scripts": {
    "format": "prettier --check .",
    "format:fix": "prettier --write ."
  }
}
```

## Development Cycle

> If you have the previously mentioned extensions installed, you should be able to use them during development.

### Install Dependencies

This package is managed with [PNPM](https://pnpm.js.org/). To get started, run the following commands:

```ps
cd YOUR-eslint-config
pnpm install
```

### Change, Commit, Merge & Release & Publish

1. After you make changes and save, create a new changeset and follow the cli prompts:

    ```ps
    cd YOUR-eslint-config
    pnpm new
    ```

2. Push your changes to a new branch and open a PR.

3. Once your PR is merged, changesets will automatically create a new
release and publish it to NPM.
