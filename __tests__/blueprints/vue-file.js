/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
const genVue = require('./../../src/blueprints/vue-file');

const compName = 'TestComponent';
const className = 'test-component';

describe('genVue', () => {
  // Vanilla
  test('has the expected ouput structure not as page and without state', () => {
    const actual = genVue(compName, className, false, false, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure as page and with state', () => {
    const actual = genVue(compName, className, true, true, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure as page without state', () => {
    const actual = genVue(compName, className, true, false, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure not as page with state', () => {
    const actual = genVue(compName, className, false, true, false);

    expect(actual).toMatchSnapshot();
  });

  // Typescript
  test('has the expected ouput structure with Typescript not as page and without state', () => {
    const actual = genVue(compName, className, false, false, true);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure with Typescript as page and with state', () => {
    const actual = genVue(compName, className, true, true, true);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure with Typescript as page without state', () => {
    const actual = genVue(compName, className, true, false, true);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure with Typescript not as page with state', () => {
    const actual = genVue(compName, className, false, true, true);

    expect(actual).toMatchSnapshot();
  });
});
