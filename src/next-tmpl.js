(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var FORMAT_RE = /(?:{)([\w.]+?)(?:})/gm;

  nx.tmpl = function(inString,inArgs){
    var result = inString || '';
    var replaceFn = Array.isArray(inArgs) ? function (str, match) {
        return inArgs[match];
      } : function (str, match) {
        return nx.path(inArgs, match);
      };
    return inString.replace(FORMAT_RE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tmpl;
  }

}());
