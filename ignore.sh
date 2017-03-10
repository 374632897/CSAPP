#!/bin/bash
for file in chapter{3..10}; do
  cp chapter2/.gitignore $file/;
done;
