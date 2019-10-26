/* eslint-disable promise/prefer-await-to-then */
import { writeFile as fsWriteFile } from 'fs';

const promWriteFile = (filePath: string, content: string): Promise<void> =>
  new Promise((resolve, reject) =>
    fsWriteFile(filePath, content, { encoding: 'utf8', flag: 'w' }, error =>
      error ? reject(error) : resolve()));

const writeFile = async (filePath: string, content: string) =>
  Promise.resolve().then(() => promWriteFile(filePath, content));

export default writeFile;
