#!/usr/bin/env bash

yarn clean
# yarn lint
# yarn test
yarn build:packages
yarn workspace @jd/devbox-app run build
