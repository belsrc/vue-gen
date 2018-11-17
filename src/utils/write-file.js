const fs = require('fs');

const writeFile = async (filePath, content) =>
  Promise.resolve()
    .then(() =>
      fs.writeFile(filePath, content, 'utf8', error => {
        if(error) {
          throw error;
        }

        return Promise.resolve();
      }))
    .catch(() => console.error(`Error writing file: ${ filePath }`));

module.exports = writeFile;
