'use strict';

const chalk = require('chalk');
const express = require('express');
const getPort = require('get-port');

const app = express();
const json = require('../data/stub');

app.get('/:id?', getItems)

getPort().then(port => {
  app.listen(port);
  console.log(chalk.yellow(`Stub server running on port ${port}`));
});

function getItems (req, res) {
  const rnd = Math.ceil(Math.random() * 1000);
  const id = req.params.id;
  const response = (id && json[id]) ? json[id] : json;
  console.log(chalk.yellow(`waiting ${rnd} milliseconds`));
  setTimeout(() => {
    console.log(chalk.green('serving some json'));
    res.send(response);
  }, rnd);
}
