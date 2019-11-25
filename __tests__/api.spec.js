const nx = require('@feizheng/next-js-core2');
require('../src/next-tmpl');

describe('tmpl -> array', function() {
  test('Use {0}/{1} array template:', function() {
    const template = 'I am {0}, I can live {1} year';
    const arr = ['afei', 100];

    expect(nx.tmpl(template, arr)).toBe('I am afei, I can live 100 year');
  });
});

describe('tmpl -> object', function() {
  test('User object as template:', function() {
    const template = 'I am {name}, I can live {age} year';
    const obj = {
      name: 'zhengfei',
      age: 101
    };
    expect(nx.tmpl(template, obj)).toBe('I am zhengfei, I can live 101 year');
  });
});
