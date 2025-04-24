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

## Give it a try and reach us

Explore our expertise in <a href="https://shakuro.com/services/native-mobile-development/?utm_source=github&utm_medium=repository&utm_campaign=eslint-config">Native Mobile Development</a> and <a href="https://shakuro.com/services/ios-dev/?utm_source=github&utm_medium=repository&utm_campaign=eslint-config">iOS Development</a>.</p>

If you need professional assistance with your mobile or web project, feel free to <a href="https://shakuro.com/get-in-touch/?utm_source=github&utm_medium=repository&utm_campaign=eslint-config">contact our team</a>
