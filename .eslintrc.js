module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-console': 0,
    'no-shadow': 0,

  },
};
