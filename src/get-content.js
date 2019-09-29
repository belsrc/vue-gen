const jsxFile = require('./blueprints/jsx-file');
const jsxFnFile = require('./blueprints/jsx-func-file');
const vueFile = require('./blueprints/vue-file');
const vueFnFile = require('./blueprints/vue-func-file');

const genContent = (fileType, componentName, className, isPage, hasState, functional) =>
  fileType === '.jsx' ?
    functional ?
      jsxFnFile(componentName, className) :
      jsxFile(componentName, className, isPage, hasState) :
    functional ?
      vueFnFile(componentName, className) :
      vueFile(componentName, className, isPage, hasState);

module.exports = genContent;
