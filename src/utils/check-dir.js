/* eslint-disable promise/prefer-await-to-then */
const fs = require('fs');

const promCheckDir = filePath =>
  new Promise(resolve => fs.stat(filePath, error => error ? resolve(false) : resolve(true)));

const checkDir = async filePath => Promise.resolve().then(() => promCheckDir(filePath));

module.exports = checkDir;
