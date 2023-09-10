# simple-assert-ok

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/simple-assert-ok/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/simple-assert-ok.svg?style=flat-square)](https://www.npmjs.com/package/simple-assert-ok) ![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/a-tarasyuk/simple-assert-ok/main.yml?style=flat-square)

> A lightweight strongly-typed `assert.ok` helper which aims to avoid using entire `assert` when need to use only one `ok` method., `assert` uses CJS module system and in many cases cannot be optimized by _bundlers_, as a result, a bundle includes entire `assert`.

## Installation

```shell
npm install simple-assert-ok --save
```

or

```shell
yarn add simple-assert-ok
```

## Usage

### assert(expression[, message])

- **@param** _{any}_ expression
- **@param** _{string}_ message

```typescript
import assert from "simple-assert-ok";
assert(true, "is valid");
assert(false, "is invalid");
```

## License and Copyright

This software is released under the terms of the [MIT license](https://github.com/a-tarasyuk/simple-assert-ok/blob/master/LICENSE).
