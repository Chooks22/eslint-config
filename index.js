const { extends: extensions, parserOptions, rules } = require('./.eslintrc.json');

module.exports = {
  env: {
    es6: true,
  },
  extends: extensions,
  parserOptions,
  rules,
};
