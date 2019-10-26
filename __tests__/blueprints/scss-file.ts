/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
import genScss from '../../src/blueprints/scss-file';

const className = 'test-component';

describe('genScss', () => {
  test('has the expected ouput structure', () => {
    const actual = genScss(className);

    expect(actual).toMatchSnapshot();
  });
});
