module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-console': 0,
  },
};
