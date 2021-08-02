#!/usr/bin/env bash

for dir in $(find ./packages/ -mindepth 1 -maxdepth 1 -type d) ;
do
  dir_name=${dir%*/}      # remove the trailing "/"
  dir_name="${dir_name##*/}" # print everything after the final "/"

  echo " - Building $dir_name ..."
  yarn workspace "@jd/$dir_name" run build
done
