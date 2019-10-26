/* eslint-disable promise/prefer-await-to-then */
import { mkdir } from 'fs';
import checkDir from './check-dir';

const promMkDir = (filePath: string): Promise<string> =>
  new Promise((resolve, reject) =>
    mkdir(filePath, { recursive: true }, error => error ? reject(error) : resolve(filePath)));

const makeDir = async (filePath: string) =>
  Promise.resolve()
    .then(() => checkDir(filePath))
    .then(exists => exists ? filePath : promMkDir(filePath));

export default makeDir;
