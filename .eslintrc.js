module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'arrow-body-style': 0,
    'line-break': 0,
    'prefer-arrow-callback': 0,
    'no-plusplus': 0,
    'max-len': 0,
  },
};
