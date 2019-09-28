const fjp = require('fjp');

const quietLookup = prop => {
  const lookup = {
    file: 'jsx',
    component: 'standard',
    state: false,
    destination: process.cwd(),
  };

  /* eslint-disable fp-jxl/no-nil */
  return fjp.Maybe.of(lookup)
    .map(fjp.property(prop))
    .orElse(null);
};

module.exports = quietLookup;
