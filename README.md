# simple-assert-ok

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/simple-assert-ok/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/simple-assert-ok.svg?style=flat-square)](https://www.npmjs.com/package/simple-assert-ok) ![Travis (.com) master](https://img.shields.io/travis/com/a-tarasyuk/simple-assert-ok/master.svg?style=flat-square) [![npm downloads](https://img.shields.io/npm/dm/simple-assert-ok.svg?style=flat-square)](https://www.npmjs.com/package/simple-assert-ok) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/simple-assert-ok.svg?style=flat-square) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/simple-assert-ok.svg?style=flat-square)

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

* **@param** _{any}_ expression
* **@param** _{string}_ message

```typescript
import assert from 'simple-assert-ok';
assert(true, 'is valid');
assert(false, 'is invalid');
```

## License and Copyright

This software is released under the terms of the [MIT license](https://github.com/a-tarasyuk/create-rx-app/blob/master/LICENSE.md).
