'use strict';

const chalk = require('chalk');
const express = require('express');

const app = express();
const json = require('../data/stub');
const port = 3000;

app.get('/:id?', getItems)
app.listen(port);

console.log(chalk.yellow(`Stub server running on port ${port}`));

function getItem (list, id) {
  if (!id) {
    return list;
  }
  for (let item of list) {
    if (item.id === parseInt(id, 10)) {
      return Array.of(item);
    }
  }
}

function getItems (req, res) {
  const rnd = Math.ceil(Math.random() * 1000);
  const id = req.params.id;
  const response = getItem(json, id);
  console.log(chalk.yellow(`waiting ${rnd} milliseconds`));
  setTimeout(() => {
    console.log(chalk.green('serving some json'));
    res.send(response || []);
  }, rnd);
}
