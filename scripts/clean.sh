#!/usr/bin/env bash

CLEAN_ALL=${1-default}

echo " - Start to remove generated project folders"
rm -rf build
rm -rf dist
rm -rf coverage

if [ "$CLEAN_ALL" = "all" ]; then
  echo " - Start to remove all 'node_modules' folders"
  find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
fi
