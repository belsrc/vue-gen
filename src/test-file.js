const genTest = (componentName, compFile) => `import 'babel-core/register';
import test from 'ava';
import ${ componentName.slice(0, 1).toLowerCase() }${ componentName.slice(1) } from './${ compFile }';

test('throws not yet implemented', t => {
  t.throws(() => {
    throw new Error('Not Yet Implemented');
  });
});
`;

module.exports = genTest;
