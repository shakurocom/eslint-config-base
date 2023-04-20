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
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
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
        filter: '^_$',
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
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
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
    'import/order': 0,
    'no-duplicate-imports': 2,
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
    'import/no-unresolved': 0,
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
    'sort-imports': 0,
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
    'simple-import-sort/exports': 1,
    quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
  },
};
