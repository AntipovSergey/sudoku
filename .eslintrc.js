module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
  },
};
