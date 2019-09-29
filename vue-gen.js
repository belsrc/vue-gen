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
    .option('-f, --functional', 'create a functional component')
    .option('-s, --state', 'adds state to component')
    .option('-q, --quiet', 'create component using defaults for any missing arguments [jsx | standard | no state]')
    .parse(process.argv);

  const [ name, dest ] = cmdInput.args;
  const { file, component, state, quiet, functional } = cmdInput;
  const supplied = { name, file, component, state, functional };

  if(quiet && !name) {
    return console.error('Error: name must be provided when using the --quiet option. See vuegen --help for information');
  }

  const quietInputs = fjp.compose(
    assocInput(quiet, file, 'file'),
    assocInput(quiet, component, 'component'),
    assocInput(quiet, state, 'state'),
    fjp.altAssoc('destination', dest ? dest : process.cwd())
  );

  // Need to make so that if all other command flags are present, default state to false
  // Not giving state makes it output sfc even when jsx is specified

  const questions = getQuestions(supplied);

  const answers = quiet ?
    quietInputs({}) :
    questions.length ?
      await inquirer.prompt(questions) :
      supplied;

  const destination = dest ? dest : process.cwd();

  const addName = assocInput(false, name, 'name');

  const addDest = fjp.altAssoc('destination', destination);

  const genFromArgs = fjp.compose(generate, addName, addDest);

  return genFromArgs(answers);
};

try {
  return main();
}
catch(error) {
  return console.log(error.message);
}
