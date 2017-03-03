'use strict';

const chalk = require('chalk');
const express = require('express');

const app = express();
const json = require('../data/stub');

app.get('/', (req, res) => {
  const rnd = Math.ceil(Math.random() * 1000);
  console.log(chalk.yellow(`waiting ${rnd} milliseconds`));
  setTimeout(() => {
    console.log(chalk.green('serving some json'));
    res.send(json);
  }, rnd);
}).listen(3003).on('mount', console.log.bind(console));

console.log(chalk.yellow('stub server is running...'));
