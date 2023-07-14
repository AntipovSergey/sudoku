module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'operator-assignment': ['error', 'never'],
    'prefer-template': 'off',
    quotes: 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
