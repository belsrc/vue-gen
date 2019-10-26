import jsxFile from './blueprints/jsx-file';
import jsxFnFile from './blueprints/jsx-func-file';
import vueFile from './blueprints/vue-file';
import vueFnFile from './blueprints/vue-func-file';

const genContent = (
  fileType: string,
  componentName: string,
  className: string,
  isPage: boolean,
  hasState: boolean,
  functional: boolean
) =>
  fileType === '.jsx' ?
    functional ?
      jsxFnFile(componentName, className) :
      jsxFile(componentName, className, isPage, hasState) :
    functional ?
      vueFnFile(componentName, className) :
      vueFile(componentName, className, isPage, hasState);

export default genContent;
