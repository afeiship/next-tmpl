(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FORMAT_RE = /(?:{)([\w.]+?)(?:})/gm;
  var EMPTY_STR = ''

  nx.tmpl = function (inString, inArgs) {
    if (!inArgs) return inString;
    var result = inString || EMPTY_STR;
    var replaceFn = function (_, match) {
      return nx.get(inArgs, match) || EMPTY_STR;
    };
    return result.replace(FORMAT_RE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tmpl;
  }
})();
