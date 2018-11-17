const jsxFile = require('./blueprints/jsx-file');
const vueFile = require('./blueprints/vue-file');

const genContent = (fileType, componentName, className, isPage, hasState) =>
  fileType === '.jsx' ?
    jsxFile(componentName, className, isPage, hasState) :
    vueFile(componentName, className, isPage, hasState);

module.exports = genContent;
