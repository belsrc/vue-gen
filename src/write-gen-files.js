const fjp = require('fjp');
const makeDir = require('./utils/make-dir');
const writeFile = require('./utils/write-file');

const fileList = filesObj => Object.entries(filesObj).map(([ dest, cont ]) => writeFile(dest, cont));

const writeGenFiles = fjp.curry(async (destination, files) => {
  /* eslint-disable-next-line fp-jxl/no-unused-expression */
  await makeDir(destination);

  return fjp.compose(
    x => Promise.all(x),
    fileList
  )(files);
});

module.exports = writeGenFiles;
