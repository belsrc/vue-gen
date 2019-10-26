import { curry, compose } from 'fjp';
import makeDir from './utils/make-dir';
import writeFile from './utils/write-file';

const fileList = (filesObj: {}) =>
  Object.entries(filesObj).map(([ dest, cont ]: [string, string]) => writeFile(dest, cont));

const writeGenFiles: (obj: {}) => Promise<void[]> = curry(async (destination: string, files: {}): Promise<[]> => {
  /* eslint-disable-next-line fp-jxl/no-unused-expression */
  await makeDir(destination);

  return compose(
    Promise.all,
    fileList
  )(files);
});

export default writeGenFiles;
