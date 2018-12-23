jest.mock('./../src/write-gen-files');

const generate = require('./../src/generate');

describe('generate', () => {
  test('returns expected generated output', async () => {
    const actual = await generate({
      name: 'test-component',
      fileType: '.jsx',
      isPage: false,
      hasState: true,
      destination: './',
    });

    expect(actual).toMatchSnapshot();
  });
});
