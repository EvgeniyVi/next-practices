module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },

  plugins: ['react'],
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],

  root: true,
  env: {
    browser: true,
    es2021: true,
  },

  rules: {
    'react-hooks/exhaustive-deps': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: 'off',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 1,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'react/display-name': 'off',
    'no-param-reassign': 'warn',
    'no-underscore-dangle': 'off',
    'no-shadow': 'warn',
    'quote-props': ['warn', 'consistent-as-needed'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-direct-mutation-state': 'error',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
}
