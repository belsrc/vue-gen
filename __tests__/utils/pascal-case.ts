/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
import pascalCase from '../../src/utils/pascal-case';

const expected = 'PascalTest';

describe('pascalCase', () => {
  test('returns empty string when arg is not a string', () => {
    const actual = pascalCase(null);

    expect(actual).toEqual('');
  });

  test('returns expected string when input is a spaced string', () => {
    const actual = pascalCase('Pascal test');

    expect(actual).toEqual(expected);
  });

  test('returns expected string when input is a kebab cased string', () => {
    const actual = pascalCase('pascal-test');

    expect(actual).toEqual(expected);
  });

  test('returns expected string when input is a snake cased string', () => {
    const actual = pascalCase('pascal_test');

    expect(actual).toEqual(expected);
  });

  test('returns expected string when input is already pascal cased', () => {
    const actual = pascalCase('PascalTest');

    expect(actual).toEqual(expected);
  });
});
