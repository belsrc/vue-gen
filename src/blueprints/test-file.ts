const genTest = (
  componentName: string,
  compFile: string,
  isFunctional: boolean
) => `import '@babel/register';
import { shallowMount } from '@vue/test-utils';
import ${ componentName } from './${ compFile }';

// Template uses Jest and Vue test utils as an example
// npm i -D jest @vue/test-utils
// But your free to use whatever test setup you prefer

describe('${ componentName }', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });${
  !isFunctional ?
    `

  describe('Computed', () => {
    // test('should have correct <computed-name> computed value', () => {
    //   const wrapper = shallowMount(${ componentName });
    //
    //   const actual = wrapper.vm.<computed-name>;
    //
    //   expect(actual).toEqual(<value>);
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });` :
    ''
}${
  !isFunctional ?
    `

  describe('Methods', () => {
    // test('<method-name> should return correct value', () => {
    //   const wrapper = shallowMount(${ componentName });
    //
    //   const actual = wrapper.vm.<method-name>();
    //
    //   expect(actual).toEqual(<value>);
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });` :
    ''
}

  describe('Rendering', () => {
    // test('should not show some selector', () => {
    //   const wrapper = shallowMount(${ componentName });
    //
    //   const actual = wrapper.find('.class-selector).exists();
    //
    //   expect(actual).not.toBeTruthy();
    // });
    test.skip('NOT IMPLEMENTED', () => {});
  });
});
`;

export default genTest;
