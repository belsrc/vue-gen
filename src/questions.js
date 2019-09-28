module.exports = function({ name, file, component, state }) {
  const nameQuestion = {
    type: 'input',
    name: 'name',
    message: 'Component name?',
  };

  const fileQuestion = {
    type: 'list',
    name: 'file',
    message: 'What type of file?',
    choices: [ 'JSX Component', 'Single File Component' ],
    filter: val => val === 'Single File Component' ? 'sfc' : 'jsx',
  };

  const componentQuestion = {
    type: 'list',
    name: 'component',
    message: 'What type of component?',
    choices: [ 'Standard Component', 'Router Page' ],
    filter: val => val === 'Router Page' ? 'router' : 'standard',
  };

  const stateQuesiton = {
    type: 'confirm',
    name: 'state',
    message: 'Does component have state?',
    default: false,
  };

  /* eslint-disable fp-jxl/no-nil */
  return [
    !name ? nameQuestion : null,
    !file ? fileQuestion : null,
    !component ? componentQuestion : null,
    state == null ? stateQuesiton : null,
  ].filter(x => x != null);
};
