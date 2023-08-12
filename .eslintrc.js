module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': [0],
    'max-len': ['error', {
      ignoreComments: true,
      code: 120,
    }],
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-undef': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/jsx-no-useless-fragment': 'warn',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'array-callback-return': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test}.{ts,tsx}'],
      rules: {
        'max-len': 'off',
      },
    },
    {
      files: ['**/src/**/*Slice.ts'],
      rules: {
        'no-param-reassign': ['error', {
          props: false,
        }],
      },
    },
    {
      files: ['reducerManager.ts'],
      rules: { 'no-param-reassign': 'off' },
    },
  ],
};
