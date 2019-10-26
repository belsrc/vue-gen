/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
import generate from '../src/generate';

jest.mock('path');
jest.mock('./../src/write-gen-files');

describe('generate', () => {
  test('returns expected generated output for standard jsx', async () => {
    const actual = await generate({
      name: 'test-component',
      file: 'jsx',
      component: 'standard',
      state: true,
      destination: './',
    });

    expect(actual).toMatchSnapshot();
  });

  test('returns expected generated output for router vue', async () => {
    const actual = await generate({
      name: 'test-component',
      file: 'sfc',
      component: 'router',
      state: false,
      destination: './',
    });

    expect(actual).toMatchSnapshot();
  });
});
