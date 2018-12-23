const genScss = require('./../../src/blueprints/scss-file');

const className = 'test-component';

describe('genScss', () => {
  test('has the expected ouput structure', () => {
    const actual = genScss(className);

    expect(actual).toMatchSnapshot();
  });
});
