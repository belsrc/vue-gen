#! /usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const fjp = require('fjp');
const packageFile = require('./package.json');
const getQuestions = require('./src/questions');
const generate = require('./src/generate');

program
  .version(packageFile.version)
  .usage('[component] [destination]')
  .parse(process.argv);

const [ name, dest ] = program.args;

inquirer.prompt(getQuestions(!!name)).then(answers => {
  const destination = dest ? dest : __dirname;
  const addName = name ? fjp.altAssoc('name', name) : fjp.identity;
  const adArgs = fjp.compose(
    addName,
    fjp.altAssoc('destination', destination)
  );

  generate(adArgs(answers));
});
