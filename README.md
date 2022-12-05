# @shakuroinc/eslint-config-base

[Shakuro](https://shakuro.com/) eslint and prettier extensible basic config.

> if you need react support use: [@shakuroinc/eslint-config-react](https://github.com/shakurocom/eslint-config-react)

## Usage

### Install package:

`yarn add -D @shakuroinc/eslint-config-base`

### Install package dependencies:

`npx install-peerdeps @shakuroinc/eslint-config-base -d -Y`

> if you using yarn workspaces `npx install-peerdeps @shakuroinc/eslint-config-base -d -Y --extra-args "--ignore-workspace-root-check"`

### Configure `eslint`:

```js
// .eslintrc.js
module.exports = {
  extends: ['@shakuroinc/eslint-config-base'],
  // extend config if needed
};
```

### Configure prettier:

```js
// .prettierrc.js
module.exports = { ...require('@shakuroinc/eslint-config-base/prettier.config') };
```
