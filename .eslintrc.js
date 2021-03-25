const config = {
    env: {
      browser: true,
    },
    extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:@typescript-eslint/recommended'
	],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/indent': [2, 2],
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-sort-props': [1, {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      }],
      'react/jsx-filename-extension': [2, {
        extensions: ['.js', '.ts', '.tsx']
      }],
      'react/jsx-one-expression-per-line': 0,
      'indent': 0,
      'lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true
      }],
      'padded-blocks': ['error', {
        classes: 'always'
      }],
      'no-unused-vars': ['error', {
        args: 'after-used',
        ignoreRestSiblings: false,
        vars: 'all'
      }],
      'implicit-arrow-linebreak': 'off',
      'import/extensions': ['error', 'ignorePackages', {
        json: 'never',
        ts: 'never',
        tsx: 'never',
      }],
      'import/prefer-default-export': 'off',
      'import/no-unresolved': [2, {
        ignore: [
          '^@assets',
          '^@components',
          '^@routes',
          '^@utils'
        ]
      }],
      'linebreak-style': ['error', 'windows'],
      'max-len': ['error', {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      }],
      'no-console': 'error',
      'no-debugger': 'error',
      'no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      }],
      'sort-keys': ['error', 'asc', {
        caseSensitive: true,
        natural: false,
      }],
      'object-curly-newline': ['error', {
        ObjectPattern: {
          multiline: true
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        },
      }],
      quotes: ['error', 'single'],
    },
    settings: {
      'import/extensions': ['.ts', '.tsx', '.json'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.tsx'],
        },
      },
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
};

module.exports = config;
