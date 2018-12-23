jest.mock('./../src/blueprints/jsx-file');
jest.mock('./../src/blueprints/vue-file');

const genContent = require('./../src/get-content');

describe('genContent', () => {
  test('returns correctly for jsx file type', () => {
    const actual = genContent('.jsx');

    expect(actual).toEqual('JSX');
  });

  test('returns correctly for vue file type', () => {
    const actual = genContent('.vue');

    expect(actual).toEqual('VUE');
  });
});
