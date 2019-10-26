#! /usr/bin/env node
import program from 'commander';
import inquirer from 'inquirer';
import { altAssoc, compose, identity } from 'fjp';
import packageFile from '../package.json';
import getQuestions from './questions';
import generate from './generate';
import quietParam from './utils/quiet-params';

import { Answers } from './_types';

const assocInput = (quiet: {}, val: string | boolean, prop: string): Answers =>
  val ? altAssoc(prop, val) : quiet ? altAssoc(prop, quietParam(prop)) : identity;

const main = async () => {
  const cmdInput = program
    .version(packageFile.version)
    .usage('[component] [destination] [options]')
    .option('--file [file type]', 'type of file [jsx | sfc]')
    .option('--component [component type]', 'type of component [standard | router]')
    .option('-f, --functional', 'create a functional component')
    .option('-s, --state', 'adds state to component')
    .option(
      '-q, --quiet',
      'create component using defaults for any missing arguments [jsx | standard | no state]'
    )
    .parse(process.argv);

  const [name, dest] = cmdInput.args;
  const { file, component, state, quiet, functional } = (cmdInput as unknown) as Answers;
  const supplied = {
    name,
    file,
    component,
    state,
    functional,
  };

  if (quiet && !name) {
    return console.error(
      'Error: name must be provided when using the --quiet option. See vuegen --help for information'
    );
  }

  const quietInputs = compose(
    assocInput(quiet, file, 'file'),
    assocInput(quiet, component, 'component'),
    assocInput(quiet, state, 'state'),
    altAssoc('destination', dest ? dest : process.cwd())
  );

  const questions = getQuestions(supplied);

  const answers: Answers = quiet
    ? quietInputs({})
    : questions.length
    ? await inquirer.prompt(questions)
    : supplied;

  const destination = dest ? dest : process.cwd();

  const merge = (first: {}, second: {}) => ({ ...first, ...second });

  const addName: Answers = assocInput(false, name, 'name');

  const addDest: Answers = altAssoc('destination', destination);

  const genFromArgs = compose(
    generate,
    addName,
    addDest,
    merge
  );

  return genFromArgs(supplied, answers);
};

try {
  main();
} catch (error) {
  console.log(error.message);
}
