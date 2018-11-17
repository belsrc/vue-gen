module.exports = function(hasName) {
  const baseQuestions = [ {
    type: 'list',
    name: 'fileType',
    message: 'What type of file?',
    choices: [ 'JSX Component', 'Single File Component' ],
    filter: val => val === 'Single File Component' ? '.vue' : '.jsx',
  }, {
    type: 'list',
    name: 'isPage',
    message: 'What type of component?',
    choices: [ 'Standard Component', 'Router Page' ],
    filter: val => val === 'Router Page',
  }, {
    type: 'confirm',
    name: 'hasState',
    message: 'Does component have state?',
    default: false,
  } ];

  const nameQuestion = {
    type: 'input',
    name: 'name',
    message: 'Component name?',
  };

  return hasName ? baseQuestions : [ nameQuestion, ...baseQuestions ];
};
