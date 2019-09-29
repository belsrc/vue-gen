/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
jest.mock('./../src/blueprints/scss-file');

const getStyles = require('./../src/get-styles');
const path = require('path');
const className = 'test-class';
const dest = './';
const expectDest = path.resolve('./', className, 'styles.scss');

describe('getStyles', () => {
  test('returns correctly for jsx file type', () => {
    const actual = getStyles('.jsx', dest, className)({});

    expect(actual).toEqual({ [expectDest]: 'SCSS' });
  });

  test('returns correctly for vue file type', () => {
    const actual = getStyles('.vue', dest, className)({});

    expect(actual).toEqual({});
  });
});
