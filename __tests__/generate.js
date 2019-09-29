/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-nil */
jest.mock('path');
jest.mock('./../src/write-gen-files');

const generate = require('./../src/generate');

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
