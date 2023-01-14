module.exports = {
  plugins: ['stylelint-no-unused-selectors'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-class-pattern': '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$', // snake_case
    'plugin/no-unused-selectors': true,
  },
};
