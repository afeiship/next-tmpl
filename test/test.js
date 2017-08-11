var assert = require('assert');
var tmpl = require('../src/next-tmpl');

describe('tmpl -> array', function() {
  it('Use {0}/{1} array template:', function() {
    const template = 'I am {0}, I can live {1} year';
    const arr = [ 'afei',100 ];

    assert.equal(
      tmpl( template, arr ),
      'I am afei, I can live 100 year'
    );
  });
});

describe('tmpl -> object', function() {
  it('User object as template:', function() {
    const template = 'I am {name}, I can live {age} year';
    const obj = {
      name:'zhengfei',
      age: 101
    };

    assert.equal(
      tmpl( template, obj ),
      'I am zhengfei, I can live 101 year'
    );
  });
});
