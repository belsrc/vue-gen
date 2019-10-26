/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
import genFnVue from '../../src/blueprints/vue-func-file';

const compName = 'TestComponent';
const className = 'test-component';

describe('genFnVue', () => {
  test('has the expected ouput structure', () => {
    const actual = genFnVue(compName, className);

    expect(actual).toMatchSnapshot();
  });
});
