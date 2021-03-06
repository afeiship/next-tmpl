(function () {
  require('../src');

  describe('tmpl -> args is null', function () {
    test('Args is null will return the same string', function () {
      const template = 'I am afei, I can live 100 year';
      expect(nx.tmpl(template)).toBe('I am afei, I can live 100 year');
    });
  });

  describe('tmpl -> array', function () {
    test('Use {0}/{1} array template:', function () {
      const template = 'I am {0}, I can live {1} year';
      const arr = ['afei', 100];

      expect(nx.tmpl(template, arr)).toBe('I am afei, I can live 100 year');
    });
  });

  describe('tmpl -> object', function () {
    test('When no key exist will remain the old key', () => {
      const template = 'I am {name}, I can live {age} year, i like {hobby}';
      const obj = { name: 'aric.zheng' };
      expect(nx.tmpl(template, obj)).toBe('I am aric.zheng, I can live {age} year, i like {hobby}');
    });

    test('User object as template:', function () {
      const template = 'I am {name}, I can live {age} year';
      const obj = {
        name: 'zhengfei',
        age: 101
      };
      expect(nx.tmpl(template, obj)).toBe('I am zhengfei, I can live 101 year');
    });

    test('key with deep value', function () {
      const template = 'posts?keywords={keywords}&page={page}&size={size}&deep_param={deep.a.b}';
      const obj = {
        page: 1,
        size: 10,
        deep: {
          a: {
            b: 'dep_value'
          }
        }
      };
      const res = nx.tmpl(template, obj);
      expect(res).toBe('posts?keywords={keywords}&page=1&size=10&deep_param=dep_value');
    });
  });
})();
