const path = require('path');
const fjp = require('fjp');
const kebabCase = require('./utils/kebab-case');
const pascalCase = require('./utils/pascal-case');
const testFile = require('./blueprints/test-file');
const writeGenFiles = require('./write-gen-files');
const testPath = require('./test-path');
const getStyles = require('./get-styles');
const genContent = require('./get-content');

const COMPONENT_FILE = 'index';

const generate = async ({ name, fileType, isPage, hasState, destination }) => {
  const className = kebabCase(name);
  const componentName = pascalCase(name);
  const compFile = `${ COMPONENT_FILE }${ fileType }`;

  const genFiles = fjp.compose(
    writeGenFiles(path.resolve(destination, className)),
    getStyles(fileType, destination, className),
    fjp.altAssoc(
      path.resolve(destination, className, compFile),
      genContent(fileType, componentName, className, isPage, hasState)
    ),
    fjp.altAssoc(testPath(destination, className), testFile(componentName, compFile))
  );

  return await genFiles({});
};

module.exports = generate;
