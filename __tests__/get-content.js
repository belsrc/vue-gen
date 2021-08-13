/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
jest.mock('./../src/blueprints/jsx-file');
jest.mock('./../src/blueprints/jsx-func-file');
jest.mock('./../src/blueprints/vue-file');
jest.mock('./../src/blueprints/vue-func-file');

const genContent = require('./../src/get-content');

describe('genContent', () => {
  test('returns correctly for jsx file type', () => {
    const actual = genContent('.jsx', 'test-comp', 'test-comp', false, false, false, false);

    expect(actual).toEqual('JSX');
  });

  test('returns correctly for ts jsx file type', () => {
    const actual = genContent('.tsx', 'test-comp', 'test-comp', false, false, false, true);

    expect(actual).toEqual('TS-JSX');
  });

  test('returns correctly for jsx functional file type', () => {
    const actual = genContent('.jsx', 'test-comp', 'test-comp', false, false, true, false);

    expect(actual).toEqual('FN-JSX');
  });

  test('returns correctly for vue file type', () => {
    const actual = genContent('.vue', 'test-comp', 'test-comp', false, false, false, false);

    expect(actual).toEqual('VUE');
  });

  test('returns correctly for ts vue file type', () => {
    const actual = genContent('.vue', 'test-comp', 'test-comp', false, false, false, true);

    expect(actual).toEqual('TS-VUE');
  });

  test('returns correctly for vue functional file type', () => {
    const actual = genContent('.vue', 'test-comp', 'test-comp', false, false, true, false);

    expect(actual).toEqual('FN-VUE');
  });
});
