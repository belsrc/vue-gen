import { property, Maybe } from 'fjp';

const quietLookup = (prop: string) => {
  const lookup = {
    file: 'jsx',
    component: 'standard',
    state: false,
    destination: process.cwd(),
  };

  /* eslint-disable fp-jxl/no-nil */
  return Maybe.of(lookup)
    .map(property(prop))
    .orElse(null);
};

export default quietLookup;
