(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var formatRE = /(?:{)([\w.]+?)(?:})/gm;

  var tmpl = nx.tmpl = function(inString,inArgs){
    var result = inString || '';
    var replaceFn = nx.isArray(inArgs) ? function (str, match) {
        return inArgs[match];
      } : function (str, match) {
        return nx.path(inArgs, match);
      };
    return inString.replace(formatRE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = tmpl;
  }

}());
