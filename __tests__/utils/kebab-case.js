const kebabCase = require('./../../src/utils/kebab-case');

const expected = 'kebab-test';

describe('kebabCase', () => {
  test('returns empty string when arg is not a string', () => {
    const actual = kebabCase(null);

    expect(actual).toEqual('');
  });

  test('returns expected string when input is a spaced string', () => {
    const actual = kebabCase('Kebab test');

    expect(actual).toEqual(expected);
  });

  test('returns expected string when input is a pascal cased string', () => {
    const actual = kebabCase('KebabTest');

    expect(actual).toEqual(expected);
  });

  test('returns expected string when input is a snake cased string', () => {
    const actual = kebabCase('kebab_test');

    expect(actual).toEqual(expected);
  });

  test('returns expected string when input is already kebab cased', () => {
    const actual = kebabCase('kebab-test');

    expect(actual).toEqual(expected);
  });
});
