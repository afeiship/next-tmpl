import nx from '@jswork/next';

const FORMAT_RE = /(?:{)([\w.]+?)(?:})/gm;
const EMPTY_STR = '';

nx.tmpl = function (inString, inArgs) {
  if (!inArgs) return inString;
  const result = inString || EMPTY_STR;
  const replaceFn = function (mat, match) {
    return nx.get(inArgs, match) || mat;
  };
  return result.replace(FORMAT_RE, replaceFn);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.tmpl;
}

export default nx.tmpl;
