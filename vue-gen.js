#! /usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const fjp = require('fjp');
const packageFile = require('./package.json');
const getQuestions = require('./src/questions');
const generate = require('./src/generate');
const quietParam = require('./src/utils/quiet-params');

const assocInput = (quiet, val, prop) =>
  val ? fjp.altAssoc(prop, val) : quiet ? fjp.altAssoc(prop, quietParam(prop)) : fjp.identity;

const main = async () => {
  const cmdInput = program
    .version(packageFile.version)
    .usage('[component] [destination] [options]')
    .option('--file [file type]', 'type of file [jsx | sfc]')
    .option('--component [component type]', 'type of component [standard | router]')
    .option('-t, --typescript', 'create a component using Typescript')
    .option('-f, --functional', 'create a functional component')
    .option('-s, --state', 'adds state to component')
    .option(
      '-q, --quiet',
      'create component using defaults for any missing arguments [jsx | standard | no state]'
    )
    .parse(process.argv);

  const [ name, dest ] = cmdInput.args;
  const { file, component, state, quiet, functional, typescript } = cmdInput;
  const supplied = {
    name,
    file,
    component,
    state,
    functional,
    typescript,
  };

  if(quiet && !name) {
    return console.error('Error: name must be provided when using the --quiet option. See vuegen --help for information');
  }

  const quietInputs = fjp.compose(
    assocInput(quiet, file, 'file'),
    assocInput(quiet, component, 'component'),
    assocInput(quiet, state, 'state'),
    assocInput(quiet, typescript, 'typescript'),
    fjp.altAssoc('destination', dest ? dest : process.cwd())
  );

  const questions = getQuestions(supplied);

  const answers = quiet ?
    quietInputs({}) :
    questions.length ?
      await inquirer.prompt(questions) :
      supplied;

  const destination = dest ? dest : process.cwd();

  const merge = (first, second) => ({ ...first, ...second });

  const addName = assocInput(false, name, 'name');

  const addDest = fjp.altAssoc('destination', destination);

  const genFromArgs = fjp.compose(
    generate,
    addName,
    addDest,
    merge
  );

  return genFromArgs(supplied, answers);
};

try {
  return main();
}
catch(error) {
  return console.log(error.message);
}
