module.exports = function({ name, file, component, state, functional }) {
  const nameQuestion = {
    type: 'input',
    name: 'name',
    message: 'Component name?',
    when: () => !name,
  };

  const fileQuestion = {
    type: 'list',
    name: 'file',
    message: 'What type of file?',
    choices: [ 'JSX Component', 'Single File Component' ],
    filter: val => val === 'Single File Component' ? 'sfc' : 'jsx',
    when: () => !file,
  };

  const functionalQuestion = {
    type: 'confirm',
    name: 'functional',
    message: 'Is this a functional component?',
    default: false,
    when: () => !functional,
  };

  const componentQuestion = {
    type: 'list',
    name: 'component',
    message: 'What type of component?',
    choices: [ 'Standard Component', 'Router Page' ],
    filter: val => val === 'Router Page' ? 'router' : 'standard',
    when: answers => !component && !answers.functional,
  };

  const stateQuesiton = {
    type: 'confirm',
    name: 'state',
    message: 'Does component have state?',
    default: false,
    when: answers => state == null && !answers.functional,
  };

  return [
    nameQuestion,
    fileQuestion,
    functionalQuestion,
    componentQuestion,
    stateQuesiton,
  ];
};
