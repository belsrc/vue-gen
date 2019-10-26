import { resolve } from 'path';
import { compose, altAssoc } from 'fjp';
import kebabCase from './utils/kebab-case';
import pascalCase from './utils/pascal-case';
import testFile from './blueprints/test-file';
import writeGenFiles from './write-gen-files';
import testPath from './test-path';
import getStyles from './get-styles';
import genContent from './get-content';
import { Answers } from './_types';

const COMPONENT_FILE = 'index';
const isPageComp = (val: string) => val === 'router';

const generate = async ({
  name,
  file,
  component,
  state,
  destination,
  functional,
}: Answers): Promise<void[]> => {
  const className = kebabCase(name);
  const componentName = pascalCase(name);
  const isPage = isPageComp(component);
  const fileType = file === 'jsx' ? '.jsx' : '.vue';
  const compFile = `${ COMPONENT_FILE }${ fileType }`;

  const genFiles: (obj: {}) => Promise<void[]> = compose(
    writeGenFiles(resolve(destination, className)),
    getStyles(fileType, destination, className),
    altAssoc(
      resolve(destination, className, compFile),
      genContent(fileType, componentName, className, isPage, state, functional)
    ),
    altAssoc(testPath(destination, className), testFile(componentName, compFile, functional))
  );

  return await genFiles({});
};

export default generate;
