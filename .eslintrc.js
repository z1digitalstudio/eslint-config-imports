module.exports = {
  extends: ['prettier', './index.js'],
  plugins: ['prettier'],
  root: true,
  rules: {
    'prettier/prettier': 'warn',
  },
};
