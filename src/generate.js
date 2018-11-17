const path = require('path');
const fs = require('fs');
const fjp = require('fjp');
const kebabCase = require('./kebab-case');
const pascalCase = require('./pascal-case');
const testFile = require('./test-file');
const jsxFile = require('./jsx-file');
const vueFile = require('./vue-file');
const scssFile = require('./scss-file');

const COMPONENT_FILE = 'index';
const SCSS_FILE = 'styles.scss';

// Make the destination directory
const makeDir = async filePath =>
  Promise.resolve().then(() =>
    fs.mkdir(filePath, { recursive: true }, error => {
      if(error) {
        return Promise.reject(error);
      }

      return Promise.resolve();
    }));

// Write each of the files
const writeFile = async (filePath, content) =>
  Promise.resolve().then(() =>
    fs.writeFile(filePath, content, 'utf8', error => {
      if(error) {
        return Promise.reject(error);
      }

      return Promise.resolve();
    }));

// Handle making the directory and writing the files.
const writeGenFiles = fjp.curry(async (destination, files) => {
  await makeDir(destination);

  return Promise.all(Object.entries(files).map(([ dest, cont ]) => writeFile(dest, cont)));
});

// Generate the test file path
const testPath = (destination, className) => path.join(destination, className, `${ className }.test.js`);

// Generate the style file path
const getStyles = (fileType, destination, className) =>
  fileType === '.jsx' ? fjp.altAssoc(path.join(destination, className, SCSS_FILE), scssFile(className)) : fjp.identity;

// Generate the component file contents
const genContent = (fileType, componentName, className, isPage, hasState) =>
  fileType === '.jsx' ?
    jsxFile(componentName, className, isPage, hasState) :
    vueFile(componentName, className, isPage, hasState);

const generate = async ({ name, fileType, isPage, hasState, destination }) => {
  const className = kebabCase(name);
  const componentName = pascalCase(name);
  const compFile = `${ COMPONENT_FILE }${ fileType }`;

  const genFiles = fjp.compose(
    writeGenFiles(path.join(destination, className)),
    getStyles(fileType, destination, className),
    fjp.altAssoc(
      path.join(destination, className, compFile),
      genContent(fileType, componentName, className, isPage, hasState)
    ),
    fjp.altAssoc(testPath(destination, className), testFile(componentName, compFile))
  );

  return await genFiles({});
};

module.exports = generate;
