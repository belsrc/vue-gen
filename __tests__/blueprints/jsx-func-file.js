/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
const genFnJsx = require('./../../src/blueprints/jsx-func-file');

const compName = 'TestComponent';
const className = 'test-component';

describe('genFnJsx', () => {
  test('has the expected ouput structure', () => {
    const actual = genFnJsx(compName, className);

    expect(actual).toMatchSnapshot();
  });
});
