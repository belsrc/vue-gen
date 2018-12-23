const fjp = require('fjp');

module.exports = jest.fn(fjp.curry(async (destination, files) => Promise.resolve(files)));
