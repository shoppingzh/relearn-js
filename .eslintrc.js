module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    '@shoppingzh',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
}
