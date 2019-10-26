import { curry } from 'fjp';

const writeGenFiles = jest.fn(curry(async (destination, files) => Promise.resolve(files)));

export default writeGenFiles;
