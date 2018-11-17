const fs = require('fs');

const makeDir = async filePath =>
  Promise.resolve()
    .then(() =>
      fs.mkdir(filePath, { recursive: true }, error => {
        if(error) {
          throw error;
        }

        return Promise.resolve();
      }))
    .catch(() => console.error(`Error creating directory: ${ filePath }. Recursive not supported on Windows`));

module.exports = makeDir;
