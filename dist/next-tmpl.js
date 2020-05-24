/*!
 * name: @feizheng/next-tmpl
 * description: A simple tmpl based on next.
 * homepage: https://github.com/afeiship/next-tmpl
 * version: 1.0.3
 * date: 2020-05-24T01:57:31.986Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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

//# sourceMappingURL=next-tmpl.js.map
