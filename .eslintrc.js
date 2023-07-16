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
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
  },
};
