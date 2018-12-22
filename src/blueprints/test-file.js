const genTest = (componentName, compFile) => `import 'babel-core/register';
import { shallowMount } from '@vue/test-utils';
import ${ componentName } from './${ compFile }';

// Template uses Jest and Vue test utils as an example
// npm i -D jest @vue/test-utils
// But your free to use whatever test setup you prefer

describe('${ componentName }', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    // This is the equavalant of
    // "jest": {
    //   "clearMocks": true,
    //   "resetModules": true
    // }
    // in the Jest config
  });

  describe('Props', () => {
    // test('expect <prop-name> property config to be correct', () => {
    //   const wrapper = shallowMount(${ componentName });
    //   const <prop-name> = wrapper.vm.$options.props.<prop-name>;
    //   expect(<prop-name>.required).toBeTruthy();
    //   expect(<prop-name>.type).toEqual(String);
    //   expect(<prop-name>.default).toEqual('');
    //   expect(<prop-name>.validator && <prop-name>.validator('aa')).toBeTruthy()
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });

  describe('Data', () => {
    // test('has correct <data-name> data property', () => {
    //   const wrapper = shallowMount(${ componentName });
    //   expect(wrapper.vm.<data-name>).toEqual(<value>);
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });

  describe('Computed', () => {
    // test('has correct <computed-name> computed property', () => {
    //   const wrapper = shallowMount(${ componentName });
    //   expect(wrapper.vm.<computed-name>).toEqual(<value>);
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });

  describe('Rendering', () => {
    // test('has the expected html structure', () => {
    //   const wrapper = shallowMount(${ componentName });
    //   expect(wrapper.element).toMatchSnapshot();
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });
});
`;

module.exports = genTest;
