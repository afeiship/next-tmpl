# next-tmpl
> A simple template engine based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-tmpl
```

## usage
```js
import '@jswork/next-tmpl';

nx.tmpl('I am {0}, I can live {1} year', ['afei', 100]);
nx.tmpl('I am {name}, I can live {age} year', { name:'afei', age:100});

// I am afei, I can live 100 year
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-tmpl/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-tmpl
[version-url]: https://npmjs.org/package/@jswork/next-tmpl

[license-image]: https://img.shields.io/npm/l/@jswork/next-tmpl
[license-url]: https://github.com/afeiship/next-tmpl/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-tmpl
[size-url]: https://github.com/afeiship/next-tmpl/blob/master/dist/next-tmpl.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-tmpl
[download-url]: https://www.npmjs.com/package/@jswork/next-tmpl