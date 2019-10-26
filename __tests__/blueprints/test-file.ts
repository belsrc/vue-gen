/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
import genTest from '../../src/blueprints/test-file';

const compName = 'TestComponent';
const fileName = 'test-component';

describe('genTest', () => {
  test('has the expected ouput structure', () => {
    const actual = genTest(compName, fileName, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure when functional', () => {
    const actual = genTest(compName, fileName, true);

    expect(actual).toMatchSnapshot();
  });
});
