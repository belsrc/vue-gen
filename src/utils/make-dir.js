/* eslint-disable promise/prefer-await-to-then */
const fs = require('fs');
const checkDir = require('./check-dir');

const promMkDir = filePath =>
  new Promise((resolve, reject) =>
    fs.mkdir(filePath, { recursive: true }, error => error ? reject(error) : resolve(filePath)));

const makeDir = async filePath =>
  Promise.resolve()
    .then(() => checkDir(filePath))
    .then(exists => exists ? filePath : promMkDir(filePath));

module.exports = makeDir;
