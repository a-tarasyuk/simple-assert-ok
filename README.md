# simple-assert-ok

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/simple-assert-ok/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/simple-assert-ok.svg?style=flat-square)](https://www.npmjs.com/package/simple-assert-ok) [![Build Status](https://img.shields.io/travis/a-tarasyuk/simple-assert-ok/master.svg?style=flat-square)](https://travis-ci.org/a-tarasyuk/simple-assert-ok) [![David](https://img.shields.io/david/dev/a-tarasyuk/simple-assert-ok.svg?style=flat-square)](https://github.com/a-tarasyuk/simple-assert-ok) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/simple-assert-ok.svg?style=flat-square) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/simple-assert-ok.svg?style=flat-square)

> A lighweight strongly-typed assert helper. Supports ES Modules and CSJ.

## Installation

```shell
npm install simple-assert-ok --save
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
