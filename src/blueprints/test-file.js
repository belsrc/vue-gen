const genTest = (componentName, compFile) => `import 'babel-core/register';
import { shallowMount } from '@vue/test-utils';
import ${ componentName } from './${ compFile }';

// Template uses Jest and Vue test utils as an example
// npm i -D jest @vue/test-utils
// But your free to use whatever test setup you prefer

describe('${ componentName }', () => {
  let wrapper;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    wrapper = shallowMount(${ componentName });
  });

  describe('Data', () => {
    // test('has correct <data-name> data property', () => {
    //   expect(wrapper.vm.<data-name>).toEqual(<value>);
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });

  describe.skip('Computed', () => {
    // test('has correct <computed-name> computed property', () => {
    //   expect(wrapper.vm.<computed-name>).toEqual(<value>);
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });

  describe.skip('Rendering', () => {
    // test('has the expected html structure', () => {
    //   expect(wrapper.element).toMatchSnapshot();
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });
});
`;

module.exports = genTest;
