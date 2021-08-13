const path = require('path');
const fjp = require('fjp');
const scssFile = require('./blueprints/scss-file');

const SCSS_FILE = 'styles.scss';

const getStyles = (fileType, destination, className) =>
  fileType === '.jsx' || fileType === '.tsx' ?
    fjp.altAssoc(path.resolve(destination, className, SCSS_FILE), scssFile(className)) :
    fjp.identity;

module.exports = getStyles;
