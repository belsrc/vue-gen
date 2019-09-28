/* eslint-disable promise/prefer-await-to-then */
const fs = require('fs');

const promWriteFile = (filePath, content) =>
  new Promise((resolve, reject) =>
    fs.writeFile(filePath, content, { encoding: 'utf8', flag: 'w' }, error =>
      error ? reject(error) : resolve()));

const writeFile = async (filePath, content) =>
  Promise.resolve().then(() => promWriteFile(filePath, content));

module.exports = writeFile;
