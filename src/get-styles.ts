import { resolve } from 'path';
import { altAssoc, identity } from 'fjp';
import scssFile from './blueprints/scss-file';

const SCSS_FILE = 'styles.scss';

const getStyles = (fileType: string, destination: string, className: string): ((obj: {}) => {}) =>
  fileType === '.jsx' ?
    altAssoc(resolve(destination, className, SCSS_FILE), scssFile(className)) :
    identity;

export default getStyles;
