// @ts-check
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'simple-import-sort'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
  },

  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['PascalCase', 'camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['variable', 'property'],
        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['default', 'variable', 'property'],
        format: null,
        leadingUnderscore: 'allow',
        filter: '^[_]*$'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: ['enumMember', 'enum'],
        format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
      },
      {
        selector: 'property',
        format: null,
        filter: '^__html$',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^[_]*$' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['interface', 'type'],
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: ['return'] },
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      {
        blankLine: 'always',
        prev: 'import',
        next: [
          'interface',
          'type',
          'block',
          'block-like',
          'case',
          'class',
          'const',
          'export',
          'expression',
          'for',
          'function',
          'if',
          'let',
          'return',
          'throw',
          'try',
          'while',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'import',
          'interface',
          'type',
          'block',
          'block-like',
          'case',
          'class',
          'const',
          'expression',
          'for',
          'function',
          'if',
          'let',
          'return',
          'throw',
          'try',
          'while',
        ],
        next: 'export',
      },
    ],
    curly: ['error', 'multi-line'],
    'import/order': 'off',
    'no-duplicate-imports': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: ['ui'],
        patterns: [
          {
            group: ['@sh/app', '@sh/app/*'],
            message: 'Importing from `app` package is disallowed for architecture reasons',
          },
        ],
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: 'ui',
            from: 'app',
            message: 'Importing from `app` package is disallowed for architecture reasons',
          },
        ],
      },
    ],
    'sort-imports': 'off',
    'max-lines': [
      'error',
      {
        max: 300,
        skipComments: true,
      },
    ],
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^next', '^[^.]'],
          ['^@shakuroinc/', '^@sh/'],
          ['^@/', '^~/', '^#/', '^libs$', '^libs/', '^features/'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
  },
};
