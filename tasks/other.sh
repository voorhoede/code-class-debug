#!/bin/bash
glob='src/index.{html,css}';

cp src/index.{html,css} ./dist;
./node_modules/.bin/chokidar "$glob" -c "cp $glob ./dist";
