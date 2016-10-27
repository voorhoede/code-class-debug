#!/bin/bash

dist='./dist';

if [ ! -d $dist ];
then
  echo "creating $dist";
  mkdir $dist;
fi

browserify \
--debug \
./src/index.js \
-o ./dist/index.js \
&& \
echo 'watching files...'; \
watchify -v \
./src/index.js \
-o ./dist/index.js
