#!/usr/bin/env bash

# want to stop at the first error
# TODO: read more at http://mywiki.wooledge.org/BashFAQ/105
set -e

echo " - Compiling TS files of currrent package $(pwd) to dist"
NODE_ENV=production BABEL_ENV="production:es2019" babel src \
  --config-file "../../babel.config.package.js" \
  --out-dir "dist" \
  --copy-files \
  --extensions ".ts,.tsx" \
  --root-mode upward

echo " - Build TS types of current package $(pwd) to dist/types"
tsc --project ./tsconfig.json \
  --emitDeclarationOnly \
  --outDir ./dist/types
  # --clean \
  # --verbose \
