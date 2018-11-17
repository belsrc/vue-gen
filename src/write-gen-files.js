const fjp = require('fjp');
const makeDir = require('./utils/make-dir');
const writeFile = require('./utils/write-file');

const writeGenFiles = fjp.curry(async (destination, files) => {
  try {
    await makeDir(destination);

    return Promise.all(Object.entries(files).map(([ dest, cont ]) => writeFile(dest, cont)));
  }
  catch(error) {
    console.error('Error generating files');
  }
});

module.exports = writeGenFiles;
