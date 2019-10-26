import { Answers, Question } from './_types';

export default function questions({ name, file, component, state, functional }: Answers) {
  const nameQuestion: Question = {
    type: 'input',
    name: 'name',
    message: 'Component name?',
    when: () => !name,
  };

  const fileQuestion: Question = {
    type: 'list',
    name: 'file',
    message: 'What type of file?',
    choices: [ 'JSX Component', 'Single File Component' ],
    filter: val => val === 'Single File Component' ? 'sfc' : 'jsx',
    when: () => !file,
  };

  const functionalQuestion: Question = {
    type: 'confirm',
    name: 'functional',
    message: 'Is this a functional component?',
    default: false,
    when: () => !functional,
  };

  const componentQuestion: Question = {
    type: 'list',
    name: 'component',
    message: 'What type of component?',
    choices: [ 'Standard Component', 'Router Page' ],
    filter: val => val === 'Router Page' ? 'router' : 'standard',
    when: answers => !component && !answers.functional,
  };

  const stateQuesiton: Question = {
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
}
