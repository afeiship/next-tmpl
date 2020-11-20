/*!
 * name: @jswork/next-tmpl
 * description: A simple template engine based on next.
 * homepage: https://github.com/afeiship/next-tmpl
 * version: 1.0.0
 * date: 2020-11-20 10:38:53
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FORMAT_RE = /(?:{)([\w.]+?)(?:})/gm;
  var EMPTY_STR = ''

  nx.tmpl = function (inString, inArgs) {
    if (!inArgs) return inString;
    var result = inString || EMPTY_STR;
    var replaceFn = Array.isArray(inArgs)
      ? function (_, match) {
        return inArgs[match] || EMPTY_STR;
      }
      : function (_, match) {
        return nx.get(inArgs, match) || EMPTY_STR;
      };
    return result.replace(FORMAT_RE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tmpl;
  }
})();
