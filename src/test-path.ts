import { resolve } from 'path';

const testPath = (destination: string, className: string) =>
  resolve(destination, className, `${ className }.test.js`);

export default testPath;
