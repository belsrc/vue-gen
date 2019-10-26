/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
import { resolve } from 'path';
import getStyles from '../src/get-styles';

jest.mock('./../src/blueprints/scss-file');

const className = 'test-class';
const dest = './';
const expectDest = resolve('./', className, 'styles.scss');

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
