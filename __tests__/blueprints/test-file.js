const genTest = require('./../../src/blueprints/scss-file');

const compName = 'TestComponent';
const fileName = 'test-component';

describe('genTest', () => {
  test('has the expected ouput structure', () => {
    const actual = genTest(compName, fileName);

    expect(actual).toMatchSnapshot();
  });
});
