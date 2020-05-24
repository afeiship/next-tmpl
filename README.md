# next-tmpl
> A simple tmpl based on next.

## installation
```bash
npm install -S @feizheng/next-tmpl
```

## usage
```js
import '@feizheng/next-tmpl';

nx.tmpl('I am {0}, I can live {1} year', ['afei', 100]);
nx.tmpl('I am {name}, I can live {age} year', { name:'afei', age:100});

// I am afei, I can live 100 year
```
