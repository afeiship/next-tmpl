var global = typeof window !== 'undefined' ? window : this || Function('return this')();
var nx = global.nx || require('@jswork/next');
var FORMAT_RE = /(?:{)([\w.]+?)(?:})/gm;
var EMPTY_STR = '';

nx.tmpl = function (inString, inArgs) {
  if (!inArgs) return inString;
  var result = inString || EMPTY_STR;
  var replaceFn = function (mat, match) {
    return nx.get(inArgs, match) || mat;
  };
  return result.replace(FORMAT_RE, replaceFn);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.tmpl;
}
