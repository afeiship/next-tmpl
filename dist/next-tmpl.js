/*!
 * name: @feizheng/next-tmpl
 * url: https://github.com/afeiship/next-tmpl
 * version: 1.0.2
 * date: 2020-03-14T04:33:27.223Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var FORMAT_RE = /(?:{)([\w.]+?)(?:})/gm;

  nx.tmpl = function(inString, inArgs) {
    var result = inString || '';
    var replaceFn = Array.isArray(inArgs)
      ? function(str, match) {
          return inArgs[match] || '';
        }
      : function(str, match) {
          return nx.get(inArgs, match) || '';
        };
    return result.replace(FORMAT_RE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tmpl;
  }
})();

//# sourceMappingURL=next-tmpl.js.map
