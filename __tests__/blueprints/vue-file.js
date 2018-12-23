const genVue = require('./../../src/blueprints/vue-file');

const compName = 'TestComponent';
const className = 'test-component';

describe('genVue', () => {
  test('has the expected ouput structure not as page and without state', () => {
    const actual = genVue(compName, className, false, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure as page and with state', () => {
    const actual = genVue(compName, className, true, true);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure as page without state', () => {
    const actual = genVue(compName, className, true, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure not as page with state', () => {
    const actual = genVue(compName, className, false, true);

    expect(actual).toMatchSnapshot();
  });
});
