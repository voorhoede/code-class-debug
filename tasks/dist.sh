#!/bin/bash

dist='./dist';

if [ ! -d $dist ];
then
  echo "creating $dist";
  mkdir $dist;
fi
