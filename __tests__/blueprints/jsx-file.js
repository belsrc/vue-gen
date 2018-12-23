const genJsx = require('./../../src/blueprints/jsx-file');

const compName = 'TestComponent';
const className = 'test-component';

describe('genJsx', () => {
  test('has the expected ouput structure not as page and without state', () => {
    const actual = genJsx(compName, className, false, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure as page and with state', () => {
    const actual = genJsx(compName, className, true, true);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure as page without state', () => {
    const actual = genJsx(compName, className, true, false);

    expect(actual).toMatchSnapshot();
  });

  test('has the expected ouput structure not as page with state', () => {
    const actual = genJsx(compName, className, false, true);

    expect(actual).toMatchSnapshot();
  });
});
