const path = jest.genMockFromModule('path');

function resolve() {
  return [...arguments].join('/');
}

path.resolve = resolve;

module.exports = path;
