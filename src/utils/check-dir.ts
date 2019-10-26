/* eslint-disable promise/prefer-await-to-then */
import { stat } from 'fs';

const promCheckDir = (filePath: string): Promise<boolean> =>
  new Promise(resolve => stat(filePath, error => error ? resolve(false) : resolve(true)));

const checkDir = async filePath => Promise.resolve().then(() => promCheckDir(filePath));

export default checkDir;
