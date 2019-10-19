/* eslint-disable fp-jxl/no-mutation, fp-jxl/no-arguments */

const path = jest.genMockFromModule('path');

function resolve() {
  return [...arguments].join('/');
}

path.resolve = resolve;

module.exports = path;
