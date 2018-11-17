const path = require('path');

const testPath = (destination, className) => path.resolve(destination, className, `${ className }.test.js`);

module.exports = testPath;
