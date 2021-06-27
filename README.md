# @chookslint/eslint-config

ESLint config for modern JavaScript projects.

[![npm](https://img.shields.io/npm/dm/@chookslint/eslint-config)](https://npmjs.com/package/@chookslint/eslint-config)
[![npm (scoped)](https://img.shields.io/npm/v/@chookslint/eslint-config)](https://npmjs.com/package/@chookslint/eslint-config)

## Installation

Download the config:

```bash
$ npm i -D @chookslint/eslint-config
```

Then plug it into your existing eslint config:

```json
{
  "extends": [
    "@chookslint"
  ]
}
```

## Notes

* This config extends [`eslint/recommended`](https://eslint.org/docs/rules/), and is intended for use with modern ES6 features (no vars, no hoisting functions, etc.).
* While this config is very opinionated and is intended for use in my projects, please feel free to extend or overwrite any rules that may have been set/unset to suit your project.
  * When overwriting, rules enabled with error level `error` is intended to be enforced by this ruleset.
  * When you find that you need to overwrite/ignore/disable many rules with error level `error`, extending from a different ruleset may be preferred.
* Typescript rules are available via [@chookslint/eslint-config-typescript](https://npmjs.com/package/@chookslint/eslint-config-typescript).
