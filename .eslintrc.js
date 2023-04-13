module.exports = {
  root: true,
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },
  parserOptions: {
    sourceType: 'module',
  },
};
